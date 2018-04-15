import Vue from "vue";
import Vuex from "vuex";
import Modules from "../modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messages: Modules.Messages
    }
});
