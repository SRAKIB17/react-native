import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { translate, translateInterface } from '../translate/translate';


export const NavigationProvider = createContext<{
    navigate: (value: string) => void,
    pathname: string,
    translate: translateInterface,
}>({
    navigate: () => { },
    pathname: '',
    translate: translate?.en
})

export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {
    const [screen, setScreen] = useState('/home');
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
        <NavigationProvider.Provider value={{ navigate, pathname: screen, translate: translate?.bn }}>
            {
                children
            }
        </NavigationProvider.Provider>
    );
}