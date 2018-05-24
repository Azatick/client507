<template>
    <MView
            :data="data"
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

    @Component({
        components: {
            MView,
            Loading: Components.Abstract.Loading
        }
    })

    export default class Controller extends Vue {

        data: ProfileData = {}

        @OnErrorMessage({
            title: 'Вы не авторизованы'
        })
        @Secured((user: CurrentUser) => !!user.userRole)
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

    }
</script>

<style>

</style>
