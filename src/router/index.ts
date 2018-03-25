import Vue from 'vue';
import Router, { RouteConfig } from "vue-router";

Vue.use(Router);

export default function (routes: RouteConfig[]) {
    return new Router({
        routes,
        mode: "history"
    });
}