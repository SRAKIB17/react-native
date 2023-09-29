import { StyleSheet } from 'react-native';

export const default_theme = {
    primary: {
        bg: '#402A92',
        text: 'white'
    },
    secondary: '',
    border: {
        borderColor: '#979797'
    }
}
const text = StyleSheet.create({
    text_5xl: {
        fontSize: 40,
    },
    text_4xl: {
        fontSize: 32,
    },
    text_3xl: {
        fontSize: 28,
    },
    text_2xl: {
        fontSize: 24,
    },
    text_xl: {
        fontSize: 20,
    },
    text_lg: {
        fontSize: 18
    },
    text_base: {
        fontSize: 16
    },
    text_sm: {
        fontSize: 14
    },
    text_xs: {
        fontSize: 12
    },
})
const font = StyleSheet.create({
    font_thin: {
        fontWeight: "100"
    },
    font_extralight: {
        fontWeight: "200"
    },
    font_light: {
        fontWeight: "300"
    },
    font_normal: {
        fontWeight: "400"
    },
    font_medium: {
        fontWeight: "500"
    },
    font_semibold: {
        fontWeight: "600"
    },
    font_bold: {
        fontWeight: "700"
    },
    font_extrabold: {
        fontWeight: "800"
    }
})

export const global_styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: default_theme?.primary?.bg,
        color: default_theme?.primary?.text
    },
    ...text,
    ...font
});
