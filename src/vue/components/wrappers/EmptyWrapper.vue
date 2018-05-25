<template>
    <main>
        <slot/>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    import Layout from '../layout';

    @Component({
        components: {
            MHeader: Layout.Header,
        }
    })
    export default class App extends Vue {

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