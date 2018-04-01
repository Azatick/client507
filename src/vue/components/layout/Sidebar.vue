<template>
  <sidebar>
    <div class="sidebar">
      <b-link class="icons" href="#foo">
        <!-- <i class="el-icon-message"></i> -->
        <img class="icons__message" src="../../../assets/img/icons/message.svg" alt="Сообщения">
      </b-link>
      <b-link href="#foo">
        <!-- <i class="el-icon-setting"></i> -->
        <img class="icons__settings" src="../../../assets/img/icons/settings.svg" alt="Настройки">
      </b-link>
    </div>
  </sidebar>
</template>

<script lang="ts">
	export default {

	}
</script>

<style lang="scss">
  .sidebar {
      height: 100%;
      width: 50px;
      background: #eff2f7;
  }
  .icons {
    height: 25px;
    width: 25px;
    margin: 20px 10px 25px;

    &__message {
      height: 25px;
      width: 25px;
      display: flex;
      margin-left: 10px;
    }

    &__settings {
      height: 25px;
      width: 25px;
      display: flex;
      margin: 20px 10px 25px;
    }
  }
</style>
