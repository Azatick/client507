<template>
    <div ref="loading" v-block="'loading-wrapper'" :class="{ 'loading-wrapper--loading' : loadingState }">
        <slot/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import * as $ from 'jquery'

    @Component
    export default class Loading extends Vue {

        @Prop()
        name: string

        get loadingState () {
            return this.$store.getters['Loadings/getLoading'](this.name).state
        }

        get loadingTitle () {
            return this.$store.getters['Loadings/getLoading'](this.name).title
        }

        mounted () {
            $(this.$refs.loading).parent().css({ position: 'relative' })
        }

    }
</script>

<style lang="scss">
    .loading {
        &-wrapper {
            animation: fadeIn .3s;

            &--loading {
                animation: fadeOut .3s;
                & > * {
                    filter: blur(2px);
                }
                &::before {
                    display: block;
                    position: absolute;
                    content: '';
                    background: rgba(white, .8);
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 100;
                }
                &::after {
                    display: block;
                    position: absolute;
                    background: url('../../../assets/img/svg/loading.svg') no-repeat;
                    background-position: 50% 50%;
                    background-size: 70px 70px;
                    /*opacity: .5;*/
                    content: '';
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    z-index: 101;
                }
            }
        }

    }

    @keyframes fadeIn {
        from { opacity: 0; visibility: hidden }
        to { opacity: 1; visibility: visible }
    }

    @keyframes fadeOut {
        from { opacity: 1; visibility: visible }
        to { opacity: 0; visibility: hidden }
    }
</style>