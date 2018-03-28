<template>
	<header>
		<b-navbar toggleable="md" type="dark" variant="info">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand to="/">NavBar</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
				<b-nav-item href="#">Link</b-nav-item>
				<b-nav-item href="#" disabled>Disabled</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-item to="/login">Войти</b-nav-item>

				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
	</header>
</template>

<script lang="ts">
	export default {
		
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
