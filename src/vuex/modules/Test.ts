import { StoreOptions } from "vuex";

export default {

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