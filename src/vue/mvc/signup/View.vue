<template>
    <Loading name="registration">
        <div class="register-form">
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
                <MButton type="submit">Зарегистрироваться</MButton>
            </MForm>
            <divider text="Или"/>
            <div class="register-form__footer">
                <MButton to="/login">Войти</MButton>
            </div>
        </div>
    </Loading>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components'
  import {Prop} from "vue-property-decorator";
  import User from "../../../models/User";


  @Component({
      components: {
          MButton: Components.Abstract.MButton,
          Divider: Components.Abstract.Divider,
          MInput: Components.Abstract.MInput,
          MForm: Components.Abstract.MForm,
          Loading: Components.Abstract.Loading
      }
  })
  export default class MView extends Vue {

      @Prop() user: User;

      @Prop() onSubmit: (user: User) => Promise<void>

  }
</script>

<style lang="scss" scoped>
    button {
        width: 100%;
    }
    a {
        width: 100%;
    }
</style>
