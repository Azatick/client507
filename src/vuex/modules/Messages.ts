import { StoreOptions } from "vuex"
import {MessageConfig} from "../../annotations/vue/Message";

export default {

    namespaced: true,

    state: {
        messages: []
    },

    mutations: {
        addMessage (state, message: MessageConfig) {
            state.messages = [...state.messages, message]
        }
    }

} as StoreOptions<any>