import Vue, { Component } from 'vue';
import Router, { RedirectOption, NavigationGuard } from "vue-router"
import { Dictionary, RoutePropsFunction, PathToRegexpOptions } from 'vue-router/types/router'
import Components from "../vue/components"
import Store from '../vuex/store'
import * as $ from 'jquery'

Vue.use(Router);

export default function (routes: RouteConfig[]) {
    return new Router({
        routes: prepareRoutes(routes),
        mode: "history"
    })
}

function prepareRoutes (routes: RouteConfig[]) {
    return routes.map(route => {
        if (!route.components) {
            route.components = {
                default: route.component,
                wrapper: Components.Wrappers.EmptyWrapper
            }
            route.component = undefined;
        }
        route.name = route.name || route.path;
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