<template>
    <div v-block="'message'" :class="`message--${type}`">
        <p v-element="'title'" v-if="title">{{ title }}</p>
        <p v-element="'text'">{{ text }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    import {Component, Prop} from 'vue-property-decorator'
    import { MessageType } from "../../../annotations/vue/MessageAnnotations";


    @Component
    export default class Message extends Vue {

        @Prop()
        type: MessageType
        @Prop(String)
        text: string
        @Prop(String)
        title: string

    }
</script>

<style scoped>

</style>