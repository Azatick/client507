<template>
    <div>
        <MHeader username="12"/>
        <div class="cont">
          <Sidebar/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    import Components from "./components";

    @Component({
        components: {
            MHeader: Components.Layout.Header,
            Sidebar: Components.Layout.Sidebar
        }
    })
    export default class App extends Vue {
        name = "app";
	}
</script>

<style lang="scss">
    body{
      min-height: 100vh;
    }
    .cont {
      display: flex;
      flex-direction: column;
    }
    .sidebar {
      min-height: calc(100vh - 56px);
    }
</style>
