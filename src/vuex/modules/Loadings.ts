import { StoreOptions } from "vuex"

interface LoadingStore {

    loadings: Loadings,
    pageLoading: boolean

}

export default {

    namespaced: true,

    state: {
        loadings: {} as Loadings,
        pageLoading: false
    },

    getters: {
        getLoading: (state:LoadingStore) => (key: string) => {
            return state.loadings[key]
        },
        getPageLoading: (state: LoadingStore) => {
            return state.pageLoading
        }
    },

    mutations: {
        setLoading (state: LoadingStore, payload: { key: string, state: boolean }) {
            state.loadings[payload.key] = payload.state
        },
        setPageLoading (state: LoadingStore, payload: boolean) {
            state.pageLoading = payload
        }
    }

} as StoreOptions<any>

interface Loadings {
    [key: string]: boolean
}
