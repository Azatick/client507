export default function (config: ValidationConfig) {
    console.log(config);
    return function ValidationDecorator (target: Object, propKey: string | symbol): any {
        Object.defineProperty(target, propKey, {
            set (value) {
                let validationResult = config.validate(value);
                this.hasError = !validationResult;
                this[propKey] = {
                    value,
                    error: validationResult,
                    errorText: config.errorText
                }
            }
        })
        return null;
    }
}

export interface ValidationConfig {
    errorText: ((value: any) => string) | string;
    validate: (value: any) => boolean
}

export interface ValidatedProperty<T> {
    value: T;
    error: boolean;
    errorText: string;
}