import MVC from "../vue/mvc";
import Components from "../vue/components";

export default [
    {
        path: "/profile",
        name: "profile",
        components: {
            default: MVC.Profile.Controller,
            wrapper: Components.Wrappers.ProfileWrapper
        }
    },
    {
        path: "/login",
        name: "login",
        components: {
            default: MVC.Login.Controller,
            wrapper: Components.Wrappers.AuthWrapper
        }
    },
    {
        path: "/signup",
        name: "signup",
        components: {
            default: MVC.Signup.Controller,
            wrapper: Components.Wrappers.AuthWrapper
        }
    },
    {
        path: '/support',
        name: 'support',
        components: {
            default: MVC.Support.Controller,
            wrapper: Components.Wrappers.ProfileWrapper
        }
    }
]