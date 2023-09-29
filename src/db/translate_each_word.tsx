import React, { useContext } from 'react';
import { NavigationProvider } from '../navigators/NavigationContainer';
import { assets_images } from '../assets/assets_images';

const translate_each_word = () => {
    const { navigate, pathname, translate } = useContext(NavigationProvider)

    const {
        footer: {
            button_navigate: { home, profile, cart, wishlist }
        },
        profile_screen: {
            my_carts, my_orders, my_wishlists, notifications, shipping_address, support_tickets
        }
    } = translate

    const footerMenuButton = [
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: home,
            link: "/home",
        },
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: wishlist,
            link: "/wishlists"
        },
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: cart,
            link: "/carts",
        },
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: profile,
            link: "/profile",
        }
    ]

    const my_account_menu = [
        {
            title: "My Account",
            link: '/account',
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
        },
        {
            title: notifications,
            link: '/notifications',
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
        },
        {
            title: my_orders,
            link: '/orders',
            light: assets_images.order_light,
            dark: assets_images.order_dark,
        },
        {
            title: my_wishlists,
            link: '/wishlists',
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
        },
        {
            title: my_carts,
            link: '/carts',
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
        },
        {
            title: shipping_address,
            link: '/account/address',
            light: assets_images.shipping_address_light,
            dark: assets_images.shipping_address_dark,
        },
        {
            title: support_tickets,
            link: '/account/support-tickets',
            light: assets_images.support_ticket_light,
            dark: assets_images.support_ticket_dark,
        },
    ]

    return {
        footer: footerMenuButton,
        my_account_menu: my_account_menu,
    }
};

export default translate_each_word;