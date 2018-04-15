<template>
    <transition name="fade" mode="out-in" appear>
        <router-view name="wrapper">
            <router-view/>
        </router-view>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue'

    import Components from './components';

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




