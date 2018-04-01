<template>
  <b-form-input v-bind="props" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component, { mixins } from 'vue-class-component';
    import Mixins from '../../mixins';

    export default class MInput extends mixins(Mixins.DynamicProps) {
        
    }
</script>
