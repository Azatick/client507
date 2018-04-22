<template>
    <MView :user="user" :onSubmit="onSubmit"/>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"

    import MView from "./View.vue"
    import User from "../../../models/User"
    import Api from '../../../api'
    import Exceptions from '../../../exceptions'
    import Message, {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        user = {}

        @OnErrorMessage({
            title: 'Пользователь существует'
        })
        async onSubmit (user: User) {
            await Api.Auth.register(user)
        }

    }
</script>

<style>

</style>
