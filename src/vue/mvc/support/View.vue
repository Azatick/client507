<template>
    <div v-block="'chats-container'">
        <div v-element="'left'">
            <Loading name="roomList">
                <ul v-block="'chats'">
                    <div v-element="'list'">
                        <li
                                v-for="(room, index) in chats"
                                v-element="'room'"
                                :key="index"
                                :class="currentRoom.id == room.id ? 'chats__room--active' : ''"
                                @click="() => onChatClick(room)"
                        >
                            {{ room.name }}
                        </li>
                    </div>
                </ul>
            </Loading>
            <button @click="onCreateRoom" class="createButton">Создать заявку</button>
        </div>
        <div v-element="'right'">
            <Loading name="room">
                <div v-block="'messages'" id="messages">
                    <div
                            v-for="(message, index) in currentRoom.messages"
                            :key="index"
                            v-element="`item-${message.from}`"
                            class="messages__item"
                    >
                        <p class="messages__item-from">{{ message.from == 'me' ? 'Я' : 'Сотрудник технической поддержки'
                            }}</p>
                        <p class="messages__item-text">
                            {{ message.text }}
                        </p>
                    </div>
                </div>
                <div v-block="'textarea'">
                    <m-form :onSubmit="submitMessage" :model="message">
                        <MTextarea
                                :validate="[$validators.max(500)]"
                                name="text"
                                :rows="3"
                                :max-rows="8"
                                no-resize
                        />
                        <MButton type="submit" variant="primary">Отправить</MButton>
                    </m-form>
                </div>
            </Loading>
        </div>
        <modal title="Создать заявку" name="createRoom">
            <m-form :onSubmit="submitModal" :model="newRoom">
                <MInput
                        label="Название"
                        :validate="[$validators.max(30)]"
                        required
                        name="name"
                        text="Название заявки"
                />
                <MTextarea
                        label="Текст сообщения"
                        :validate="[$validators.max(500)]"
                        required
                        name="text"
                        :rows="3"
                        :max-rows="8"
                        text="Опишите свою проблему"
                />
                <div class="modal-footer">
                    <MButton @click.native="cancelModal" variant="outline-primary">Отмена</MButton>
                    <MButton type="submit" variant="primary">Создать</MButton>
                </div>
            </m-form>
        </modal>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {NewChatRoom} from './Controller.vue'
    import Component from "vue-class-component";
    import Components from '../../components';
    import {ChatRoom} from '../../../models/Chat';
    import {Prop} from "vue-property-decorator";

    @Component({
        components: {
            Loading: Components.Abstract.Loading,
            Modal: Components.Abstract.Modal,
            MInput: Components.Abstract.MInput,
            MTextarea: Components.Abstract.MTextarea,
            MForm: Components.Abstract.MForm,
            MButton: Components.Abstract.MButton
        }
    })
    export default class MView extends Vue {

        @Prop() chats: ChatRoom[]
        @Prop() onChatClick: (room: ChatRoom) => Promise<void>
        @Prop({default: () => ({messages: []})}) currentRoom: ChatRoom
        @Prop() onCreateRoom: () => void
        @Prop() newRoom: NewChatRoom
        @Prop() cancelModal: () => void
        @Prop() submitModal: () => void
        @Prop() submitMessage: () => void
        @Prop() message: { text: string }

    }
</script>

<style lang="scss">
    @import "~styles/mixins/em";

    .chats {
        position: relative;
        &-container {
            box-shadow: 0 0 3px 2px rgba(black, .05);
            display: flex;
            height: calc(100vh - 200px);
            &__left {
                position: relative;
                min-width: 250px;
                background: white;
                z-index: 2;
                border-right: 1px solid #F4F4F9;
                padding-bottom: 45px;
                overflow-y: auto;
            }
            &__right {
                width: 100%;
                z-index: 1;
                background: white;
                overflow-y: auto;
            }
        }
        &__room {
            font-size: em(16);
            padding: 10px 20px;
            border-bottom: 1px solid #F4F4F9;
            transition: background .3s;
            &:hover {
                cursor: pointer;
                background: rgba(#D6EEFB, .5);
            }
            &--active {
                background: rgba(#D6EEFB, .5);
                border-bottom: 1px solid rgba(#70C4F1, .4);
                border-top: 1px solid rgba(#70C4F1, .4);
            }
        }
    }

    .createButton {
        color: #70c4f1;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background: none;
        border: none;
        padding: 10px;
        width: 100%;
        height: 45px;
        &:hover {
            cursor: pointer;
        }
        &:focus {
            outline: none;
        }
    }

    .modal {
        &-footer {

        }
    }

    .messages {
        &#messages {
            display: flex;
            flex-direction: column;
            padding: 15px;
            max-height: 81%;
            height: 100%;
            overflow-y: auto;
        }
        &__item {
            box-shadow: 0 0 5px 0 rgba(black, .1);
            padding: 10px;
            border-radius: 4px;
            width: 70%;
            margin-bottom: 15px;
            &-me {
                align-self: flex-end;
                background: rgba(#50BFFF, .4);
                & .messages__item-from {
                    color: white;
                }
            }
            &-support {
                align-self: flex-start;
            }
            &-from {
                color: rgba(#50BFFF, .4);
                font-size: em(14);
            }
        }
    }
    .textarea {
        padding: 0 15px;
        & .form {
            display: flex;
            & .form-element {
                width: 100%;
                margin: 0;
                margin-right: 10px;
                & label {
                    margin: 0;
                }
            }
        }
    }
    .loading-wrapper {
        height: 100%;
        overflow: hidden;
    }
</style>
