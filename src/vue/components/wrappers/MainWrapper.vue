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
                        <div class="grad"></div>
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
    import Vue from 'vue'
    import Component from "vue-class-component"
    import DefaultWrapper from './DefaultWrapper.vue'
    import Layout from '../layout'
    import Api from '../../../api'
    import * as $ from 'jquery'

    @Component({
        components: {
            Block: Layout.Block,
            MHeader: Layout.Header,
            Map: Layout.Map,
            DefaultWrapper
        }
    })

    export default class App extends Vue {
        republics: any;
        stats: any;
        max: number;

        async created() {
            this.republics = await Api.Map.allRepublics();
            this.stats = await Api.Map.republicStats();
            this.max = 0;
            this.stats.map((v) => this.max = this.max < v.count ? v.count : this.max)
            this.stats.map((v, i) => {
                var pr = (v.count / this.max)
                $('#' + this.republics[i].code)
                    .css('fill', 'rgba(32, 160, 255,' + pr + ')')
                    .attr("title", this.republics[i].name + ": " + v.count)
            })
        }
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
        display: flex;
    }

    .map-cont {
        vertical-align: top !important;
        width: 66%;
    }

    .map-cont > div {
        margin: 40px 20px;
    }

    .reg-cont {
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

    .grad {
        margin: 30px auto 0 auto;
        background: -webkit-linear-gradient(left, white, #20A0FF);
        background: -moz-linear-gradient(left, white, #20A0FF);
        background: -o-linear-gradient(left, white, #20A0FF);
        background: linear-gradient(to right, white, #20A0FF);
        width: 80%;
        height: 40px;
        border: 1px solid rgb(74, 74, 74);
    }
</style>
