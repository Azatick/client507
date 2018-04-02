<template>
    <div class="login-form">
      <MForm :onSubmit="onSubmit" >
        <MInput label="E-mail адрес" isRequired text="Ваш постоянный адрес почты" name="email" :validate="v => $validators.email(v)"/>
        <MButton type="submit">Отправить</MButton>
      </MForm>
      <div>
        <MButton @click.native="onClick('test text')">Войти</MButton>
      </div>
      <divider text="Или"/>
      <div class="login-form__footer">
        <MButton variant="secondary">Сброс пароля</MButton>
        <MButton to="/signup">Регистрация</MButton>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import Components from '../../components'
  import Component from "vue-class-component"
  import VA from '../../../annotations/vue'

  @Component({
    components: {
      MButton: Components.Abstract.Button,
      Divider: Components.Abstract.Divider,
      MInput: Components.Abstract.MInput,
      MForm: Components.Abstract.MForm
    }
  })
  export default class MView extends Vue {

    onClick (text: string) {
      console.log(this['changeValue'])
    }

    mounted () {
        console.log(this['$validators']);
    }

    created () {
        console.log(this)
    }

    async onSubmit (formValue: any) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log(formValue);
            }, 2000)
        })
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
