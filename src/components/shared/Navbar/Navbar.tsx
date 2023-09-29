import React, { useContext } from 'react';
import { DrawerLayoutAndroid, View } from 'react-native';
import MainNavbar from './MainNavbar';
import { NavigationProvider } from '../../../navigators/NavigationContainer';
import NavbarTitleBackButton from './NavbarTitleBackButton';
import Router from '../../../navigators/router';


export default function Navbar() {
    const { pathname, navigate, translate, drawerRef } = useContext(NavigationProvider)
    const router = Router()
    return router?.navbar || <MainNavbar drawerRef={drawerRef} />
}