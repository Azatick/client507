<template>
    <MView :user="user" :onSubmit="onSubmit" />
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
  import { RegisterAccount } from "../../../api/Auth";
  import CurrentUser from "../../../models/CurrentUser";

  @Component({
    components: {
      MView
    }
  })
  export default class Controller extends Vue {

    user = {}

    @Loading('registration')
    @OnErrorMessage({
      title: 'Пользователь существует'
    })
    @Redirect('/success-registration')
    async onSubmit (user: RegisterAccount) {
      await Api.Auth.register(user)
    }

    @Secured((user: CurrentUser) => !user.userRole, '/profile')
    beforeCreate () {
    }

  }
</script>

<style>

</style>
