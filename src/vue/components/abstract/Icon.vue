<template>
    <i :class="[className, `icon icon-${name}`]"></i>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Icon extends Vue {

        @Prop({ required: true, type: String }) name: string
        @Prop(String) color: string
        @Prop({ default: '', type: String }) className: string

    }
</script>

<style lang="scss">

</style>