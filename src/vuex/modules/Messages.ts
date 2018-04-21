import { StoreOptions } from "vuex"
import {MessageConfig} from "../../annotations/vue/MessageAnnotations"
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
            message.id = state.messages.length + 1
            state.messages = [...state.messages, message]
            if (!message.always) {
                let i = setTimeout(function () {
                    state.messages = _.without(state.messages, message)
                }, message.duration * 1000 || 10000)
            }
        },
        removeMessage (state, message: MessageConfig) {
            state.messages = _.without(state.messages, message)
        }
    }

} as StoreOptions<any>