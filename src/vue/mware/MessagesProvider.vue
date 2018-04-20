<template>
    <div>
        <div class="messages">
            <Message
                    v-for="(message, index) in messages"
                    :type="message.type"
                    :key="index"
                    :title="message.title"
                    :text="message.text"
                    :position="message.position"
            />
        </div>
        <slot/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    import Components from '../components'
    import {Component} from "vue-property-decorator";
    import {MessageConfig} from "../../annotations/vue/MessageAnnotations";

    @Component({
        components: {
            Message: Components.Abstract.Message
        }
    })
    export default class MessagesProvider extends Vue {

        get messages () {
            return this.$store.getters['Messages/getMessages'] as MessageConfig
        }

    }
</script>

<style lang="scss">

    .message {

        position: fixed;
        z-index: 500;

    }

</style>