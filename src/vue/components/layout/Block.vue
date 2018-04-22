<template>
    <div v-block="'block'">
        <p v-element="'title'" v-if="title">{{ title }}</p>
        <div v-element="'content'">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Block extends Vue {

        @Prop(String) title: string

    }
</script>

<style lang="scss">
    @import "~styles/mixins/em";

    .block {
        background: white;
        border-radius: 10px;
        box-shadow: 5px 5px 35px 0px rgba(black, .1);
        width: 100%;
        box-sizing: border-box;
        &__title {
            color: #50BFFF;
            font-size: em(28);
            font-weight: 300;
            padding-bottom: 15px;
            border-bottom: 1px solid #ececec;
        }
        &__content {
            width: 100%;
            position: relative;
            padding: 15px 0;
        }
    }
</style>
