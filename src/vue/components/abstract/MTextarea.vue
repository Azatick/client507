<template>
    <m-form-element :name="name" :label="label" :text="text" :errorMessage="errorMessage">
        <b-form-textarea @blur.native="blurElement" :id="`__${name}`" v-bind="props" v-model="value"
                      :state="hasError == undefined ? undefined : !hasError"/>
        <b-popover placement="bottom" :target="`__${name}`" triggers="focus">
            {{ text }}
        </b-popover>
    </m-form-element>
</template>

<script lang="ts">
    import Mixins from '../../mixins';
    import {mixins} from "vue-class-component";

    export default class MInput extends mixins(Mixins.DynamicProps, Mixins.FormElement) {

    }
</script>

<style lang="scss">
    .form-input {
        width: 100%;
    }
</style>