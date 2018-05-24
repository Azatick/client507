import { StoreOptions } from "vuex"
import Vue from 'vue'

interface republic {
    id: number,
    code: string,
    name: string,
    customers: number
}

export default {

    // republics: any,

    getters: {},

    setters: {}

} as StoreOptions<any>