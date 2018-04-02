import {Vue} from "vue/types/vue";

export function required(value: string) {
    return validate(!!value.length, {
        errorMessage: 'Обязательное поле'
    })
}

export function email (value: string) {
    let reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return validate(reg.test(value), {
        errorMessage: `Введен неправильный e-mail адрес`,
        successMessage: "Введенный e-mail адрес корректный"
    });
}

export function max (value: string, max: number) {
    return validate(value.length <= max, {
        errorMessage: `Максимальное допустимое число символов ${max}`,
        successMessage: `Введенное значение корректно`
    })
}

export function min (value: string, min: number) {
    return validate(value.length >= min, {
        errorMessage: `Минимальное число символов ${max}`,
        successMessage: `Введенное значение корректно`
    })
}

function validate (result: boolean, messages: { errorMessage: string, successMessage?: string }) : ValidateResult {
    return {
        hasError: !result,
        ...messages
    }
}

export interface ValidateResult {
    errorMessage?: string;
    successMessage?: string;
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
                    min
                }
            })
        }
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $validators: {
            required: (value: string) => ValidateResult,
            email: (value: string) => ValidateResult,
            max: (value: string, max: number) => ValidateResult,
            min: (value: string, min: number) => ValidateResult
        }
    }
}

export default VueValidators;