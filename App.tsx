
import React, { createContext, useRef } from 'react';

import { DrawerLayoutAndroid, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, useColorScheme, View } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Navbar from './src/components/shared/Navbar/Navbar';
import DrawerMenuNavbar from './src/components/shared/Navbar/DrawerMenuNavbar';
import Footer from './src/components/shared/Footer';
import HomeScreen from './src/screen/home/HomeScreen';
import NavigationContainer from './src/navigators/NavigationContainer';
import Navigator from './src/navigators/Navigator';
import AuthenticationCheckProvider from './src/context/Authentication/AuthenticationCheckProvider';
import colors from './src/utils/colors';

const ShopProvider = createContext({})
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "white",
    // backgroundColor: isDarkMode ? Colors.darker : "#232F3F",
  };
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  return (
    <AuthenticationCheckProvider>
      <NavigationContainer>
        <DrawerMenuNavbar drawerRef={drawerRef} >
          <ShopProvider.Provider value={{}}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F9FC' }}>
              {/* <SafeAreaView style={backgroundStyle}> */}
              <StatusBar
                animated={true}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={colors.primary}
                // backgroundColor={backgroundStyle.backgroundColor}
                showHideTransition={'fade'}
                hidden={false}
              />
              <Navbar drawerRef={drawerRef} />
              <ScrollView
                // contentInsetAdjustmentBehavior="automatic"
                style={[
                  // backgroundStyle,
                  { paddingBottom: 80, display: 'flex' }]
                }
              >
                <Navigator />
              </ScrollView>
              <Footer />
            </SafeAreaView>
          </ShopProvider.Provider>
        </DrawerMenuNavbar>
      </NavigationContainer>
    </AuthenticationCheckProvider>
  );
}

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    // paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
