<template>
    <transition name="fade" mode="out-in" appear>
        <div :id="`message-${index}`" v-block="'message'" :class="`message--${type} ${getPositionClass()}`">
            <div v-element="'title'" v-if="title">{{ title }}</div>
            <div v-element="'text'">{{ text }}</div>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from 'vue'

    import {Component, Prop, Watch} from 'vue-property-decorator'
    import {MessagePosition, MessageType} from "../../../annotations/vue/MessageAnnotations"
    import * as $ from 'jquery'


    @Component
    export default class Message extends Vue {

        @Prop()
        type: MessageType
        @Prop(String)
        text: string
        @Prop(String)
        title: string
        @Prop(String)
        position: MessagePosition
        @Prop(Number)
        index: number

        style: any = {}

        getPositionClass () {
            const positions = this.position.split(" ")
            return positions.map(v => `message--${v}`).join(" ")
        }

        mounted () {
            let $message = $(`#message-${this.index}`)
            $message.css(this.messagePosition())
        }

        messagePosition () {
            let offset = 15
            let $message = $(`#message-${this.index}`)
            let height = $message.outerHeight()
            const top = ( this.index == 0 ? 1 : this.index + 1 ) * offset + this.index * height
            switch (this.position) {
                case "top right":
                    return {
                        top,
                        right: 15
                    }
            }
        }

    }
</script>

<style lang="scss">
    @import "../../../assets/styles/mixins/em";

    .message {
        position: absolute;
        background: white;
        width: 250px;
        padding: 10px;
        padding-right: 20px;
        box-sizing: border-box;
        border-radius: 10px;
        font-size: em(14);
        box-shadow: 10px 10px 10px rgba(black, 0.05);
        overflow: hidden;
        border-left: 5px solid;
        color: #5e6d82;

        &__title {
            font-weight: bold;
        }

        $offset: 15px;

        &-- {
            &top {
                top: $offset;
                &.message {
                    &-- {
                        &left {
                            left: $offset;
                        }
                        &right {
                            right: $offset;
                        }
                        &center {

                        }
                    }
                }
            }
        }

        &--error {
            border-left-color: #fe6c6f;
            background: #fff6f7;
            & .message__title {
                color: #fe6c6f;
            }
        }

        &__text {
            font-size: em(14);
            line-height: 1.5;
        }

    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }

</style>