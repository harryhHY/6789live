<template>
  <div id="search">
      <home_herder></home_herder>
      <div class="search_content boxshadow">

      </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
export default {
  data() {
    return {};
  },
  components: {
    home_herder,
  },
};
</script>

<style lang="less" scoped>
#search {
  background-image: url("../../image/bj.jpg");
  background-size: 100%;
}
.search_content{
    width: 1294px;
    
    margin:5px  auto;
    background-color: #fff;
}
</style>