<template>
    <MView
            :tariffs="tariffs"
            :onChangeTariff="changeTariff"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import MView from "./View.vue";
    import Tariff from "../../../models/Tariff";
    import Api from '../../../api'
    import {Modal} from "../../../annotations/vue/Modals";
    import {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import CurrentUser from "../../../models/CurrentUser";
    import Secured from "../../../annotations/vue/Secured";
    import Loading from "../../../annotations/vue/Loading";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        tariffs: Tariff[] = []

        @Modal('changeTariff', 'confirm')
        async changeTariff (id: number) {
            await Api.Tariff.changeTariff(id);
            this.successChanging()
        }

        @Modal('successChanging') successChanging () {}

        @Loading('tariffs')
        async mounted() {
            this.tariffs = await Api.Tariff.getTariffs();
        }

        @OnErrorMessage({
            title: 'Вы не авторизованы'
        })
        @Secured((user: CurrentUser) => !!user.userRole)
        async beforeCreate() {}

    }
</script>

<style>

</style>
