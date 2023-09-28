import { StyleSheet } from 'react-native';

export const theme_color = {
    primary: {
        bg: '#402A92',
        text: 'white'
    },
    secondary: '',
    border: {
        borderColor: '#979797'
    }
}

export const global_styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: theme_color?.primary?.bg,
        color: theme_color?.primary?.text
    },

});
