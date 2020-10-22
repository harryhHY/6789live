<template>
  <div class="livedel cl">
    <home_herder @changetype="parentEvent" :headerKey="headerKey"></home_herder>
    <livemenu @changetype="pve" />
    <div class="livedel_content left">
      <liveheader></liveheader>
      <div class="livedel_div boxshadow">
        <div class="hometitle">首页</div>
        <div class="content_box">
          <div class="live_title centerimg">
            <div class="livecontent cl">
              <div class="aname ov left">
                {{ liveList.aname }}
              </div>
              <div class="left aicon">
                <img :src="liveList.aicon" alt="" class="aiconimg" />
              </div>
              <div class="ascore left">
                {{ liveList.ascore }}
              </div>
              <div class="time_type left">
                <div>{{ liveList.time }}</div>
                <div>{{ liveList.type }}</div>
              </div>
              <div class="ascore left">
                {{ liveList.bscore }}
              </div>
              <div class="left aicon">
                <img :src="liveList.bicon" alt="" class="aiconimg" />
              </div>
              <div class="bname ov left">
                {{ liveList.bname }}
              </div>
            </div>
          </div>
          <div class="live_div">
            <div id="dplayer" ref="dplayer"></div>
          </div>
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
const liveheader = () => import("./liveheader");
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
    goto(src) {
      this.$router.push(src);
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
    liveheader,
  },
  computed: {
    ...mapState(["liveList"]),
  },
  created() {
    console.log(this.liveList);
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
.livedel_div {
  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 22px;
  .hometitle {
    color: #2a88f3;
    border-left: 5px solid #014681;
    padding-left: 10px;
    margin: 0 0 18px 24px;
  }
  .content_box {
    border: 1px solid #f2f3f5;
    margin:0 83px;
    padding: 0 31px;
  }
}
.livedel {
  background-image: url("../../image/bj.jpg")  ;
  background-size: 100%;
}
.livedel_content {
  margin-left: 29px;
  .live_div {
    width: 968px;
    height: 542px;
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
    .exponent {
      margin: 5px 10px;
    }
  }
}
.livecontent {
  margin: 0 25px;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .aname {
    font-size: 14px;
    width: 125px;
    text-align: right;
  }
  .aicon {
    .aiconimg {
      width: 48px;
      height: 48px;
    }
  }
  .ascore {
    font-size: 26px;
    width: 56px;
    line-height: 80px;
  }
  .bname {
    font-size: 14px;
    width: 125px;
    text-align: left;
  }
  .anadiv {
    font-size: 14px;
    color: #848484;
    display: flex;
    align-items: center;
    .anaimg {
      background-image: url("../../image/news/ana.png")  ;
      background-size: 100%;
      width: 20px;
      height: 20px;
    }
  }
  .anadiv:hover {
    color: #01c029;
    .anaimg {
      background-image: url("../../image/news/ana1.png")  ;
    }
  }
  .indnxdiv {
    font-size: 14px;
    color: #848484;
    display: flex;
    align-items: center;
    margin-left: 20px;
    .indeximg {
      background-image: url("../../image/news/index.png")  ;
      background-size: 100%;
      width: 20px;
      height: 20px;
    }
  }
  .indnxdiv:hover {
    color: #fe6102;
    .indeximg {
      background-image: url("../../image/news/index1.png")  ;
    }
  }
  .type_div {
    width: 100px;
    text-align: right;
    color: #014681;
  }
  .liveicon {
    width: 104px;
    height: 30px;
    background-image: url("../../image/news/liveicon.png")  ;
    background-size: 100%;
    margin: 0 10px;
  }
  .liveicon:hover {
    background-image: url("../../image/news/liveicon1.png")  ;
  }
  .hqlive {
    font-size: 14px;
    width: 76px;
    text-align: center;
    color: #014681;
  }
}
.boxshadow {
  box-shadow: 1px 4px 1px 1px #d2d2d2;
}
</style>