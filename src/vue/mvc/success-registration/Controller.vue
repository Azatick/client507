<template>
    <MView :user="user" />
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  import MView from "./View.vue";
  import Secured from "../../../annotations/vue/Secured";
  import {RegisterAccount} from "../../../api/Auth";
  import CurrentUser from "../../../models/CurrentUser";

  @Component({
    components: {
      MView
    }
  })
  export default class Controller extends Vue {

      user: any = {}

      @Secured((user: CurrentUser) => !user.userRole, '/')
      async beforeMount () {
          this.user = this.$route.params;
          if (!this.user.email) {
              this.$router.push('/')
          }
      }

  }
</script>

<style>

</style>
