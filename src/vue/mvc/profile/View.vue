<template>
    <div>
      <input type="text" v-model="name">
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({
    computed: {
      name: {
        get () {
          return this.$store.getters['Test/getName'];
        },

        set (value: string) {
          this.$store.commit('test/changeName', value);
        }
      }
    }
  })
  export default class MView extends Vue {

  }
</script>

<style lang="scss">

</style>
