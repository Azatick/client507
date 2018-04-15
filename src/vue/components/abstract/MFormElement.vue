<template>
    <div class="form-element">
        <label :class="['form-element__label']">
            <span v-if="label" class="form-element__label-text">{{ label }}:</span>
            <slot/>
            <b-form-invalid-feedback>
                {{ errorMessage }}
            </b-form-invalid-feedback>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component, {mixins} from "vue-class-component";
    import {Prop} from "vue-property-decorator";

    @Component
    export default class MFormElement extends Vue {
        @Prop()
        label: string
        @Prop()
        text: string
        @Prop()
        errorMessage: string
        @Prop()
        name: string
    }
</script>

<style lang="scss">
    .form-element {
        margin: 10px 0;
        display: flex;
        &__label {
            width: 100%;
            position: relative;
            &-text {
                color: #99A9BF;
            }
        }
        &__info {
            position: absolute;
            right: 30px;
            & i {
                font-size: 24px;
            }
        }
    }
    .invalid-feedback {
        position: absolute;
        bottom: -18px;
    }
</style>
