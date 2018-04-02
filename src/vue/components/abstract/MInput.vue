<template>
  <m-form-element :label="label" :text="text" :hasError="validateState" :errorText="validateResult && validateResult.errorMessage">
    <b-form-input v-bind="props" v-model="value" :state="validateState" />
  </m-form-element>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component, {Inject, Prop} from 'vue-property-decorator';
    import Mixins from '../../mixins';
    import { mixins } from "vue-class-component";

    export default class MInput extends mixins(Mixins.DynamicProps, Mixins.FormElement) {

      mounted () {
          console.log(this['props']);
      }
    }
</script>
