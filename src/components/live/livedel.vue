<template>
  <div class="livedel cl">
    <home_herder @changetype="parentEvent"></home_herder>
    <livemenu @changetype="pve" />
    <div></div>
    <liveVideo />
  </div>
</template>

<script>
const livemenu = () => import("../live/livemenu");
const liveVideo = () => import("../live/live_video");
const home_herder = () => import("../home/home_herder");
export default {
  data() {
    return {
        menu_num:'2'
    };
  },
  methods: {
    parentEvent(data) {
      this.menu_num = data;
      console.log(data)
    },
    // 左边直播分类传过来的值
    pve(e) {
      console.log(e);
    },
  },
  components: {
    livemenu,
    liveVideo,
    home_herder,
  },
};
</script>

<style lang="less" scoped>
</style>