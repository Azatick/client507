<template>
    <div>
        <MHeader username="12"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    import Components from "./components";
    
    @Component({
        components: {
            MHeader: Components.Layout.Header
        }
    })
    export default class App extends Vue {
        name = "app";
	}
</script>

<style lang="scss">
    .main {
        min-height: 500px;
    }

    .sidebar {
        height: 500px;
        width: 50px;
        background: #000;
    }
</style>
