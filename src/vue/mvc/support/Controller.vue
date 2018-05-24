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
            :user="user"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {ChatRoom} from '../../../models/Chat';
    import Loading from "../../../annotations/vue/Loading";
    import {Modal} from "../../../annotations/vue/Modals";
    import Api from '../../../api'
    import * as $ from 'jquery'

    import MView from "./View.vue";
    import CurrentUser from "../../../models/CurrentUser";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        chats: ChatRoom[] = []
        currentRoom: ChatRoom = { messages: [] }
        newRoom: { name?: string, message?: string } = {}
        message: { text?: string } = {}
        timer: number
        user: CurrentUser = {}

        @Loading('room')
        async onChatClick(room: ChatRoom) {
            if (this.currentRoom.id != room.id) {
                this.currentRoom = room;
                await this.getMessages();
            }
        }

        async loadChats() {
            let dialogs = await Api.Support.getDialogs();
            this.chats = dialogs.map(d => ({
                name: d.subject,
                id: d.dialogueId,
                messages: []
            }));
        }

        async getMessages () {
            this.currentRoom.messages = await Api.Support.getChatHistory(this.currentRoom.id) as any || []
            let $messages = $('#messages');
            $messages.animate({
                scrollTop: Number.MAX_SAFE_INTEGER
            }, 500)
        }

        @Loading('roomList', 'Загрузка чатов')
        async beforeMount() {
            this.user = (await Api.Auth.userInfo()).data
            await this.loadChats();
            this.currentRoom = this.chats[0];
            await this.getMessages();
        }

        async mounted () {
            this.timer = setInterval(async () => {
                this.currentRoom.messages = await Api.Support.getChatHistory(this.currentRoom.id) as any || []
                await this.loadChats();
            }, 1000)
        }

        @Modal("createRoom") createModal() {}

        @Loading('createDialog', 'Создание заявки')
        async submitModal() {
            let supports = await Api.Support.getSupports();
            let dialogId = await Api.Support.createDialog({
                subject: this.newRoom.name,
                toUserEmail: "testUser9552@mail.ru"
            })
            await Api.Support.sendMessage({
                dialogueId: dialogId,
                text: this.newRoom.message
            })
            await this.loadChats();
            this.currentRoom = this.chats.slice(-1)[0]
            await this.getMessages();
            this.cancelModal()
        }

        @Loading('textarea')
        async submitMessage() {
            await Api.Support.sendMessage({
                dialogueId: this.currentRoom.id,
                text: this.message.text
            })
            this.message.text = undefined;
            await this.getMessages()
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