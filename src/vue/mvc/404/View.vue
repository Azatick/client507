<template>
    <div v-block="'success-registration'">
        <h1 v-element="'title'">Упс! 404 ошибка</h1>
        <p v-element="'description'">
            Возможно страница, к которой Вы обращаетесь, уже давно канула в небытие. <br>
            Мы сожалеем об этом :(
        </p>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components';
  import {Prop} from "vue-property-decorator";
  import {RegisterAccount} from "../../../api/Auth";

  @Component
  export default class MView extends Vue {

  }
</script>

<style lang="scss">
    @import '~styles/mixins/em';
    .success-registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        color: #475669;
        background: url('~img/png/bg.png');
    }
</style>
