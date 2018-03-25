<template>
    <MView :name="name" />
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  import MView from "./View.vue";

  @Component({
    components: {
      MView
    }
  })
  export default class Controller extends Vue {

    name: String = "Guest";

    async getUsername (name: String) : Promise<String> {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(name);
        }, 2000);
      }) as Promise<String>;
    }

    async mounted () {
      this.name = await this.getUsername('Azat');
    }

  }
</script>

<style>

</style>
