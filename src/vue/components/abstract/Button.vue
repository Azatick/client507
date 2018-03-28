<template>
  	<b-button v-bind="props">
		<slot/>
  	</b-button>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from "vue-class-component";
	import Mixins from "../../mixins";
	import VueTypes from "vue-types";

	@Component
	export default class MButton extends mixins(Mixins.DynamicProps) {
		
  
	}
</script>

<style lang="scss">
	.disabled {
		cursor: not-allowed;
	}
</style>

