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
    import Message, {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import {RegisterAccount} from "../../../api/Auth";
    import Loading from "../../../annotations/vue/Loading";
    import Redirect from "../../../annotations/vue/Redirect";
    import Secured from "../../../annotations/vue/Secured";
    import CurrentUser from "../../../models/CurrentUser";
    import * as _ from 'lodash'

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {
        republic: string
        latitude: number
        longitude: number
        user = {}
        data: any
        republicId: number

        async created() {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude
                    this.republic = (await Api.Geo.get(this.latitude, this.longitude))["results"][5]
                        .address_components[0]
                        .long_name;
                    this.data = (await Api.Map.allRepublics())
                    this.republicId = _.find(this.data, o => o.name.trim() == this.republic).id || 1
                }
            )
        }

        @Loading('registration')
        @OnErrorMessage()
        @Redirect('/success-registration')
        async onSubmit(user: RegisterAccount) {
            user.republicId = this.republicId
            await Api.Auth.register(user)
            return user;
        }

        @Secured((user: CurrentUser) => !user.userRole, '/profile')
        beforeCreate () {
        }

    }
</script>

<style>

</style>
