<template>
    <MView
            :data="data"
            :balance="balance"
            :onChangeBalance="onChangeBalance"
            :submitChangeBalance="submitChangeBalance"
            :cancelModal="cancelModal"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    import Api from "../../../api";

    import MView from "./View.vue";
    import Secured from "../../../annotations/vue/Secured";
    import CurrentUser from "../../../models/CurrentUser";
    import {OnErrorMessage} from "../../../annotations/vue/MessageAnnotations";
    import ProfileData from "../../../models/ProfileData";
    import Loading from "../../../annotations/vue/Loading";
    import Components from '../../components'
    import {Modal} from "../../../annotations/vue/Modals";

    @Component({
        components: {
            MView,
            Loading: Components.Abstract.Loading
        }
    })

    export default class Controller extends Vue {

        data: ProfileData = {}
        balance: { value?: number } = { value: 0 }

        @OnErrorMessage({
            title: 'Вы не авторизованы'
        })
        @Secured((user: CurrentUser) => user.userRole == 'Customer', '/support')
        async beforeCreate() {
            await this.synchronizeProfile()
        }

        @Loading('profile')
        async synchronizeProfile () {
            let user = (await Api.Auth.userInfo()).data;
            let data = {
                ...user,
                phone: '+7 (987) 654-32-10',
                serviceCount: 5
            } as ProfileData;
            this.data = data;
        }

        @Modal('changeBalance') onChangeBalance () {}
        @Modal('successChanging') successChanging () {}

        @Loading('changeBalance')
        async submitChangeBalance () {
            await Api.Profile.upBalance(this.balance.value)
            await this.synchronizeProfile();
            this.cancelModal();
            this.successChanging();
        }

        cancelModal() {
            this.$store.commit('Modals/set', {
                name: 'changeBalance',
                visible: false,
                success: true
            });
            this.balance = {};
        }

    }
</script>

<style>

</style>
