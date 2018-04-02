<template>
  	<b-form @submit.prevent="onSubmitForm" class="form">
		<slot/>
  	</b-form>
</template>

<script lang="ts">
	import Vue from 'vue';
    import {Component, Prop, Provide} from 'vue-property-decorator';
    import {FormModel} from "../../mixins/FormElement";

	@Component
	export default class MForm extends Vue {

		form: FormModel = {
		    hasError: false,
			values: {}
		};

		@Prop()
		onSubmit: (formValue: any) => Promise<void>

		async onSubmitForm () {
		    await this.onSubmit(this.form)
		}

		@Provide()
		onFormChange (key: string, value: any, validateResult: boolean) {
		    Vue.set(this.form.values, key, value)
		    Vue.set(this.form, 'hasError', validateResult)
		}

	}
</script>

<style lang="scss">
	.form {
		
	}
</style>

