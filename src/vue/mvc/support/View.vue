<template>
    <p>
        Hello, {{ name }}
    </p>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components';

  @Component({
    props: {
      name: String
    }
  })
  export default class MView extends Vue {

  }
</script>

<style lang="scss">

</style>
