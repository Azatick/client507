<template>
    <Loading name="login">
        <div class="login-form">
            <MForm :onSubmit="onSubmit" :model="user">
                <MInput
                        label="Логин (e-mail адрес)"
                        :validate="[$validators.email(), $validators.max(50)]"
                        required
                        name="userName"
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
                <MButton type="submit">Войти</MButton>
            </MForm>
            <divider text="Или"/>
            <div class="login-form__footer">
                <MButton to="/">Регистрация</MButton>
                <MButton variant="secondary">Сброс пароля</MButton>
            </div>
        </div>
    </Loading>
</template>

<script lang="ts">
    import Vue from "vue"
    import Components from '../../components'
    import Component from "vue-class-component"
    import VA from '../../../annotations/vue'
    import {Prop} from "vue-property-decorator"
    import User from "../../../models/User"
    import {AuthResponse, AuthUser} from "../../../api/Auth";

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

        @Prop()
        user: AuthUser
        @Prop()
        onSubmit: (user: AuthUser) => Promise<AuthResponse>

    }
</script>

<style lang="scss" scoped>
    button {
        width: 100%;
    }
    a {
        margin-bottom: 10px;
        width: 100%;
    }
</style>
