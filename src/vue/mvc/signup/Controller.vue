<template>
    <MView
            :user="user"
            :onSubmit="onSubmit"
    />
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"

    import MView from "./View.vue"
    import Api from '../../../api'
    import Exceptions from '../../../exceptions'
    import Message, {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import {RegisterAccount} from "../../../api/Auth";
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

        user = {}

        @Loading('registration')
        @OnErrorMessage()
        @Redirect('/success-registration')
        async onSubmit (user: RegisterAccount) {
            await Api.Auth.register({...user, republicId: 3})
        }

        @Secured((user: CurrentUser) => !user.userRole, '/profile')
        beforeCreate () {
        }

    }
</script>

<style>

</style>
