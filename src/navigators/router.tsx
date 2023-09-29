import { useContext } from "react";
import CartScreen from "../screen/cart/CartScreen";
import FavoriteScreen from "../screen/favorite/FavoriteScreen";
import HomeScreen from "../screen/home/HomeScreen";
import SignupScreen from "../screen/signup/SignupScreen";
import { NavigationProvider } from "./NavigationContainer";
import { translateInterface } from "../translate/translate";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { assets_images } from "../assets/assets_images";


export default function Router() {

    const router = [
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Home",
            component: <HomeScreen />,
            link: "/home",
        },
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: "Favorite",
            link: "/favorite",
            component: <FavoriteScreen />,
        },
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: "Cart",
            link: "/cart",
            component: <CartScreen />
        },
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Account",
            link: "/account",
            component: <ProfileScreen />
        },
    ];
    return router
}
