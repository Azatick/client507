<template>
	<header>
		<b-navbar toggleable="md" type="dark" variant="info">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand href="#">NavBar</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
				<b-nav-item href="#">Link</b-nav-item>
				<b-nav-item href="#" disabled>Disabled</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

				<b-nav-item-dropdown text="Lang" right>
					<b-dropdown-item href="#">EN</b-dropdown-item>
					<b-dropdown-item href="#">ES</b-dropdown-item>
					<b-dropdown-item href="#">RU</b-dropdown-item>
					<b-dropdown-item href="#">FA</b-dropdown-item>
				</b-nav-item-dropdown>

				</b-navbar-nav>

			</b-collapse>
		</b-navbar>

		<b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
			<p>For more information visit website</p>
			<b-btn variant="primary" href="#">More Info</b-btn>
		</b-jumbotron>
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
