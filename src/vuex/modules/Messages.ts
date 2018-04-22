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
        getAll: (state: MessagesStore) => {
            return state.messages;
        }
    },

    mutations: {
        add (state, message: MessageConfig) {
            message.id = state.messages.length + 1
            state.messages = _.uniqBy([...state.messages, message], 'type', 'title', 'text', 'position')
            if (!message.always) {
                let i = setTimeout(function () {
                    state.messages = _.without(state.messages, message)
                }, message.duration * 1000 || 10000)
            }
        },
        remove (state, message: MessageConfig) {
            state.messages = _.without(state.messages, message)
        }
    }

} as StoreOptions<any>