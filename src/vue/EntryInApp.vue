<template>
    <transition name="fade" mode="out-in" appear>
        <MessagesProvider>
            <router-view name="wrapper">
                <router-view/>
            </router-view>
        </MessagesProvider>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue'

    import Components from './components'
    import MessagesProvider from './mware/TunellProvider.vue'
    import {Component} from "vue-property-decorator";

    @Component({
        components: {
            MessagesProvider,
            Loading: Components.Abstract.Loading
        }
    })
    export default class EntryInApp extends Vue {
    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>




