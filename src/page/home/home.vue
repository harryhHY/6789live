<template>
  <div id="home">
    <home_herder @changetype="parentEvent"></home_herder>
    <component :is="componentId"></component>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const hoome_content = () => import("../../components/home/hoome_content");
export default {
  data() {
    return {
      menu_num: "1",
    };
  },
  methods: {
    parentEvent(data) {
      this.menu_num = data;
    },
  },
  watch: {
    menu_num(newValue, oldValue) {
      switch (newValue) {
        case "1":
          return hoome_content
          break;
        case "2":
          console.log("这个是2");
          break;
        case "3":
          console.log("这个是3");
          break;
        case "4":
          console.log("这个是4");
          break;
      }
    },
  },
  components: {
    home_herder,
    hoome_content
  },
  created() {},
};
</script>

<style lang="less" scoped>

</style>