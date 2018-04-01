<template>
  <div class="divider">
      <div class="divider__content">{{ text }}</div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    import vt from 'vue-types';

    @Component({
        props: {
            text: vt.string.isRequired,
        }
    })
    export default class Divider extends Vue {

    }
</script>

<style lang="scss">
    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 10px 0;
        &__content {
            position: relative;
            z-index: 1;
            background: white;
            padding: 5px;
            color: #D3DCE6;
            text-transform: uppercase;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            display: block;
            border-bottom: 1px solid #E5E9F2;
            background: #E5E9F2;
        }
    }
</style>

