<template>
  	<b-button v-bind="props" :class="prepareClass()">
		<slot/>
  	</b-button>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from "vue-class-component";
	import Mixins from "../../mixins";

	@Component
	export default class MButton extends mixins(Mixins.DynamicProps) {
		
		prepareClass () {
			return ['button', `button--${this.props.variant || 'primary'}`].join(" ");
		}
  
	}
</script>

<style lang="scss">
	.disabled {
		cursor: not-allowed;
	}
	@mixin button ($bg) {
		background: $bg !important;
		border-color: $bg !important;
		&:active, &:focus {
			box-shadow: 0 0 0 .2em rgba($bg, .4) !important;
		}
	}
	.button {
		border-radius: 8px;
		&--primary {
			@include button(#20A0FF);
			&:hover {
				@include button(#1D8CE0);
			}
		}
		&--secondary {
			@include button(#475669);
			&:hover, &:active {
				@include button(#1F2D3D);
			}			
		}
		&--success {
			@include button(#13CE66);
			&:hover {
				@include button(rgb(1, 177, 80));
			}			
		}
		&--outline-success {
			@include button(#13CE66);
			background: white !important;
			&:hover, &:active {
				@include button(#13CE66);				
			}	
		}
		&--warning {
			@include button(#F7BA2A);
			&:hover {
				@include button(#1D8CE0);
			}
		}
		&--danger {
			@include button(#FF4949);
			&:hover {
				@include button(#1D8CE0);
			}			
		}
  	}
</style>

