import React, { useContext, useState } from 'react';

import { NavigationProvider } from './NavigationContainer';
import Router from './router';

const Navigator = () => {
    const { pathname, navigate, translate } = useContext(NavigationProvider)
    const router = Router()
    const renderScreen = router.find(component => component.link == pathname)?.component
    return renderScreen
};

export default Navigator;
