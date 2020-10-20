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
        <div class="cl share_div">
          <div class="left share_class">分享到:</div>
          <div
            v-for="(item, index) in shareList"
            :key="item.id"
            class="left share_class cu"
            @click="sharegoto(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="cl analysis_div">
          <div class="left analysis cu" @click="goto('/analysis')">
            <i class="icon-shujufenxi1 iconfont"></i>
            数据分析
          </div>
          <div class="left exponent cu" @click="goto('/exponent')">
            <i class="icon-shujufenxi iconfont"></i>
            指数
          </div>
        </div>
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
      shareList: [
        {
          id: 1,
          name: "QQ空间",
        },
        {
          id: 2,
          name: "新浪微博",
        },
        {
          id: 3,
          name: "开心网",
        },
        {
          id: 4,
          name: "人人网",
        },
      ],
      videosrc:
        "https://sm.lssjy.cn/liveb/321951454287900672/playlist.m3u8?wsSecret=fe83b327ebebd00500126b6af37a8d41&wsABSTime=5f899248",
    };
  },
  methods: {
    goto(src){
      this.$router.push(src)
    },
    sharegoto(idx) {
      let title = "111";
      let url = "111";
      let picurl = "111";
      let content = "111";

      switch (idx) {
        case idx == 1:
          // https://api.weibo.com/2/statuses/share.json
          break;
        case idx == 2:
          break;
        case idx == 3:
          break;
      }
    },
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
  .share_div {
    font-size: 16px;
    color: #2a88f3;
  }
  .share_class {
    color: #2a88f3;
    margin: 10px;
  }
  .analysis_div {
    font-size: 20px;
    color: #2a88f3;
    .analysis {
      margin: 5px 10px;
    }
    .iconfont {
      font-size: 20px;
    }
   .exponent{
      margin: 5px 10px;
   }
  }
}
</style>