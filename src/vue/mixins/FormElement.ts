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

    @Prop()
    isRequired: boolean
    @Prop()
    label: string
    @Prop()
    text: string
    @Prop()
    name: string
    @Prop()
    validate: ((value: any) => ValidateResult)[]

    validationResult: ValidateResult = {};

    blured: boolean = false;

    get value () : any {
        this.blured && this.validation(this.model[this.name])
        return this.model[this.name] || ""
    }

    validation (value: any) {
        this.blured = true;
        for (let i = 0; i < this.validate.length; i++) {
            let v = this.validate[i](value);
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
        if (!this.model[name]) this.onFormChange(this.name, "")
        this.addValidatorToForm(this.name, this.validation)
    }

    blurElement () {
        this.blured = true
    }

    set value (newValue: any) {
        this.blured && this.validation(newValue)
        this.onFormChange && this.onFormChange(this.name, newValue)
    }

    get errorMessage () : string {
        return this.validationResult.errorMessage
    }

    get hasError () : boolean {
        return this.validationResult.hasError;
    }

}