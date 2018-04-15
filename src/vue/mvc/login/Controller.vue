<template>
    <MView :user="user"/>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import VA from "../../../annotations/vue";
    import MView from "./View.vue";
    import User from "../../../models/User";
    import {Model, Watch} from "vue-property-decorator";

    @Component({
        components: {
            MView
        }
    })
    export default class Controller extends Vue {

        user = {};

    }
</script>

<style>

</style>
