import {VueClass} from "vue-class-component/lib/declarations";
import {Vue} from "vue/types/vue";

// export default function Inject (injections: string[] | Object) {
//     return function <TVueClass extends VueClass<Vue>> (target: TVueClass) : VueClass<Vue> {
//         if (Array.isArray(injections)) {
//             target['options'].inject = injections.reduce((inject: any, key) => {
//                 inject[key] = {default: key, from: key};
//                 return inject;
//             }, {});
//         }
//         return target
//     }
// }

export default function Inject(injection?: any) {
    return (target: any, propertyKey: string | symbol, descriptor?: TypedPropertyDescriptor<any>): any => {
        if (!target.constructor.options.inject) target.constructor.options.inject = {}
        target.constructor.options.inject[propertyKey] = {
            from: propertyKey,
            default: injection || propertyKey
        };
        return descriptor;
    }
}