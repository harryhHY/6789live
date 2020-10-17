<template>
  <div class="cl newsdel">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="newsdel_content left">
      <div class="newsdel_header cl">
        <h2>{{ newsList.title }}</h2>
        <div class="right cl">
          <div class="left">
            <i class="el-icon-tickets"></i>
            举报
          </div>
          <div class="left">
            <i class="el-icon-share"></i>
            分享
          </div>
        </div>
      </div>
      <div class="newsdel_body">
        <div id="dplayer" ref="dplayer"></div>
      </div>
    </div>
    <newslive></newslive>
  </div>
</template>

<script>
import { mapState } from "vuex";
const home_herder = () => import("../../components/home/home_herder");
const livemenu = () => import("../../components/live/livemenu");
const newslive = () => import("../../components/new/newslive");
import DPlayer from "dplayer";
export default {
  data() {
    return {
      newstitle: "",
      headerKey: "3",
      querydata: "",
      videosrc: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
    };
  },
  methods: {
    getrouterdata() {},
  },
  components: {
    home_herder,
    livemenu,
    newslive,
  },
  created() {
    this.getrouterdata();
  },
  computed: {
    ...mapState(["newsList"]),
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: this.videosrc,
      },
    });
  },
};
</script>

<style lang="less" scoped>
.newsdel_content {
  width: 69%;
  .newsdel_header {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  .newsdel_body {
  }
}
</style>