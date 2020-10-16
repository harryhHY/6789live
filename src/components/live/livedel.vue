<template>
  <div class="livedel cl">
    <home_herder @changetype="parentEvent" :headerKey="headerKey"></home_herder>
    <livemenu @changetype="pve" />
    <div class="livedel_content left">
      <div class="live_title centerimg">
        {{ liveList.aname }}
        <img :src="liveList.aicon" alt="" />
        VS
        <img :src="liveList.bicon" alt="" />
        {{ liveList.bname }}
        {{ liveList.time }}
      </div>
      <div class="live_div">
        <div id="dplayer" ref="dplayer"></div>
      </div>
      <div>
        <div class="looktoday" @click="gotolive()">【点击观看今日直播】</div>
      </div>
    </div>
    <liveVideo />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DPlayer from "dplayer";
const livemenu = () => import("../live/livemenu");
const liveVideo = () => import("../live/live_video");
const home_herder = () => import("../home/home_herder");
export default {
  data() {
    return {
      menu_num: "2",
      headerKey: "2",
      videosrc:
        "https://sm.lssjy.cn/liveb/321951454287900672/playlist.m3u8?wsSecret=fe83b327ebebd00500126b6af37a8d41&wsABSTime=5f899248",
    };
  },
  methods: {
    gotolive() {
      this.$router.push("live");
    },
    parentEvent(data) {
      this.menu_num = data;
      console.log(data);
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
  computed: {
    ...mapState(["liveList"]),
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      live: true,
      danmaku: true,
      apiBackend: {
        read: function (endpoint, callback) {
          console.log("Pretend to connect WebSocket");
          // callback();
        },
        send: function (endpoint, danmakuData, callback) {
          console.log("Pretend to send danmaku via WebSocket", danmakuData);
          // callback();
        },
      },
      video: {
        url: this.videosrc,
        type: "hls",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.livedel_content {
  width: 69%;
  .live_div {
    width: 90%;
    margin: 5% 5%;
  }
  .live_title {
    font-size: 20px;
    text-align: center;
  }
  .looktoday {
    color: #2a88f3;
    font-size: 18px;
  }
}
</style>