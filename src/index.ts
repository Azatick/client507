import Vue from 'vue'
import createRouter from './router'
import store from './vuex/store'

// styles
import "./assets/styles"

//components
import MVC from "./vue/mvc"
import Components from "./vue/components"
import EntryInApp from "./vue/EntryInApp.vue"

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueValidators from './utils/validators'
Vue.use(VueValidators)

new Vue({
    render: h => h(EntryInApp),
    store,
    router: createRouter([
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
    ])
}).$mount("#app");
