import { useContext, useState } from 'react';
import { View, Text, Button, TouchableHighlight, TouchableOpacityBase, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationProvider } from '../../navigators/NavigationContainer';

const footerMenuButton = [
    {
        light: require('../../assets/home-light.png'),
        dark: require('../../assets/home-dark.png'),
        title: "Home",
        link: "/fsf",
        value: 'home',
    },
    {
        light: require('../../assets/favorite-light.png'),
        dark: require('../../assets/favorite-dark.png'),
        title: "Favorite",
        link: "favorite"
    },
    {
        light: require('../../assets/cart-light.png'),
        dark: require('../../assets/cart-dark.png'),
        title: "Cart",
        link: "/fsf",
        value: 'cart',
    },
    {
        light: require('../../assets/profile-light.png'),
        dark: require('../../assets/profile-dark.png'),
        title: "Account",
        link: "/fsf",
        value: 'account',
    }
]

function Footer() {

    const [select, setSelect] = useState<string>();
    // const { navigate, check } = useContext(NavigationProvider)


    // const handleLinkPress = async (value: string) => {
    //     await navigate(value)
    //     setSelect(value)
    // };


    return (
        <View style={styles.footer}>
            {
                footerMenuButton?.map((r: any, index) => {
                    const check = select === r.value;
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    // handleLinkPress(r?.value),
                                    // navigate('sfsdflsdl')
                                }}
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

            {/* <View>
                <TouchableOpacity
                    onPress={() => console.log(43)}
                // style={{ marginTop: -48 }}
                >
                    <View style={styles.select_button}
                    >
                        <Image
                            source={}
                            style={{ height: 40, width: 40 }}
                        />
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
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

        bottom: 0,
        height: 64,
        // padding: 10,
        width: '100%',
    },
    select_button: {
        marginTop: -24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 12,
        borderRadius: 99999,
        backgroundColor: '#232F3F',

    },
    // select_button: {
    //     // marginTop: -48,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     height: 48,
    //     width: 48,
    //     padding: 12,
    //     borderRadius: 99999,
    //     backgroundColor: '#232F3F'
    // },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 48,
        width: 48,
        padding: 12,
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
export default Footer;