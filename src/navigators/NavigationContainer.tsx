import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';


export const NavigationProvider = createContext<{
    navigate: (value: string) => void,
    pathname: string,
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>
}>({
    navigate: () => { },
    pathname: '',
    translate: translate?.en,
    drawerRef: { current: null }
})

export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    const navigate = async (value: string) => {
        setScreen(value)
        await AsyncStorage.setItem('link', value)
    };



    AsyncStorage.getItem('link').then(r => {
        if (r) {
            setScreen(r)
        }
        else {
            setScreen('/home')
        }
    })

    return (
        <NavigationProvider.Provider value={{
            navigate: navigate,
            pathname: screen,
            translate: translate?.bn,
            drawerRef: drawerRef
        }}>
            {
                children
            }
        </NavigationProvider.Provider>
    );
}