declare module 'vue-types' {

    export default interface VueTypes {

        any () : VueTyped<any>;

    }

    interface VueTyped<T> {
        type: T;
    }

}