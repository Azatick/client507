<template>
    <MView
            :data="data"
            :tariffs="tariffs"
            :onChangeTariff="onChangeTariff"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import Api from "../../../api";

    import MView from "./View.vue";
    import Secured from "../../../annotations/vue/Secured";
    import CurrentUser from "../../../models/CurrentUser";
    import {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import ProfileData from "../../../models/ProfileData";
    import { Modal } from "../../../annotations/vue/Modals";
    import Loading from "../../../annotations/vue/Loading";
    import Components from '../../components'

    @Component({
        components: {
            MView,
            Loading: Components.Abstract.Loading
        }
    })

    export default class Controller extends Vue {

        data: ProfileData = {}
        tariffs = ['Smart', 'Middle', 'Start'].map(v => ({ title: v, value: v }))

        @OnErrorMessage({
            title: 'Вы не авторизованы'
        })
        @Secured((user: CurrentUser) => user.userRole == 'Customer')
        async beforeCreate() {
            await this.synchronizeProfile()
        }

        @Loading('profile')
        async synchronizeProfile () {
            let user = (await Api.Auth.userInfo()).data;
            let data = {
                ...user,
                phone: '+7 (987) 654-32-10',
                serviceCount: 5
            } as ProfileData;
            this.data = data;
        }

        @Modal("changeTariff", "confirm")
        async onChangeTariff (tariff: string) {
            await Api.Profile.changeTariff(tariff)
            await this.synchronizeProfile()
        }

    }
</script>

<style>

</style>
