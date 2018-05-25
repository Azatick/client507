import {Vue} from "vue/types/vue";

export function required(message?: string) {
    return validate(v => !!v.length, message || 'Обязательное поле')
}

export function email (message?: string) {
    let reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return validate(v => reg.test(v), message || `Введен неправильный e-mail адрес`)
}

export function max (max: number, message?: string) {
    return validate(v => v.length <= max, message || `Максимальное число допустимых символов ${max}`)
}

export function min (min: number, message?: string) {
    return validate(v => v.length >= min, message || `Минимальное число символов ${min}`)
}

export function equalTo (value: string, message: string) {
    return validate(v => v == value, message)
}

export function regexp (reg: RegExp, message: string) {
    return validate(v => reg.test(v.toString()), message)
}

export function number (pre: (v: number) => boolean, message: string) {
    return validate((v: string) => pre(+v), message)
}

function validate (validate: (value: any) => boolean, errorMessage: string) : (value: any) => ValidateResult {
    return function (value) {
        return {
            hasError: !validate(value),
            errorMessage
        } as ValidateResult
    }
}

type validateReturn<T> = (value: T) => ValidateResult

export interface ValidateResult {
    errorMessage?: string;
    hasError?: boolean;
}

const VueValidators = {
    install (Vue) {
        if (!Vue.prototype.$validators) {
            Object.defineProperty(Vue.prototype, '$validators', {
                value: {
                    required,
                    email,
                    max,
                    min,
                    equalTo,
                    number,
                    regexp
                }
            })
        }
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $validators: {
            required: (message?: string) => validateReturn<any>,
            email: (message?: string) => validateReturn<string>,
            max: (max: number, message?: string) => validateReturn<string>,
            min: (min: number, message?: string) => validateReturn<string>,
            equalTo: (value: string, message: string) => validateReturn<string>,
            regexp: (reg: RegExp, message: string) => validateReturn<any>,
            number: (pre: (v:string) => boolean, message: string) => validateReturn<any>
        }
    }
}

export default VueValidators;