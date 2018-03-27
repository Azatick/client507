import { StoreOptions } from "vuex";

export default {
    namespaced: true,

    state: {
        name: "fjdsfnskdj"
    },

    mutations: {
        changeName(state, name) {
            state.name = name;
        }
    },

    getters: {
        getName (state) {
            return state.name;
        }
    }

} as StoreOptions<any>;