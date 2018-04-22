import Vue, { Component } from 'vue';
import Router, { RedirectOption, NavigationGuard } from "vue-router";
import { Dictionary, RoutePropsFunction, PathToRegexpOptions } from 'vue-router/types/router';
import Components from "../vue/components";
import Store from '../vuex/store'

Vue.use(Router);

export default function (routes: RouteConfig[]) {
    let router = new Router({
        routes: prepareRoutes(routes),
        mode: "history"
    })
    router.beforeEach(function (to, from, next) {
        Store.commit('Loadings/setLoading', { key: 'page', state: true, title: 'Загрузка' })
        next();
    })
    router.afterEach(function (to, from) {
        Store.commit('Loadings/setLoading', { key: 'page', state: false, title: 'Загрузка' })
    })
    return router;
}

function prepareRoutes (routes: RouteConfig[]) {
    return routes.map(route => {
        if (!route.components) {
            route.components = {
                default: route.component,
                wrapper: Components.Wrappers.MainWrapper
            }
            route.component = undefined;
        }
        return route;
    });
}

export interface RouteConfig {
    path: string
    name?: string
    component?: Component
    components?: Dictionary<Component>
    redirect?: RedirectOption
    alias?: string | string[]
    children?: RouteConfig[]
    meta?: TypedRouterMeta
    beforeEnter?: NavigationGuard
    props?: boolean | Object | RoutePropsFunction
    caseSensitive?: boolean
    pathToRegexpOptions?: PathToRegexpOptions
}

interface TypedRouterMeta {

}