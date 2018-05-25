<template>
    <div v-block="'success-registration'">
        <h1 v-element="'title'">Вы успешно зарегистрировались!</h1>
        <p v-element="'description'">
            На почту {{ user.email }} было отправлено письмо с ссылкой для подтверждения регистрации.
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

    @Prop() user: RegisterAccount

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
