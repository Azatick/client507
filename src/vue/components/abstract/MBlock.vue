<template>
    <div class="block">
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">
.block {
  font-family: "Roboto Mono for Powerline";
  background: white;
}

.content {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
