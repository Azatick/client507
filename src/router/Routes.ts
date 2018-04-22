import MVC from "../vue/mvc";
import Components from "../vue/components";

export default [
    {
        path: "/profile",
        name: "profile",
        meta: {
            role: ["admin", "user", "support"],
        },
        component: MVC.Profile.Controller
    },
    {
        path: "/login",
        name: "login",
        meta: {
            ignoreLayout: true
        },
        components: {
            default: MVC.Login.Controller,
            wrapper: Components.Wrappers.AuthWrapper
        }
    },
    {
        path: "/signup",
        name: "signup",
        meta: {
            ignoreLayout: true
        },
        components: {
            default: MVC.Signup.Controller,
            wrapper: Components.Wrappers.AuthWrapper
        }
    }
]