import Vue from 'vue';
import createRouter from './router';
import store from './vuex/store';

// styles
import "./assets/styles";

//components
import MVC from "./vue/mvc";
import App from "./vue/App.vue";

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


new Vue({
    render: h => h(App),
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
            component: MVC.Login.Controller
        },
        {
            path: "/signup",
            name: "signup",
            meta: {
                ignoreLayout: true
            },
            component: MVC.Signup.Controller
        }
    ])
}).$mount("#app");
