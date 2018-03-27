<template>
    <div>
      <input type="text" @input="onInput" v-model="name">
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({
    computed: {
      name () {
        return this.$store.getters['test/getName'];
      }
    }
  })
  export default class MView extends Vue {

    onInput (event) {
      this.$store.commit('test/changeName', event.target.value);
    }
  }
</script>

<style lang="scss">

</style>
