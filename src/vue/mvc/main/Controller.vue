<template>
    <MView :user="user" :onSubmit="onSubmit"/>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import MView from "./View.vue";
    import User from "../../../models/User";
    import Loading from "../../../annotations/vue/Loading";
    import Redirect from "../../../annotations/vue/Redirect";
    import Secured from "../../../annotations/vue/Secured";
    import Message, {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import Api from '../../../api'
    import Exceptions from '../../../exceptions'
    import {RegisterAccount} from "../../../api/Auth";
    import CurrentUser from "../../../models/CurrentUser";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {
        latitude: number;
        longitude: number;

        async created() {
            var a = await Api.Geo.get(this.latitude, this.longitude);
        }

        user = {}

        @Loading('registration')
        @OnErrorMessage({
            title: 'Пользователь существует'
        })
        @Redirect('/success-registration')
        async onSubmit(user: RegisterAccount) {
            await Api.Auth.register(user)
        }

        @Secured((user: CurrentUser) => !user.userRole, '/profile')
        async beforeCreate() {
            await navigator.geolocation.getCurrentPosition(
                await function (position) {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude
                    console.log(this.latitude, this.longitude)
                }
            )
        }
    }
</script>

<style>

</style>
