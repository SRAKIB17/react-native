import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import images_database from '../../db/translate_each_word';
import { default_theme, global_styles } from '../../styles/global';
import { assets_images } from '../../assets/assets_images';

const user_info = {
    name: "MD Rakibul Islam",
    email: 'reakibulssc5@gmail.com',
    profile: require('../../assets/images/male_avatar.png')
}

export default function ProfileScreen() {
    const { navigate, pathname, translate } = useContext(NavigationProvider)
    const { my_account_menu } = images_database()
    const { my_profile } = translate.profile_screen
    // const { home, profile, cart, favorite } = translate?.footer?.button_navigate
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', gap: 16 }}>
                <Text style={[global_styles.text_4xl, global_styles.font_bold]}>
                    {
                        my_profile
                    }
                </Text>
                <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', gap: 16 }}>
                    <View>
                        <Image source={user_info.profile} style={{ width: 64, height: 64 }} />
                    </View>

                    <View>
                        <Text style={[global_styles.text_2xl, global_styles.font_medium]}>
                            {
                                user_info?.name
                            }
                        </Text>
                        <Text style={[global_styles.text_base, global_styles.font_normal]}>
                            {
                                user_info?.email
                            }
                        </Text>
                    </View>

                </View>
            </View>
            <View style={{ borderTopColor: default_theme.border.borderColor, borderTopWidth: 0.5 }}>
                {
                    my_account_menu?.map((r: any, index) => {
                        // const check = pathname === r.link;
                        return (
                            <View key={index}>
                                <TouchableOpacity onPress={() => navigate(r?.link)}   >
                                    <View style={styles.button}>
                                        <View style={styles.button_title_image}>
                                            <View>
                                                <Image
                                                    source={r?.dark}
                                                    style={{
                                                        height: 20, width: 20, objectFit: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text style={global_styles.text_lg}>
                                                    {
                                                        r?.title
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Image
                                                source={assets_images.arrow_right_grey}
                                                style={{
                                                    height: 16, objectFit: 'contain',
                                                }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                <View>
                    <TouchableOpacity
                        onPress={() => navigate("r?.link")}
                    // style={{ marginTop: -48 }}
                    // disabled={check}
                    >
                        <View style={styles.button}>
                            <View style={styles.button_title_image}>
                                <View>
                                    <Image
                                        source={assets_images.log_out_dark}
                                        style={{
                                            height: 20, width: 20, objectFit: 'contain',
                                        }}
                                    />
                                </View>
                                <View>
                                    <Text style={global_styles.text_lg}>
                                        Log out
                                    </Text>
                                </View>
                            </View>

                            <View>
                                <Image
                                    source={assets_images.arrow_right_grey}
                                    style={{
                                        height: 16, objectFit: 'contain',
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 40
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 56,
        paddingVertical: 16,
        paddingHorizontal: 4,
        width: '100%',
        borderColor: default_theme.border.borderColor,
        borderBottomWidth: 0.5,
    },
    button_title_image: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    }
});