<template>
	<header>
		<b-navbar class="header" toggleable="md" type="dark">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand class="header__logotype" href="#">Личный кабинет</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

				<b-nav-item-dropdown class="header__dropdown-button" text="Lang" right>
					<b-dropdown-item href="#">EN</b-dropdown-item>
					<b-dropdown-item href="#">ES</b-dropdown-item>
					<b-dropdown-item href="#">RU</b-dropdown-item>
					<b-dropdown-item href="#">FA</b-dropdown-item>
				</b-nav-item-dropdown>

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
		display: flex;
		justify-content: center;
		align-items: center;
		background: #475669;
		
		&__dropdown-button {
			margin-right: 20px;
		}
		&__logotype {
			margin-left: 30px;
			&--red {
				color: red;
			}
			&--blue {
				color: blue;
			}
		}
	}
</style>
