import { useContext } from "react";
import CartScreen from "../screen/cart/CartScreen";
import HomeScreen from "../screen/home/HomeScreen";
import SignupScreen from "../screen/signup/SignupScreen";
import { NavigationProvider } from "./NavigationContainer";
import { translateInterface } from "../translate/translate";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { assets_images } from "../assets/assets_images";
import NavbarTitleBackButton from "../components/shared/Navbar/NavbarTitleBackButton";
import OrderScreen from "../screen/order/OrderScreen";
import SettingsScreen from "../screen/settings/SettingsScreen";
import { WishlistScreen } from "../screen/wishlist/WishlistScreen";


export default function Router() {
    const { translate, pathname, drawerRef } = useContext(NavigationProvider);
    const {
        my_carts: { my_carts },
        profile_screen: { my_profile, my_wishlists, settings },
        my_orders: { my_orders }
    } = translate

    const router = [
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Home",
            component: <HomeScreen key='home' />,
            link: "/home",
        },
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: "Favorite",
            link: "/wishlists",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_wishlists}
                key="wishlist_nav"
                backward="/profile"
            />,
            component: <WishlistScreen key='wishlist' />,
        },
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: "Cart",
            link: "/carts",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_carts}
                key="my_carts_nav"
                backward="/profile"
            />,
            component: <CartScreen key='my_carts' />
        },
        {
            light: assets_images.order_light,
            dark: assets_images.order_dark,
            title: "Orders",
            link: "/orders",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_orders}
                key="my_orders_nav"
                backward="/profile"
            />,
            component: <OrderScreen key='my_orders' />
        },

        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Profile",
            link: "/profile",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={my_profile}
                key="profile_nav"
                backward="/profile"
            />,
            component: <ProfileScreen key='my_profile' />
        },

        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Settings",
            link: "/settings",
            navbar: <NavbarTitleBackButton
                drawerRef={drawerRef}
                title={settings}
                key="settings_nav"
                backward="/profile"
            />,
            component: <SettingsScreen key='settings' />
        },


    ];

    return router.find(component => component.link == pathname)
}
