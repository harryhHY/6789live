<template>
  <div id="home">
    <home_herder @changetype="parentEvent"></home_herder>
    <component :is="component_name"></component>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const home_content = () => import("../../components/home/home_content");
export default {
  data() {
    return {
      menu_num: "1",
      component_name:"home_content"
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
          return this.component_name = 'home_content'
          break;
        case "2":
          return this.component_name = 'home_herder'
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
    home_content
  },
  created() {},
};
</script>

<style lang="less" scoped>

</style>