import Vue from 'vue'
import createRouter, {RouteConfig} from './router'
import Routes from './router/Routes'
import store from './vuex/store'

// styles
import "./assets/styles"

//components
import EntryInApp from "./vue/EntryInApp.vue"

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';

import VueValidators from './utils/validators'
Vue.use(VueValidators)
import VuePlugins from './vue/plugins'
Vue.use(VuePlugins.Bem)

new Vue({
    render: h => h(EntryInApp),
    store,
    router: createRouter(Routes as RouteConfig[])
}).$mount("#app");
