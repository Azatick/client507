<template>
    <main-wrapper>
        <div v-block="'profile'">
            <div v-element="'menu'">
                <block>
                    <m-menu/>
                </block>
            </div>
            <div v-element="'content'">
                <slot/>
            </div>
        </div>
    </main-wrapper>
</template>

<script lang="ts">
    import Vue from 'vue'

    import {Component} from "vue-property-decorator"
    import MainWrapper from './MainWrapper.vue'
    import Menu from '../layout/Menu.vue'
    import Block from '../layout/Block.vue'

    @Component({
        components: {
            MainWrapper,
            MMenu: Menu,
            Block
        }
    })
    export default class ProfileWrapper extends Vue {
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