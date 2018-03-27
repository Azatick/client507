<template>
    <MView :name="name" />
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

    name: String = "Guest";
    isAuth: boolean;

    async getUsername (name: String) : Promise<String> {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(name);
        }, 2000);
      }) as Promise<String>;
    }

    async submitRegister () {
      let response = Api.Auth.register({
        password: "",
        passpostSeries: "",
        firstName: "",
        lastName: ""
      });
    }

    mounted () {
      console.log(this.$store.state);
    }

  }
</script>

<style>

</style>
