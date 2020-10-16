<template>
  <div id="home">
    <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
    <home_content />
    <!-- <component :is="component_name"></component> -->
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const home_content = () => import("../../components/home/home_content");
const live = () => import("../../components/live/live");
export default {
  data() {
    return {
      menu_num: "1",
      component_name: "home_content",
      headerKey:'1'
    };
  },
  methods: {
    parentEvent(data) {
      this.menu_num = data;
    },
  },
  watch: {
    // menu_num(newValue, oldValue) {
    //   switch (newValue) {
    //     case "1":
    //       return (this.component_name = "home_content");
    //       break;
    //     case "2":
    //       return (this.component_name = "live");
    //       break;
    //     case "3":
    //       //   return (this.component_name = "live");
    //       break;
    //     case "4":
    //       console.log("这个是4");
    //       break;
    //   }
    // },
  },
  components: {
    home_herder,
    home_content,
    live,
  },
  created() {},
};
</script>

<style lang="less" scoped>
</style>