<template>
    <div id="main">
        <block class="content">
            <div class="map-cont">
                <div>
                    <div class="text-cont-1">
                        <span class="phrase1">
                            Будь на связи в любой точке мира вместе с «Название»!
                        </span>
                    </div>
                    <div class="map">

                    </div>
                </div>
            </div>
            <div class="reg-cont">
                <div>
                    <div class="text-cont-2">
                        <span class="phrase2">
                                Подключайтесь!
                            <br>
                            Первый месяц бесплатно.
                        </span>
                    </div>
                    <div>
                        <MForm :onSubmit="onSubmit" :model="user">
                            <MInput
                                    label="Логин (e-mail адрес)"
                                    :validate="[$validators.email(), $validators.max(50)]"
                                    required
                                    name="email"
                                    text="Ваш постоянный e-mail адрес"
                                    autocomplete="email"
                            />
                            <MInput
                                    label="Имя"
                                    required
                                    name="firstName"
                                    autocomplete="given-name"
                            />
                            <MInput
                                    label="Фамилия"
                                    required
                                    name="lastName"
                                    autocomplete="family-name"
                            />
                            <MInput
                                    label="Серия, паспорт"
                                    :validate="[$validators.regexp(/^\d{4} \d{6}$/, 'Несоответствие шаблону: 1234 567890')]"
                                    required
                                    name="passportSeries"
                                    type="text"
                            />
                            <MInput
                                    label="Пароль"
                                    :validate="[$validators.min(6)]"
                                    required
                                    name="password"
                                    type="password"
                                    autocomplete="new-password"
                            />
                            <MButton type="submit">Зарегистрироваться</MButton>
                        </MForm>
                    </div>
                </div>
            </div>
        </block>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Components from '../../components';

  @Component({
      components: {
          Block: Components.Layout.Block,
          MButton: Components.Abstract.MButton,
          Modal: Components.Abstract.Modal,
          MInput: Components.Abstract.MInput
      }
  })
  export default class MView extends Vue {

  }
</script>

<style lang="scss">
    #main {
        padding: 40px;
        max-width: 1280px;
        margin: 0 auto;
    }
    span {
        vertical-align: top !important;
    }
    .content>div {
        padding: 0;
    }
    .map-cont {
        height: 100%;
        display: inline-block;
        width: 66%;
    }
    .map-cont>div {
        margin: 40px 20px;
    }
    .reg-cont {
        height: 100%;
        display: inline-block;
        border-left: 1px solid #ececec;
        width: 33%;
    }
    .reg-cont>div {
        margin: 40px 20px;
    }
    .text-cont-1 {
        position: relative;
    }
    .phrase1 {
        font-size: 28px;
        color: rgb(74,74,74);
    }
    .text-cont-2 {
        position: relative;
    }
    .phrase2 {
        text-align: center;
        font-size: 24px;
        color: rgb(74,74,74);
    }
    .map {
        margin: 40px;
    }
</style>
