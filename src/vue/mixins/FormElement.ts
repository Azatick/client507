import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop, Watch} from "vue-property-decorator";
import {ValidateResult} from "../../utils/validators";
import MFormElement from '../components/abstract/MFormElement.vue'

@Component({
    inject: {
        model: {
            default: {}
        },
        onFormChange: {
            default () {}
        },
        blockForm: {
            default () {}
        },
        addValidatorToForm: {
            default () {}
        }
    },
    components: {
        MFormElement
    }
})
export default class FormElement extends Vue {

    //-- injections
    model: any;
    onFormChange: (name: string, value: any) => void
    blockForm: (state: boolean) => void
    addValidatorToForm: (key: string, validate: (value: string) => void) => void
    //--

    @Prop(String)
    label: string
    @Prop(String)
    text: string
    @Prop(String)
    name: string
    @Prop({ default() { return [] }})
    validate: ((value: any) => ValidateResult)[]
    @Prop(Boolean)
    ignoreModel: boolean
    @Prop(Boolean)
    required: boolean

    validationResult: ValidateResult = {}

    blured: boolean = false;

    innerValue: string = ''

    get value () : any {
        this.blured && this.validation(this.resolveValue())
        return this.resolveValue() || ""
    }

    resolveValue () {
        return this.ignoreModel ? this.innerValue : this.model[this.name]
    }

    validation (value: any) {
        this.blured = true;
        value = value || this.innerValue
        let validators = this.required ? [this.$validators.required(), ...this.validate] : this.validate;
        for (let i = 0; i < validators.length; i++) {
            let v = validators[i](value);
            if (v.hasError) {
                this.validationResult = v
                this.blockForm(true)
                break;
            } else {
                this.validationResult = { hasError: false }
                this.blockForm(false)
            }
        }
    }

    mounted () {
        if (!this.model[name] && !this.ignoreModel) {
            this.onFormChange(this.name, "")
        }
        this.addValidatorToForm(this.name, this.validation)
    }

    blurElement () {
        this.blured = true
    }

    set value (newValue: any) {
        this.blured && this.validation(newValue)
        if (!this.ignoreModel) this.onFormChange && this.onFormChange(this.name, newValue)
        else this.innerValue = newValue
    }

    get errorMessage () : string {
        return this.validationResult.errorMessage
    }

    get hasError () : boolean {
        return this.validationResult.hasError;
    }

}