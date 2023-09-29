import React, { useContext, useState } from 'react';

import { NavigationProvider } from './NavigationContainer';
import Router from './router';

const Navigator = () => {
    const { pathname, navigate, translate } = useContext(NavigationProvider)
    const router = Router()
    return router?.component
};

export default Navigator;
