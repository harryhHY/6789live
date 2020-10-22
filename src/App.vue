<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import url("./style/index");
#app {
  background-image: url("./image/bj.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
