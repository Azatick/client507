<template>
    <div class="login-form">
      <div>
        <MButton @click.native="onClick">Войти</MButton>
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
  import VA from "../../../annotations/vue";

  import * as $ from 'jquery';

  @Component({
    components: {
      MButton: Components.Abstract.Button,
      Divider: Components.Abstract.Divider
    }
  })

  export default class MView extends Vue {

    @VA.Log
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
