<template>
    <MView :pdata="pdata" />
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
  pdata = {
    img: "2131fkmdsgfdmnklsbkagmdkfnb",
    firstname: "Андрей",
    secondname: "Иванов",
    number: 9875632177,
    passport: 3646124,
    balance_rub: 46,
    tariff_name: "For everyone",
    tariff_conditions: "300 руб./мес. | 10 гб 4G",
    number_of_services: 5
  };

  isAuth: boolean;

  async created() {
    localStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhaWRhckB5YW5kZXgucnUiLCJqdGkiOiJmMTRmYzNkZC1kODlhLTQ5NzQtYjhmYS02OTRmZDlmOTRlMzIiLCJpYXQiOjE1MjQxMjc2NzgsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6ImRjNDk1Y2E0LTZmYTYtNGQ4Zi04MGI4LTUxMjJiYTcyYTc3MiIsIm5iZiI6MTUyNDEyNzY3OCwiZXhwIjoxNTI0MTM0ODc4LCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwOi8vaXRpcy1tb2JpbGUuYXp1cmV3ZWJzaXRlcy5uZXQifQ.9LA6X1wyoL8MlfCY2GSHOA0r9HHgVD7uF8Q8pTf-zG0');
    let info = await Api.Info.userInfo();
    this.pdata.firstname = info.data.firstName
    this.pdata.secondname = info.data.lastName
    this.pdata.passport = info.data.passportSeries
    this.pdata.tariff_name = info.data.currentTariff
    this.pdata.balance_rub = info.data.balance
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
