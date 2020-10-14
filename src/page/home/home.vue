<template>
  <div id="home">
    <home_herder></home_herder>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
export default {
  components: {
    home_herder,
  },
};
</script>

<style lang="less" scoped>
</style>