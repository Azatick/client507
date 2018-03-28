<template>
    <div class="login-page">
      <div class="login-card">
        <MButton variant="primary" @click.native="onClick">Войти</MButton>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Components from '../../components';
  import Component from "vue-class-component";

  import * as $ from 'jquery';

  @Component({
    components: {
      MButton: Components.Abstract.Button
    }
  })
  export default class MView extends Vue {

    onClick () {
      console.log('aa');
    }

    mounted () {
    }

  }
</script>

<style lang="scss">
  .login {
    &-page {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: .8;
        background: url("../../../assets/img/bg.png");
      }
    }

    &-card {
      position: relative;
      z-index: 2;
      padding: 30px;
      background: white;
      width: 100%;
      min-width: 250px;
      max-width: 450px;
      border-radius: 10px;
      border: 1px solid rgb(224, 230, 237);
      box-shadow: 15px 15px 50px 0 rgba(black, .1);
    }
  }
</style>
