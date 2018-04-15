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

  info = async () => {
    return await Api.Info.userInfo()
  }


  async created() {
    localStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhaWRhckB5YW5kZXgucnUiLCJqdGkiOiIxNTM5ZTFlMC1lYzg0LTQ4NTAtYTI4My1iNDkxNjM0NTBiNjYiLCJpYXQiOjE1MjM4MjUzMzAsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6ImRjNDk1Y2E0LTZmYTYtNGQ4Zi04MGI4LTUxMjJiYTcyYTc3MiIsIm5iZiI6MTUyMzgyNTMzMCwiZXhwIjoxNTIzODMyNTMwLCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwOi8vaXRpcy1tb2JpbGUuYXp1cmV3ZWJzaXRlcy5uZXQifQ.yPQkARs6yzZzw5l7GrP9gBQWoR4kw8IPAqA5ielYt5w');
    console.log( localStorage.getItem('auth_token'))
    let info = await this.info();
    console.log(info)
 }

  mounted() {
    console.log(this.$store.state);
  }
}

export interface pdata {
  img: String;
  firstname: String;
  secondname: String;
  number: Number;
  passport: Number;
  balance: Number;
  tariff_name: String;
  tariff_conditions: String;
  number_of_services: Number;
}
</script>

<style>

</style>
