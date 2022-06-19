import React, { useState } from 'react';
// TODO: expo-app-loading is deprecated, Need To change expo-splash-screen
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default function App() {
    const [ready, setReady] = useState(false);

    const onFinish = () => setReady(true);

    const startLoading = async () => {
        await Font.loadAsync(Ionicons.font);
        await Asset.loadAsync(require('./instagram.png'));
        await Image.prefetch('https://reactnative.dev/img/oss_logo.png');
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
