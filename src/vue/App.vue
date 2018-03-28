<template>
    <!-- Показать страницу без обертки  -->
    <div v-if="ignoreLayout">
        <router-view/>
    </div>
    <!-- Показать страницу с оберткой -->    
    <div v-else>
        <MHeader/>
        {{ route }}
        <router-view/>
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

        get route () {
            return this.$route;
        }

        get ignoreLayout () {
            return this.route.meta.ignoreLayout;
        }
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
