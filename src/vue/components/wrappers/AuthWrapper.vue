<template>
    <div class="auth-page">
        <div class="auth-card">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    @Component
    export default class AuthWrapper extends Vue {

    }
</script>

<style lang="scss">
    .auth {
        &-page {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &__footer {
                margin-top: 20px;
            }
            & > * {
                position: relative;
                z-index: 2;
            }
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                opacity: .8;
                background: url("../../../assets/img/bg.png");
            }
        }

        &-card {
            padding: 30px;
            background: white;
            width: 100%;
            min-width: 250px;
            max-width: 450px;
            border-radius: 10px;
            border: 1px solid rgb(224, 230, 237);
            box-shadow: 15px 15px 50px 0 rgba(black, .1);
        }
    }
</style>

