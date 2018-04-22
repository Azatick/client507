import { StoreOptions } from "vuex"
import Vue from 'vue'
import {MessageConfig} from "../../annotations/vue/MessageAnnotations"
import * as _ from 'lodash'

interface ModalsStore {

    modals: Modals

}

export default {

    namespaced: true,

    state: {
        modals: {}
    } as ModalsStore,

    getters: {
        getAll: (state: ModalsStore) => {
            return state.modals;
        },
        get: (state: ModalsStore) => (key: string) => {
            return state.modals[key] || {}
        }
    },

    mutations: {
        set (state: ModalsStore, payload: ModalConfig) {
            let { name, success, visible } = payload
            Vue.set(state.modals, name, {
                visible,
                success
            })
        }
    }

} as StoreOptions<any>

export interface Modals {
    [key: string]: ModalConfig
}

export interface ModalConfig {
    name?: string
    success?: boolean,
    visible?: boolean
}