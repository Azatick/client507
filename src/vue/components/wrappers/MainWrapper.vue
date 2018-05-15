<template>
    <default-wrapper>
        <div id="main">
            <block class="content">
                <div class="map-cont">
                    <div>
                        <div class="text-cont-1">
                            <p class="phrase1">
                                Будь на связи в любой точке мира вместе с «CRM»!
                            </p>
                        </div>
                        <Map></Map>
                    </div>
                </div>
                <div class="reg-cont">
                    <div>
                        <div class="text-cont-2">
                            <p class="phrase2">
                                Подключайтесь!
                                <br>
                                Первый месяц бесплатно.
                            </p>
                        </div>
                        <slot/>
                    </div>
                </div>
            </block>
        </div>
    </default-wrapper>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";
    import DefaultWrapper from './DefaultWrapper.vue'
    import Layout from '../layout';

    @Component({
        components: {
            Block: Layout.Block,
            MHeader: Layout.Header,
            Map: Layout.Map,
            DefaultWrapper
        }
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    #main {
        padding: 40px;
        max-width: 1280px;
        margin: 0 auto;
    }

    p {
        text-align: center;
    }

    .content > div {
        padding: 0;
    }

    .map-cont {
        vertical-align: top !important;
        height: 100%;
        display: inline-block;
        width: 66%;
    }

    .map-cont > div {
        margin: 40px 20px;
    }

    .reg-cont {
        height: 100%;
        display: inline-block;
        border-left: 1px solid #ececec;
        width: 33%;
    }

    .reg-cont > div {
        margin: 40px 20px;
    }

    .text-cont-1 {
        position: relative;
    }

    .phrase1 {
        font-size: 28px;
        color: rgb(74, 74, 74);
    }

    .text-cont-2 {
        position: relative;
    }

    .phrase2 {
        text-align: center;
        font-size: 24px;
        color: rgb(74, 74, 74);
    }
</style>
