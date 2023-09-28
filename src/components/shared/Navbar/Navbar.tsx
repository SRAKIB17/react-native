import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, Button, TouchableHighlight, DrawerLayoutAndroid } from 'react-native';

const Navbar = ({ drawerRef }: { drawerRef: React.RefObject<DrawerLayoutAndroid> }) => {

    const onPress = () => {
        return drawerRef.current?.openDrawer()
    }
    // <View style={styles.container}>

    //     <Text style={styles.paragraph}>
    //         Swipe from the side or press button below to see it!
    //     </Text>
    //     <Button
    //         title="Open drawer"
    //         onPress={() => drawer.current?.openDrawer()}
    //     />
    // </View>
    return (
        <>
            <View style={styles.navbar}>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>
                        Gemstore
                    </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>
                        Gemstore
                    </Text>
                </View>
                <View>
                    <TouchableHighlight onPress={onPress}>
                        <View style={styles.button}>
                            <Image
                                source={require('../../../../assets/Logo.png')}
                                style={{ height: 40, width: 40 }}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                {/* <Button title='fsdf' /> */}
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        color: 'black',
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        alignContent: 'space-between',
        backgroundColor: 'white',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },

    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    countText: {
        color: '#FF00FF',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default Navbar;
