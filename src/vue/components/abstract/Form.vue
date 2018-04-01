<template>
  	<div class="form">
		<slot/>
  	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component } from 'vue-decorators';

	@Component
	export default class MForm extends Vue {

		form: any = {};

	}
</script>

<style lang="scss">
	.form {
		
	}
</style>

