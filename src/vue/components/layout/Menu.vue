<template>
    <m-block id="menu">
        <div class="cell">
            <div class="img_profile"></div>
            <span>Личный кабинет</span>
        </div>
        <div class="cell">
            <div class="img_tariffs"></div>
            <span>Тарифы</span>
        </div>
        <div class="cell">
            <div class="img_support"></div>
            <span>Тех. поддержка</span>
        </div>
    </m-block>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Abstract from "../abstract";
@Component({
  components: {
    MBlock: Abstract.MBlock
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#menu {
  padding: 0 20px;
  text-align: center;
  display: grid;
}

#menu .cell {
  padding: 20px;
}

#menu .cell:not(:last-child) {
  border-bottom: 2px solid rgb(240, 240, 240);
}

#menu .cell * {
  vertical-align: middle;
}
</style>
