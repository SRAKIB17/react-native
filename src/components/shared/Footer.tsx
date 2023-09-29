import { useContext, useState } from 'react';
import { View, Text, Button, TouchableHighlight, TouchableOpacityBase, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import Colors from '../../utils/colors';
import images_database from '../../db/translate_each_word';


export default function Footer() {
    const { navigate, pathname, translate } = useContext(NavigationProvider)
    const { footer: footerMenuButton } = images_database()
    return (
        <View style={styles.footer}>
            {
                footerMenuButton?.map((r: any, index) => {
                    const check = pathname === r.link;
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => navigate(r?.link)}
                                // style={{ marginTop: -48 }}
                                disabled={check}
                            >
                                <View style={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' }}>
                                    <View
                                        style={check && styles.select_button}
                                    >
                                        <Image
                                            source={
                                                check ? r?.light : r?.dark
                                            }
                                            style={{
                                                height: 24, width: 24, objectFit: 'contain',
                                            }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 10 }}>
                                        {
                                            r?.title
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }

        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'transparent',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        padding: 16,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1,

        height: 64,
        width: '100%',
    },
    select_button: {
        marginTop: -24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 12,
        borderRadius: 99999,
        backgroundColor: Colors.primary,
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 48,
        width: 48,
        padding: 4,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});