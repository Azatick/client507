<template>
    <div class="login-form">
        <MForm :onSubmit="onSubmit" :model="user">
            <MInput
                    label="Логин (e-mail адрес)"
                    :validate="[$validators.email(), $validators.max(50)]"
                    required
                    name="email"
                    autocomplete="email"
            />
            <MInput
                    label="Пароль"
                    :validate="[$validators.min(6)]"
                    required
                    name="password"
                    type="password"
                    autocomplete="new-password"
            />
            <MButton type="submit">Отправить</MButton>
        </MForm>
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
    import {Prop} from "vue-property-decorator"
    import User from "../../../models/User"

    @Component({
        components: {
            MButton: Components.Abstract.MButton,
            Divider: Components.Abstract.Divider,
            MInput: Components.Abstract.MInput,
            MForm: Components.Abstract.MForm
        }
    })
    export default class MView extends Vue {

        @Prop()
        user: User;

        async onSubmit(formValue: any) {
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
