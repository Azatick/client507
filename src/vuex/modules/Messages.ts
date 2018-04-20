import { StoreOptions } from "vuex"
import {MessageConfig} from "../../annotations/vue/MessageAnnotations";
import * as _ from 'lodash'

interface MessagesStore {

    messages: MessageConfig[]

}

export default {

    namespaced: true,

    state: {
        messages: []
    } as MessagesStore,

    getters: {
        getMessages: (state: MessagesStore) => {
            return state.messages;
        }
    },

    mutations: {
        addMessage (state, message: MessageConfig) {
            state.messages = [...state.messages, message]
            setTimeout(function () {

            }, )
        }
    }

} as StoreOptions<any>