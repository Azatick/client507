<template>
    <div v-block="'menu'">
        <router-link to="/profile" v-element="'item'">
            <icon name="user"/>
            <span>Личный кабинет</span>
        </router-link>
        <router-link to="/tariff" v-element="'item'">
            <icon name="tools"/>
            <span>Тарифы</span>
        </router-link>
        <router-link to="/support" v-element="'item'">
            <icon name="support"/>
            <span>Тех. поддержка</span>
        </router-link>
    </div>
</template>


<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import Icon from '../abstract/Icon.vue'

    @Component({
        components:{
            Icon
        }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "../../../assets/styles/mixins/em";

    .menu {
        padding: 0 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        &__item {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #ececec;
            color: #333;
            font-size: em(18);
            transition: color .3s;
            & .icon {
                font-size: em(24);
                margin-right: 10px;
            }
            &:hover, &.router-link-active {
                text-decoration: none;
                color: #50BFFF;
            }
            &:last-of-type {
                border-bottom: none;
            }
        }
    }
</style>
