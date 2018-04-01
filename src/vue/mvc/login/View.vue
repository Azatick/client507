<template>
    <div class="login-form">
      <div>
        <MButton>Войти</MButton>
      </div>
      <divider text="Или"/>
      <div class="login-form__footer">
        <MButton variant="secondary">Сброс пароля</MButton>
        <MButton to="/signup">Регистрация</MButton>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Components from '../../components';
  import Component from "vue-class-component";
  import {log} from "../../../annotation/vue/log";

  import * as $ from 'jquery';

  @Component({
    components: {
      MButton: Components.Abstract.Button,
      Divider: Components.Abstract.Divider
    }
  })

  export default class MView extends Vue {

    @log 
    onClick () {
      console.log('aa');
      return 1
    }

    mounted () {
    }

  }
</script>

<style lang="scss">
  .login-form {
    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
