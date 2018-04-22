<template>
    <MView :pdata="pdata"/>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import Api from "../../../api";

    import MView from "./View.vue";

    @Component({
        components: {
            MView
        }
    })

    export default class Controller extends Vue {
        isAuth: boolean;
        pdata = {}

        async created() {
            let info = await Api.Info.userInfo();
            this.pdata = {
                firstname: info.data.firstName,
                secondname: info.data.lastName,
                number: 9875632177,
                passport: info.data.passportSeries,
                tariff_name: info.data.currentTariff,
                tariff_conditions: "300 руб./мес. | 10 гб 4G",
                balance_rub: info.data.balance,
                number_of_services: 5
            }
        }

        mounted() {
            console.log(this.$store.state);
        }

    }

    export interface pdata {
        img?: String;
        firstname: String;
        secondname: String;
        number?: Number;
        passport: Number;
        balance: Number;
        tariff_name: String;
        tariff_conditions?: String;
        number_of_services?: Number;
    }
</script>

<style>

</style>
