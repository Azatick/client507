import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import {ValidateResult} from "../../utils/validators";
import MFormElement from '../components/abstract/MFormElement.vue'

@Component({
    inject: {
        formValue: {
            default: { hasError: false, values: {} }
        },
        onFormChange: {
            default () {}
        }
    },
    components: {
        MFormElement
    }
})
export default class FormElement extends Vue {

    // injections
    formValue: FormModel
    onFormChange: (name: string, value: any, validateResult: boolean) => void

    @Prop(Boolean)
    isRequired: boolean
    @Prop()
    label: string
    @Prop()
    text: string
    @Prop()
    name: string
    @Prop()
    validate: (value: string) => ValidateResult

    validateResult: ValidateResult = {};

    get validateState () {
        return this.validateResult.hasError !== undefined ? !this.validateResult.hasError : undefined;
    }

    get value () : any {
        return this.formValue.values[this.name]
    }

    set value (newValue: any) {
        let hasError = false;
        if (this.isRequired) {
            this.validateResult = this.$validators.required(newValue);
        }
        if (this.validate) {
            this.validateResult = this.validate(newValue)
        }
        this.onFormChange && this.onFormChange(this.name, newValue, !this.validateState)
    }

}

export interface FormModel {
    hasError: boolean;
    values: any;
}