import { StyleSheet } from 'react-native';

const theme_color = {
    primary: {
        bg: '#402A92',
        text: 'white'
    },
    secondary: '',
}

export const global_styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: theme_color?.primary?.bg,
        color: theme_color?.primary?.text
    },
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
        paddingTop: 10,
    },
    footer: {
        backgroundColor: theme_color?.primary?.bg,
        color: theme_color?.primary?.text,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        bottom: 0,
        height: 80,
        // padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
