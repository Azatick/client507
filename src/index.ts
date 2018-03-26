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
            path: "/template",
            name: "template",
            component: MVC.Template.Controller
        }
    ])
}).$mount("#app");
