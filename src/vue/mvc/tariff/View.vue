<template>
    <Loading name="tariffs">
        <div v-block="'all-tariffs'">
            <block
                    v-block="'tariff-info'"
                    v-element="'item'"
                    v-for="(tariff, index) in tariffs"
                    :key="index"
            >
                <div v-element="'col'">

                    <p v-element="'title'">{{ tariff.name }}</p>

                    <div v-element="'content'">
                        <div class="list">
                            <ul>
                                <li>{{ tariff.internet }} ГБ</li>
                                <li>{{ tariff.calls }} мин на все сети</li>
                                <li>{{ tariff.sms }} СМС</li>
                            </ul>
                        </div>
                        <hr>
                        <div v-block="'connect'">
                            <p v-element="'title'">{{ tariff.cost }} руб/мес</p>
                            <m-button
                                    variant="outline-primary"
                                    @click.native="onChangeTariff(tariff.id)"
                            >Подключить
                            </m-button>
                        </div>
                    </div>
                </div>
            </block>
        </div>
        <modal
            title="Подтвердите действие"
            name="changeTariff"
            type="confirm"
        >
            Вы точно хотите изменить тариф?
        </modal>
        <modal
                title="Тариф изменен"
                name="successChanging"
        >
            Вы успешно поменяли тариф!
        </modal>
    </Loading>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Components from '../../components';
    import {Prop} from "vue-property-decorator";
    import Tariff from "../../../models/Tariff";

    @Component({
        components: {
            MButton: Components.Abstract.MButton,
            Block: Components.Layout.Block,
            Loading: Components.Abstract.Loading,
            Modal: Components.Abstract.Modal
        }
    })
    export default class MView extends Vue {
        @Prop({
            default: () => []
        }) tariffs: Tariff[]

        @Prop() onChangeTariff: (tariffId: number) => Promise<void>
    }
</script>

<style lang="scss">
    @import "~styles/mixins/em";

    $pad: 40px;
    .all-tariffs {
        display: flex;
        flex-wrap: wrap;
        &__item {
            width: 40%;
            margin: 0 50px 50px 0;
            &:nth-child(2n) {
                margin-right: 0;
            }
        }
    }

    .tariff-row {
        display: flex;
        margin-bottom: $pad;
        &:last-child {
            margin-bottom: 0;
        }
        &__col {
            flex-basis: 50%;
            margin-right: $pad;
            &:last-child {
                margin-right: 0;
            }
        }
    }

    .tariff-info {
        height: 100%;
        &__title {
            text-align: center;
            color: #50BFFF;
            font-weight: 300;
            font-size: em(32);
            padding: 20px 0;
            border-bottom: 1px solid #ececec;
        }
    }

    .cell {
        font-size: em(18);
        display: flex;
        &__title, &__value {
            margin-bottom: 0;
            padding: 20px 0;
        }
        &__title {
            flex-basis: 50%;
            text-align: center;
            padding-right: 15px;
        }
        &__value {
            flex-basis: 50%;
            color: #91949A;
        }
    }

    .connect {
        font-size: em(20);
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: flex-end;
        padding-right: 25px;
        padding-bottom: 25px;

        &__title {
            flex-basis: 50%;
            text-align: center;
            margin-bottom: 20px !important;
        }

    }

    #tariff-info .content {
        padding: 20px 0;
    }

    #tariff-info .content .title {
        text-align: center;
        padding: 20px 0;
        border-bottom: 2px solid rgb(240, 240, 240);
    }

    #tariff-info .content .body {
        padding-top: 20px;
    }

    #tariff-info .content .body .cell {
        width: 100%;
    }

    .list {
        position: relative;
        width: 100%;
        padding: 0 75px 0 25px;
    }

    .list ul {
        list-style-image: url('../../../assets/img/png/circle.png');
        list-style-type: none;
    }

    .list li {
        font-size: 28px;
        color: #333;
        margin: 15px 0 15px 10px
    }

    #tariff-info .cell .cell_title {
        border-right: 2px solid rgb(240, 240, 240);
    }

    .tariff {
        &__content {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
