import React, { useState } from 'react';
// TODO: expo-app-loading is deprecated, Need To change expo-splash-screen
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
    images.map((image) => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.loadAsync(image);
        }
    });

export default function App() {
    // 단순 asset만 prefetch하려면 hooks를 사용하는 것이 낫다
    // const [assets] = useAssets([
    //     require('./instagram.png'),
    //     'https://reactnative.dev/img/oss_logo.png',
    // ]);
    // const [loaded] = Font.useFonts(Ionicons.font);

    const [ready, setReady] = useState(false);

    const onFinish = () => setReady(true);

    const startLoading = async () => {
        const fonts = loadFonts([Ionicons.font]);
        const images = loadImages([
            require('./instagram.png'),
            'https://reactnative.dev/img/oss_logo.png',
        ]);

        await Promise.all([...fonts, ...images]);
    };

    if (!ready) {
        return (
            <AppLoading
                startAsync={startLoading}
                onFinish={onFinish}
                onError={console.error}
            />
        );
    }

    return <Text>We are done</Text>;
}
