import React, { PropsWithChildren, createContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from './router';
import Navigator from './Navigator';

type SectionProps = PropsWithChildren<{
    // title: string;
}>;

export const NavigationProvider = createContext<any>(null)

export default function NavigationContainer() {
    // export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const path = router.map(r => r.link)
    const [screen, setScreen] = useState('Home');

    const check = (value: string) => {
        return path?.includes(value)
    }

    const navigate = (value: string) => {
        console.log(value)
        return
        // try {
        //     await AsyncStorage.setItem('my-key', value);
        //     const x = await AsyncStorage.getItem('my-key')
        //     console.log(x)
        // } catch (e) {
        //     // saving error
        // }
    };
    return (
        <NavigationProvider.Provider value={{ navigate, check }}>
            <Navigator screen={screen} />
        </NavigationProvider.Provider>
    );
}