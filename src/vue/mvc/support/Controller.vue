<template>
    <MView
            :chats="chats"
            :onChatClick="onChatClick"
            :currentRoom="currentRoom"
            :onCreateRoom="createModal"
            :newRoom="newRoom"
            :cancelModal="cancelModal"
            :submitModal="submitModal"
            :submitMessage="submitMessage"
            :message="message"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {ChatRoom} from '../../../models/Chat';
    import Loading from "../../../annotations/vue/Loading";
    import {Modal} from "../../../annotations/vue/Modals";
    import * as $ from 'jquery'

    import MView from "./View.vue";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        chats: ChatRoom[] = []
        currentRoom: ChatRoom = {}
        newRoom: ChatRoom = {}
        message: { text?: string } = {}

        @Loading('room')
        async onChatClick(room: ChatRoom) {
            if (this.currentRoom.id != room.id) {
                this.currentRoom = room;
                return new Promise(function (response, reject) {
                    setTimeout(function () {
                        response()
                    }, 2000)
                })
            }
        }

        async loadChats(): Promise<ChatRoom[]> {
            return new Promise<ChatRoom[]>(function (response, reject) {
                setTimeout(function () {
                    var messages: ChatMessage[] = [
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                        {text: 'Hi', time: new Date(), from: 'me'},
                        {text: 'Hi, my friend', time: new Date(), from: 'support'},
                    ]
                    response([
                        {id: 0, name: 'Изменение данных', messages},
                        {id: 1, name: 'Вопрос по тарифам', messages},
                        {id: 2, name: 'Списание средств', messages},
                    ])
                }, 2000)
            })
        }

        @Loading('roomList', 'Загрузка чатов')
        async beforeMount() {
            this.chats = await this.loadChats();
            let $messages = $('#messages');
            $messages.animate({
                scrollTop: Number.MAX_SAFE_INTEGER
            }, 500)
            console.log($messages.outerHeight())
            this.currentRoom = this.chats[0];
        }

        @Modal("createRoom") createModal() {
        }

        submitModal() {
            console.log(this.newRoom);
        }

        async submitMessage() {
            console.log(this.message.text)
        }

        cancelModal() {
            this.$store.commit('Modals/set', {
                name: 'createRoom',
                visible: false,
                success: true
            });
            this.newRoom = {};
        }

    }

    export interface NewChatRoom {
        name: string
        text: string
        messages: ChatMessage[]
    }

    export interface ChatMessage {
        text: string
        time: Date
        from: 'me' | 'support'
    }
</script>

<style>

</style>
