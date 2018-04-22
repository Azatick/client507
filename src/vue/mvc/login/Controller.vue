<template>
    <MView
            :user="user"
            :onSubmit="onSubmit"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import MView from "./View.vue";
    import Api from '../../../api'
    import {AuthUser} from "../../../api/Auth";
    import {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import Loading from "../../../annotations/vue/Loading";
    import Redirect from "../../../annotations/vue/Redirect";
    import Secured from "../../../annotations/vue/Secured";
    import CurrentUser from "../../../models/CurrentUser";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        user = {};

        @Loading('login')
        @OnErrorMessage({
            title: "Неверные данные"
        })
        @Redirect('/profile')
        async onSubmit (user: AuthUser) {
            await Api.Auth.login(user)
        }

        @Secured((user: CurrentUser) => !user.userRole, '/profile')
        beforeCreate () {
        }

    }
</script>

<style>

</style>
