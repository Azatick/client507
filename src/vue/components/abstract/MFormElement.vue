<template>
  <div class="form-element">
    <label class="form-element__label">
      <span v-if="label" class="form-element__label-text">{{ label }}:</span>
      <slot/>
      <b-form-invalid-feedback>
        {{ errorText }}
      </b-form-invalid-feedback>
    </label>
    <b-form-text v-if="text">
      {{ text }}
    </b-form-text>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    // import Component, {Inject, Prop} from 'vue-property-decorator';
    import Component, { mixins } from "vue-class-component";
    import {ValidateResult} from "../../../utils/validators";
    import {Prop} from "vue-property-decorator";

    @Component
    export default class MFormElement extends Vue {
      @Prop()
      label: string
      @Prop()
      text: string
      @Prop()
      hasError: boolean
      @Prop()
      errorText: string
    }
</script>

<style lang="scss">
  .form-element {
    margin: 10px 0;
    &__label {
      &-text {
        color: #475669;
      }
    }
  }
</style>
