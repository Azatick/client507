<template>
    <MView :user="user" :onSubmit="onSubmit"/>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"

    import MView from "./View.vue"
    import User from "../../../models/User"
    import Api from '../../../api'

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        user = {};

        async onSubmit (user: User) {
            await Api.Auth.register(user)
        }

    }
</script>

<style>

</style>
