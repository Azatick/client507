<template>
    <b-modal
        v-model="modalState"
        :title="title"
        :close-on-backdrop="false"
        :close-on-esc="false"
        centered
        ok-title="Ок"
        cancel-title="Отмена"
        @ok="onOk"
        @cancel="onCancel"
        :hide-footer="type == 'default'"
        :ok-only="type == 'alert'"
    >
        <div class="modal__content">
            <slot/>
        </div>
    </b-modal>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";
    import {ModalType} from "../../../annotations/vue/Modals";

    @Component
    export default class Modal extends Vue {

        @Prop(String) title: string
        @Prop(String) name: string
        @Prop({ default: "default" }) type: ModalType


        get modalState () {
            return this.$store.getters['Modals/get'](this.name).visible
        }

        set modalState (visible) {
            let success = this.$store.getters['Modals/get'](this.name).success
            this.$store.commit('Modals/set', { name: this.name, visible, success: success })
        }

        onOk () {
            this.$store.commit('Modals/set', {
                name: this.name,
                visible: false,
                success: true
            })
        }

        onCancel () {
            this.$store.commit('Modals/set', {
                name: this.name,
                visible: false,
                success: false
            })
        }

    }
</script>

<style lang="scss">
    @import "~styles/mixins/em";

    .modal {

        &-header {
            background: #F2F2F5;
            padding: 10px 16px;
        }

        &-title {
            font-size: em(16);
            color: #333;
        }

    }
</style>