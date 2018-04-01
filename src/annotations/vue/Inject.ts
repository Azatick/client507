export default function (props: string[]) {
    return function<TFunction extends Function>(target: TFunction): TFunction {

        const original = target;

        function construct (constructor: TFunction, args: any[]) {
            const c = function () {
                constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        return target;
    }
}