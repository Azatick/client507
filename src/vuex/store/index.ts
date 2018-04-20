import Vue from "vue";
import Vuex from "vuex";
import Modules from "../modules";

Vue.use(Vuex);

let {
    Messages,
    Loadings
} = Modules

export default new Vuex.Store({
    modules: {
        Messages,
        Loadings
    }
});
