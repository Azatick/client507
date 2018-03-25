import Vue from 'vue';
import createRouter from './router';
import store from './vuex/store';

// styles
import "./assets/styles";

//components
import MVC from "./vue/mvc";
import App from "./vue/App.vue";

new Vue({
    render: h => h(App),
    store,
    router: createRouter([
        {
            path: "/",
            name: "template",
            component: MVC.Template.Controller
        }
    ])
}).$mount("#app");
