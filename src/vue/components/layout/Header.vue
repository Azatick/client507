<template>
	<header>
		<b-navbar toggleable="md" type="dark" variant="primary">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand to="/profile">CRM</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav v-if="loggedIn" class="ml-auto">

					<b-nav-item @click="logout">Выйти</b-nav-item>

				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
	</header>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Api from '../../../api'
    import {Component, Prop} from "vue-property-decorator";

	@Component
	export default class Header extends Vue {

	    loggedIn: boolean = false

		async created () {
	        this.loggedIn = !!(await Api.Auth.userInfo()).data;
		}

	    async logout () {
	        await Api.Auth.logout();
	        this.$router.push('/login');
		}

	}
</script>

<style lang="scss">
	.header {
		height: 50px;
		background: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		&__logotype {
			height: 25px;
			width: 25px;
			background: white;
			&--red {
				color: red;
			}
			&--blue {
				color: blue;
			}
		}
	}
</style>
