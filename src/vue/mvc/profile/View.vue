<template>
	<div id="profile">
		<m-menu/>
			
		<m-block id="user-info">
			<div class="photo">
				<img src="../../../assets/img/man.png" class="img_user"/>
			</div>
				
			<div class="title">
				<h1>
					<span>{{pdata.firstname}}</span>
					<span>{{pdata.secondname}}</span>
				</h1>
			</div>

			<div class="body">
				<div class="cells">
					<div class="cell">
						<div class="cell_title">
							<span>Номер</span>
						</div>
						<div class="cell_value">
							<span>{{pdata.number}}</span>
						</div>
					</div>
							
					<div class="cell">
						<div class="cell_title">
							<span>Паспорт</span>
						</div>
						<div class="cell_value">
							<span>{{pdata.passport}}</span>
						</div>
					</div>
				</div>
			</div>
		</m-block>
				
		<m-block id="balance">
			<div class="title">
				<h1>Баланс</h1>
			</div>

			<div class="body">
				<span>{{pdata.balance_rub}}</span>
				<span>RUB</span>
				<div class="img_refresh"/>
			</div>
				
			<div class="button">
				<div>
					<button>Пополнить</button>
				</div>
			</div>
		</m-block>
				
		<m-block id="tariff">
			<div class="title">
				<h1>Тариф</h1>
			</div>
				
			<div class="body">
				<div class="select">
					<span>{{pdata.tariff_name}}</span>
					<span class="img_down_arrow"/>
				</div>
				<div class="tariffs">
					<div class="my_tariff">
						{{pdata.tariff_conditions}}
					</div>
				</div>
			</div>
				
			<div class="button">
				<button>Изменить</button>
			</div>
		</m-block>

		<m-block id="services">
			<h1>
				<span>{{pdata.number_of_services}}</span>
				<span>подключенных услуг</span>
			</h1>
			<span class="img_right_arrow"/>
		</m-block>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Components from "../../components";
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    MMenu: Components.Layout.Menu,
    MBlock: Components.Abstract.MBlock
  },

  computed: {
    name: {
      get() {
        return this.$store.getters["Test/getName"];
      },

      set(value: string) {
        this.$store.commit("test/changeName", value);
      }
    }
  }
})
export default class MView extends Vue {
  @Prop() pdata: any;
}
</script>

<style lang="scss">
#profile span {
  color: rgb(154, 154, 154);
  font-size: 20px;
}

#profile h1,
#profile h1 * {
  color: rgb(107, 178, 249);
  font-size: 30px;
}

#profile button {
  background: white;
  border: 1px solid rgb(107, 178, 249);
  color: rgb(107, 178, 249);
  border-radius: 3px;
}

#profile {
  display: grid;
}

@media (min-width: 1001px) {
  #profile {
    padding: 30px 60px;
    grid-gap: 30px;
    grid-template-columns: 1fr 1.5fr 1.5fr;
    grid-auto-rows: auto;
    grid-template-areas: "aside info     balance" "aside info     balance" ". info     tariff" ". info     tariff" ". services services";
  }
}

@media (min-width: 641px) and (max-width: 1000px) {
  #profile {
    padding: 30px;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-template-areas: "info     balance" "info     balance" "info     tariff" "info     tariff" "services services";
  }

  #menu {
    display: none;
  }
}

@media (min-width: 641px) and (max-width: 780px) {
  #user-info .content .body .cell div {
    padding-left: 5px;
    padding-bottom: 15px;
  }
}

@media (max-width: 640px) {
  #profile {
    padding: 30px 0;
    grid-row-gap: 30px;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas: "info" "info" "info" "balance" "balance" "tariff" "tariff" "services";
  }

  #menu {
    display: none;
  }
}

#menu {
  grid-area: aside;
}

#user-info {
  grid-area: info;
}

#balance {
  grid-area: balance;
}

#tariff {
  grid-area: tariff;
}

#services {
  grid-area: services;
}

#user-info,
#balance,
#tariff,
#services {
  padding: 20px 20px;
}

#user-info .content {
  padding: 20px 0;
}

#user-info .content .photo {
  position: relative;
  height: 200px;
  width: 200px;
  border: 0 solid;
  border-radius: 100%;
  margin: 0 calc(50% - 100px);
}

#user-info .content .photo img {
  height: 100%;
  width: 100%;
}

#user-info .content .title {
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid rgb(240, 240, 240);
}

#user-info .content .body {
  padding-top: 20px;
}

#user-info .content .body .cell {
  width: 100%;
}

#user-info .content .body .cell div {
  padding: 0 0 15px 20px;
  display: inline-block;
  width: calc(50% - 5px);
  height: 100%;
}

#user-info .cell:nth-child(1) div,
#user-info .cell:nth-child(1) div {
  padding-top: 15px;
}

#user-info .cell .cell_title {
  border-right: 2px solid rgb(240, 240, 240);
}

#balance .title {
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(240, 240, 240);
}

#tariff .body,
#balance .body {
  position: relative;
  margin-top: 10px;
}

#tariff .button,
#balance .button {
  margin-top: 20px;
  text-align: right;
}

#tariff .button div,
#balance .button div {
  display: inline-block;
  margin-top: 10px;
}

#tariff .title {
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(240, 240, 240);
}

#tariff .select .img_down_arrow {
  position: absolute;
	right: 0;
	margin: 5px 0;
}

#tariff .body .tariffs {
  margin-top: 10px;
}

#tariff .tariffs .my_tariff {
  padding: 10px 0;
  text-align: center;
  background: rgb(239, 242, 247);
}

#tariff .select > * {
	vertical-align: middle;
}

#services .content {
  padding: 20px 0 20px 5px;
}

#services h1 {
  display: inline-block;
}

#services .img_right_arrow {
  position: absolute;
	right: 0;
	margin: 10px 0;
}

#services .content > * {
	vertical-align: middle;
}
</style>
