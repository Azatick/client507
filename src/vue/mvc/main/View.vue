<template>
    <div>
        <MForm :onSubmit="onSubmit" :model="user">
            <MInput
                    label="Логин (e-mail адрес)"
                    :validate="[$validators.email(), $validators.max(50)]"
                    required
                    name="email"
                    text="Ваш постоянный e-mail адрес"
                    autocomplete="email"
            />
            <MInput
                    label="Имя"
                    required
                    name="firstName"
                    autocomplete="given-name"
            />
            <MInput
                    label="Фамилия"
                    required
                    name="lastName"
                    autocomplete="family-name"
            />
            <MInput
                    label="Серия, паспорт"
                    :validate="[$validators.regexp(/^\d{4} \d{6}$/, 'Несоответствие шаблону: 1234 567890')]"
                    required
                    name="passportSeries"
                    type="text"
            />
            <MInput
                    label="Пароль"
                    :validate="[$validators.min(6)]"
                    required
                    name="password"
                    type="password"
                    autocomplete="new-password"
            />
            <MButton type="submit" class="signup-button">Зарегистрироваться</MButton>
        </MForm>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components';
import { RegisterAccount } from "../../../api/Auth";
import { Prop } from "vue-property-decorator";

  @Component({
      components: {
          Block: Components.Layout.Block,
          MButton: Components.Abstract.MButton,
          MForm: Components.Abstract.MForm,
          Modal: Components.Abstract.Modal,
          MInput: Components.Abstract.MInput,
          Map: Components.Layout.Map
      }
  })
  export default class MView extends Vue {
    
    @Prop()
    onSubmit: (user: RegisterAccount) => Promise<void>
    @Prop()
    user: RegisterAccount

  }
</script>

<style lang="scss" scoped>
    #main {
        padding: 40px;
        max-width: 1280px;
        margin: 0 auto;
    }
    p {
        text-align: center;
    }
    .content>div {
        padding: 0;
    }
    .map-cont {
        vertical-align: top !important;
        height: 100%;
        display: inline-block;
        width: 66%;
    }
    .map-cont>div {
        margin: 40px 20px;
    }
    .reg-cont {
        height: 100%;
        display: inline-block;
        border-left: 1px solid #ececec;
        width: 33%;
    }
    .reg-cont>div {
        margin: 40px 20px;
    }
    .text-cont-1 {
        position: relative;
    }
    .phrase1 {
        font-size: 28px;
        color: rgb(74,74,74);
    }
    .text-cont-2 {
        position: relative;
    }
    .phrase2 {
        text-align: center;
        font-size: 24px;
        color: rgb(74,74,74);
    }
</style>
