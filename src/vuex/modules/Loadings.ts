import { StoreOptions } from "vuex"
import Vue from 'vue'
import * as $ from "jquery";

interface LoadingStore {

    loadings: Loadings,
    pageLoading: boolean

}

export default {

    namespaced: true,

    state: {
        loadings: {} as Loadings
    },

    getters: {
        getLoading: (state:LoadingStore) => (key: string) => {
            if (key == 'page' && state.loadings['page']) {
                $('body').addClass('body--loading')
            } else {
                $('body').removeClass('body--loading')
            }
            return state.loadings[key] || {}
        }
    },

    mutations: {
        setLoading (state: LoadingStore, payload: { key: string, state: boolean, title: string }) {
            let { key, title } = payload
            Vue.set(state.loadings, key, { title, state: payload.state})
        }
    }

} as StoreOptions<any>

interface Loadings {
    [key: string]: boolean
}
