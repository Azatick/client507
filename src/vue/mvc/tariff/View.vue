<template>
  <Loading name="tariffs">
    <div v-block="all-tariffs">
        <block v-block="tariff-info" v-element="item" v-for="i in [0,1,2,3]">
          <div v-element="'col'">

            <p v-element="'title'">
              Антихайп
            </p>

            <div v-element="'content'">
              <div v-block="'cell'">
                <p v-element="'title'">Интернет</p>
                <p v-element="'value'">
                  20 ГБ
                </p>
              </div>

              <div v-block="'cell'">
                <p v-element="'title'">Звонки</p>
                <p v-element="'value'">
                  1500 мин. на все сети
                </p>
              </div>

              <div v-block="'cell'">
                <p v-element="'title'">SMS</p>
                <p v-element="'value'">
                  1000 в день
                </p>
              </div>
              <hr>
              <div v-block="'connect'">
                  <p v-element="'title'">500 rub/mounth</p>
                  <m-button
                          variant="outline-primary"
                  >Подключить</m-button>
              </div>
            </div>
          </div>
        </block>
    </div>
  </Loading>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components';

  @Component({
    components: {
      MButton: Components.Abstract.MButton,
      Block: Components.Layout.Block,
      Loading: Components.Abstract.Loading
    }
  })
  export default class MView extends Vue {

  }
</script>

<style lang="scss">
  @import "~styles/mixins/em";

  $pad: 40px;
  .all-tariffs {
    display: flex;
    flex-wrap: wrap;
    &__item {
      width: 40%;
      margin: 0 50px 50px 0;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  .tariff-row {
      display: flex;
      margin-bottom: $pad;
      &:last-child {
          margin-bottom: 0;
      }
      &__col {
          flex-basis: 50%;
          margin-right: $pad;
          &:last-child {
              margin-right: 0;
          }
      }
  }
  .tariff-info {
      height: 100%;
      &__title {
          text-align: center;
          color: #50BFFF;
          font-weight: 300;
          font-size: em(32);
          padding: 20px 0;
          border-bottom: 1px solid #ececec;
      }
  }
  .cell {
      font-size: em(18);
      display: flex;
      &__title, &__value {
          margin-bottom: 0;
          padding: 20px 0;
      }
      &__title {
          flex-basis: 50%;
          text-align: center;
          padding-right: 15px;
      }
      &__value {
          flex-basis: 50%;
          color: #91949A;
      }
  }
  .connect {
    font-size: em(20);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-end;
    padding-right: 25px;
    padding-bottom: 25px;

    &__title {
        flex-basis: 50%;
        text-align: center;
        margin-bottom: 20px!important;
    }

  }
  #tariff-info .content {
      padding: 20px 0;
  }

  #tariff-info .content .title {
      text-align: center;
      padding: 20px 0;
      border-bottom: 2px solid rgb(240, 240, 240);
  }

  #tariff-info .content .body {
      padding-top: 20px;
  }

  #tariff-info .content .body .cell {
      width: 100%;
  }

  #tariff-info .content .body .cell div {
      padding: 0 0 15px 20px;
      display: inline-block;
      width: calc(50% - 5px);
      height: 100%;
  }

  #tariff-info .cell:nth-child(1) div,
  #tariff-info .cell:nth-child(1) div {
      padding-top: 15px;
  }

  #tariff-info .cell .cell_title {
      border-right: 2px solid rgb(240, 240, 240);
  }
  .tariff {
    &__content {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
