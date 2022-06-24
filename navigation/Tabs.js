import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { BLACK, DARK_GREY, LIGHT_GREY, WHITE, YELLOW } from '../colors';

const Tab = createBottomTabNavigator();

// 다크모드 변경 in iOS: command + shift + a
const Tabs = () => {
    const isDark = useColorScheme() === 'dark';
    console.log('🚀 ~ file: Tabs.js ~ line 13 ~ Tabs ~ isDark', isDark);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: isDark ? BLACK : WHITE,
                },
                tabBarActiveTintColor: isDark ? YELLOW : BLACK,
                tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
                headerStyle: {
                    backgroundColor: isDark ? BLACK : WHITE,
                },
                headerTitleStyle: {
                    color: isDark ? WHITE : BLACK,
                },
            }}
        >
            <Tab.Screen name='Movies' component={Movies} />
            <Tab.Screen name='Tv' component={Tv} />
            <Tab.Screen name='Search' component={Search} />
        </Tab.Navigator>
    );
};

export default Tabs;
