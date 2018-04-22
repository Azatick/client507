<template>
    <Loading name="profile">
        <div v-block="'user-profile'">
            <div v-block="'profile-row'">
                <div v-element="'col'">
                    <block v-block="'block user-info'">
                        <div v-element="'avatar'">
                            <img src="../../../assets/img/png/man.png" class="img_user"/>
                        </div>

                        <p v-element="'title'">
                            {{data.firstName}} {{data.lastName}}
                        </p>

                        <div v-element="'content'">
                            <div v-block="'cell'">
                                <p v-element="'title'">Номер</p>
                                <p v-element="'value'">
                                    {{ data.phone }}
                                </p>
                            </div>

                            <div v-block="'cell'">
                                <p v-element="'title'">Паспорт</p>
                                <p v-element="'value'">
                                    {{data.passportSeries}}
                                </p>
                            </div>

                        </div>
                    </block>
                </div>
                <div v-element="'col'">
                    <div v-block="'profile-row'" class="balance-row">
                        <block class="balance" title="Баланс">
                            <div class="balance__content">
                                <p>{{data.balance_rub}}</p>
                                <m-button
                                        variant="outline-primary"
                                >Пополнить</m-button>
                            </div>
                        </block>
                    </div>
                    <div v-block="'profile-row'" class="tariff-row">
                        <block class="tariff" :title="`Тариф ${data.currentTariff}`">

                            <div class="body">
                                <dropdown
                                        variant="primary"
                                        class="profile-select"
                                        :value="{ title: data.currentTariff,  value: data.currentTariff}"
                                        :items="tariffs"
                                        :onSelect="onChangeTariff"
                                />
                            </div>
                        </block>
                    </div>
                </div>
            </div>

            <div v-block="'profile-row'">
                <block v-block="'services'">
                    <router-link to="#" class="services__link">
                        <span>{{ data.serviceCount }} подключенных услуг</span>
                        <icon name="right-arrow"/>
                    </router-link>
                </block>
            </div>

            <modal title="Вы уверены?" type="confirm" name="changeTariff">
                <p>
                    Вы хотите сменить тариф {{ data.currentTariff }}. <br/>
                    Подтвердите действие.
                </p>
            </modal>
        </div>
    </Loading>
</template>

<script lang="ts">
    import Vue from "vue"

    import Components from "../../components"
    import {Prop, Component} from "vue-property-decorator"
    import ProfileData from "../../../models/ProfileData"
    import { DropdownItem } from '../../components/abstract/Dropdown.vue'

    @Component({
        components: {
            Menu: Components.Layout.Menu,
            Block: Components.Layout.Block,
            MButton: Components.Abstract.MButton,
            Icon: Components.Abstract.Icon,
            Dropdown: Components.Abstract.Dropdown,
            Modal: Components.Abstract.Modal,
            Loading: Components.Abstract.Loading
        }
    })
    export default class MView extends Vue {
        @Prop() data: ProfileData
        @Prop() tariffs: DropdownItem[]
        @Prop() onChangeTariff: (tariff: string) => Promise<void>
    }
</script>

<style lang="scss">
    @import "~styles/mixins/em";

    $pad: 40px;

    .user-profile {
        display: flex;
        flex-direction: column;
    }

    .profile-row {
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

    .user-info,
    .balance,
    .tariff,
    .services {
        padding: 20px 20px;
    }

    .tariff-row {
        height: 50%;
    }
    .balance-row {
        height: calc(50% - 40px);
    }
    .user-info-row {
        height: 100%;
    }

    .services {
        &__link {
            display: flex;
            justify-content: space-between;
            color: #50BFFF;
            transition: color .3s;
            font-size: em(28);
            &:hover {
                text-decoration: none;
                color: #333;
            }
        }
    }

    .user-info {
        height: 100%;
        &__avatar {
            max-width: 150px;
            max-height: 150px;
            margin: 40px auto;
            opacity: .5;
        }
        &__title {
            text-align: center;
            color: #50BFFF;
            font-weight: 300;
            font-size: em(32);
            padding-bottom: 15px;
            border-bottom: 1px solid #ececec;
        }
    }

    .balance {
        &__content {
            display: flex;
            justify-content: space-between;
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
            padding-right: 40px;
        }
        &__value {
            flex-basis: 50%;
            color: #91949A;
        }
    }

    #profile span {
        color: rgb(154, 154, 154);
        font-size: 20px;
    }

    #profile h1,
    #profile h1 * {
        color: rgb(107, 178, 249);
        font-size: 30px;
    }

    #profile button {
        background: white;
        border: 1px solid rgb(107, 178, 249);
        color: rgb(107, 178, 249);
        border-radius: 3px;
    }

    #user-info .content {
        padding: 20px 0;
    }

    #user-info .content .photo {
        position: relative;
        height: 200px;
        width: 200px;
        border: 0 solid;
        border-radius: 100%;
        margin: 0 calc(50% - 100px);
    }

    #user-info .content .photo img {
        height: 100%;
        width: 100%;
    }

    #user-info .content .title {
        text-align: center;
        padding: 20px 0;
        border-bottom: 2px solid rgb(240, 240, 240);
    }

    #user-info .content .body {
        padding-top: 20px;
    }

    #user-info .content .body .cell {
        width: 100%;
    }

    #user-info .content .body .cell div {
        padding: 0 0 15px 20px;
        display: inline-block;
        width: calc(50% - 5px);
        height: 100%;
    }

    #user-info .cell:nth-child(1) div,
    #user-info .cell:nth-child(1) div {
        padding-top: 15px;
    }

    #user-info .cell .cell_title {
        border-right: 2px solid rgb(240, 240, 240);
    }

    #balance .title {
        padding-bottom: 10px;
        border-bottom: 2px solid rgb(240, 240, 240);
    }

    #tariff .body,
    #balance .body {
        position: relative;
        margin-top: 10px;
    }

    #tariff .button,
    #balance .button {
        margin-top: 20px;
        text-align: right;
    }

    #tariff .button div,
    #balance .button div {
        display: inline-block;
        margin-top: 10px;
    }

    #tariff .title {
        padding-bottom: 10px;
        border-bottom: 2px solid rgb(240, 240, 240);
    }

    #tariff .select .img_down_arrow {
        position: absolute;
        right: 0;
        margin: 5px 0;
    }

    #tariff .body .tariffs {
        margin-top: 10px;
    }

    #tariff .tariffs .my_tariff {
        padding: 10px 0;
        text-align: center;
        background: rgb(239, 242, 247);
    }

    #tariff .select > * {
        vertical-align: middle;
    }

    #services .content {
        padding: 20px 0 20px 5px;
    }

    #services h1 {
        display: inline-block;
    }

    #services .img_right_arrow {
        position: absolute;
        right: 0;
        margin: 10px 0;
    }

    #services .content > * {
        vertical-align: middle;
    }
</style>
