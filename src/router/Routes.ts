import MVC from "../vue/mvc";
import Components from "../vue/components";

export default [
    {
        path: "/profile",
        components: {
            default: MVC.Profile.Controller,
            wrapper: Components.Wrappers.ProfileWrapper
        }
    },
    {
        path: '/support',
        components: {
            default: MVC.Support.Controller,
            wrapper: Components.Wrappers.ProfileWrapper
        }
    },
    {
        path: '/',
        exact: true,
        components: {
            default: MVC.Signup.Controller,
            wrapper: Components.Wrappers.MainWrapper
        }
    },
    {
        path: '/login',
        components: {
            default: MVC.Login.Controller,
            wrapper: Components.Wrappers.MainWrapper
        }
    },
    {
        path: '/tariff',
        components: {
            default: MVC.Tariff.Controller,
            wrapper: Components.Wrappers.ProfileWrapper
        }
    },
    {
        path: '/success-registration',
        component: MVC.SuccessRegistration.Controller
    },
    {
        path: '/404',
        component: MVC.Error404.Controller
    },
    {
        path: '*',
        redirect: '/404'
    }
]