<template>
    <b-dropdown v-bind="props" :text="dropdownTitle">
        <b-dropdown-item-button
            v-for="(item, index) in items"
            :key="index"
            @click="onItemClick(item)"
        >
            {{ item.title }}
        </b-dropdown-item-button>
    </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator"
    import {mixins} from "vue-class-component"
    import Mixins from '../../mixins'

    @Component
    export default class Dropdown extends mixins(Mixins.DynamicProps) {

        @Prop(Array) items: DropdownItem[]
        @Prop(Function) onSelect: (value: any) => void
        @Prop({ default: {} }) value: DropdownItem

        localItem: DropdownItem = {}

        get dropdownTitle () {
            return this.value.title || this.localItem.title || 'Выбрать'
        }

        onItemClick (item: DropdownItem) {
            this.onSelect && this.onSelect(item.value)
            this.localItem = item
        }

    }

    export interface DropdownItem {
        title?: string
        value?: any
    }
</script>

<style lang="scss">

    .dropdown {

        &-item {

            &:hover, &:focus {
                outline: none;
            }

        }

    }

</style>