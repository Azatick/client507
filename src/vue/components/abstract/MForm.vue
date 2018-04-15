<template>
    <b-form @submit.prevent="onSubmitForm" class="form">
        <slot/>
        <div>

        </div>
    </b-form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
    import {ValidateResult} from "../../../utils/validators";

    @Component
    export default class MForm extends Vue {

        @Prop()
        @Provide()
        model: any

        formBlocked: boolean = true
        allValidators: { [key: string]: (value: any) => void } = {}

        @Prop()
        onSubmit: (formValue: any) => Promise<void>

        /**
         * Осуществляет отправку формы, если нет ошибки валидации
         * Фактически выполняет функцию onSubmit из prop
         * определенную в контроллере
         * @returns {Promise<void>}
         */
        async onSubmitForm() {
            this.validateAll()
            if (!this.formBlocked) {
                await this.onSubmit(this.model)
            }
        }

        validateAll () {
            Object.keys(this.allValidators).map(key => {
                this.allValidators[key](this.model[key])
            })
        }

        @Provide()
        onFormChange(key: string, value: any) {
            Vue.set(this.model, key, value);
        }

        @Provide()
        blockForm (state: boolean) {
            this.formBlocked = state;
        }

        @Provide()
        addValidatorToForm (key: string, validate: (value: string) => void) {
            this.allValidators[key] = validate
        }

    }
</script>

<style lang="scss">
    .form {

    }
</style>

