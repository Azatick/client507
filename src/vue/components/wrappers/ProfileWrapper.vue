<template>
    <default-wrapper>
        <div v-block="'profile'">
            <div v-if="userRole == 'Customer'" v-element="'menu'">
                <block>
                    <m-menu/>
                </block>
            </div>
            <div v-element="'content'" :style="{ width: userRole == 'Customer' ? '75%' : '100%' }">
                <slot/>
            </div>
        </div>
    </default-wrapper>
</template>

<script lang="ts">
    import Vue from 'vue'

    import {Component} from "vue-property-decorator"
    import DefaultWrapper from './DefaultWrapper.vue'
    import Menu from '../layout/Menu.vue'
    import Block from '../layout/Block.vue'
    import CurrentUser, {UserRole} from "../../../models/CurrentUser";
    import Api from '../../../api'

    @Component({
        components: {
            DefaultWrapper,
            MMenu: Menu,
            Block
        }
    })
    export default class ProfileWrapper extends Vue {

        userRole: UserRole = 'Customer';

        async beforeMount () {

            this.userRole = (await Api.Auth.userInfo()).data.userRole
            console.log(this.userRole)

        }

    }
</script>

<style lang="scss">
    .profile {

        font-family: "Roboto", sans-serif !important;

        display: flex;
        justify-content: space-between;

        $pad: 40px;

        padding: $pad;
        max-width: 1280px;
        margin: 0 auto;

        &__menu {
            width: 25%;
            box-sizing: border-box;
            margin-right: $pad;
        }

        &__content {
            width: 75%;
        }

    }
</style>