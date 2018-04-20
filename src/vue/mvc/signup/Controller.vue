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
    import Message from "../../../annotations/vue/Message";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        user = {};

        mounted () {
        }

        @Message({
            type: "error",
            catch: Exceptions.UserRegisteredException as any,
            text: "Ошибка при регистрации"
        })
        async onSubmit (user: User) {
            // await Api.Auth.register(user)
            throw new Exceptions.UserRegisteredException(user)
        }

    }
</script>

<style>

</style>
