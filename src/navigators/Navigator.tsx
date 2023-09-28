// Navigator.js
import React, { useState } from 'react';




import HomeScreen from '../components/screen/home/HomeScreen';

const Navigator = ({ screen }: { screen: string }) => {

    const renderScreen = () => {
        switch (screen) {
            // case 'Home':
            //     return <HomeStackScreen setScreen={setScreen} />;
            // case 'About':
            //     return <AboutScreen setScreen={setScreen} />;
            // case 'Settings':
            //     return <SettingsScreen setScreen={setScreen} />;
            default:
                return <HomeScreen />;
        }
    };

    return renderScreen();
};

export default Navigator;
