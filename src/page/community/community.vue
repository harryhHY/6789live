<template>
  <div class="community cl">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="community_content left">
      <div class="community_content_header cl">
        <div class="cl left header_left">
          <div class="left postspan">今日：{{ todaynum }}</div>
          <div class="left postspan postspan2">昨日：{{ yesterdaynum }}</div>
          <div class="left postspan">贴子：{{ postnum }}</div>
        </div>
        <div class="search right">
          <input
            type="text"
            placeholder="搜话题、用户、新闻"
            class="search_input"
            v-model="serachMsg"
            v-on:keyup.enter="serach(serachMsg)"
          />
          <img
            src="../../image/sousuo.png"
            alt=""
            class="serach_click cu"
            @click="serach(serachMsg)"
          />
        </div>
      </div>
      <div class="community_content_main">
        <div v-for="(item, index) in title" :key="index">
          <div class="cl menu_title" @click="changetype(index)">
            <div class="left">{{ item.title }}</div>
            <div class="right">
              <i
                :class="[
                  item.isRotate
                    ? 'el-icon-arrow-down right rotate  live_title_i'
                    : 'el-icon-arrow-down right rotate1 live_title_i',
                ]"
              ></i>
            </div>
          </div>
          <div v-if="title[index].isRotate">
            <div
              v-for="(item, index) in community_List"
              :key="index"
              class="plate_div cl centerimg cu"
            >
              <img :src="item.img" alt="" class="plate_img left" />
              <div class="left plate_left">
                <div class="platename">{{ item.platename }}</div>
                <div class="plateIntroduction">
                  {{ item.plateIntroduction }}
                </div>
                <div>
                  <div class="left platehost_title">版主：</div>
                  <div
                    v-for="(item, index) in item.platehost"
                    :key="index"
                    class="left platehost"
                  >
                    {{ item }} 、
                  </div>
                </div>
              </div>
              <div class="left plate_mid">
                <span>{{ item.reply }} / </span>
                <span>{{ item.examine }}</span>
              </div>
              <div class="left plate_right">
                <div class="platetitle">
                  {{ item.platetitle }}
                </div>
                <div class="cl">
                  <span class="commentator left">
                    by {{ item.commentator }}
                  </span>
                  <span class="operatingtime right">
                    {{ item.operatingtime }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const livemenu = () => import("../../components/live/livemenu");
export default {
  data() {
    return {
      headerKey: "4",
      title: [
        {
          title: "足球",
          isRotate: true,
        },
        {
          title: "篮球",
          isRotate: false,
        },
        {
          title: "综合",
          isRotate: false,
        },
      ],
      communityMenuClass_foot: [
        {
          type: "中超",
        },
        {
          type: "西甲",
        },
        {
          type: "意甲",
        },
        {
          type: "德甲",
        },
        {
          type: "欧冠",
        },
      ],
      community_logo: require("../../image/logo.png"),
      todaynum: 0,
      community_List: [
        {
          img: require("../../image/team.jpg"),
          platename: "国足",
          plateIntroduction:
            "中国足球的春天，燃烧岁月，不负青春，我们未来可期！",
          platehost: ["jj", "pipi"],
          reply: "122345",
          examine: "23456",
          platetitle: "盘点十大球员神奇事件，不擅长的对手，伊布职业生涯",
          commentator: "烈火如歌",
          operatingtime: "2020.10.20",
        },
        {
          img: require("../../image/team.jpg"),
          platename: "国足",
          plateIntroduction:
            "中国足球的春天，燃烧岁月，不负青春，我们未来可期！",
          platehost: ["jj", "pipi"],
          reply: "122345",
          examine: "23456",
          platetitle: "盘点十大球员神奇事件，不擅长的对手，伊布职业生涯",
          commentator: "烈火如歌",
          operatingtime: "2020.10.20",
        },
        {
          img: require("../../image/team.jpg"),
          platename: "国足",
          plateIntroduction:
            "中国足球的春天，燃烧岁月，不负青春，我们未来可期！",
          platehost: ["jj", "pipi"],
          reply: "122345",
          examine: "23456",
          platetitle: "盘点十大球员神奇事件，不擅长的对手，伊布职业生涯",
          commentator: "烈火如歌",
          operatingtime: "2020.10.20",
        },
      ],
      yesterdaynum: 0,
      postnum: 1111,
      serachMsg: "",
    };
  },
  methods: {
    changetype(idx) {
      let data = this.title;
      for (let i = 0; i < data.length; i++) {
        if (idx == i) {
          data[i].isRotate = !data[i].isRotate;
        } else {
          data[i].isRotate = false;
        }
      }

      this.title = data;
    },
    serach(msg) {
      this.serachMsg = this.$inHTMLData(msg)
      console.log(this.serachMsg);
    },
  },
  components: {
    home_herder,
    livemenu,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.menuheader {
  font-size: 20px;
  background-color: #2a44da;
  color: #fff;
  line-height: 81px;
  padding: 0 20px;
}
.menuClass {
  font-size: 18px;
  padding: 0 15px;
  line-height: 81px;
  background-color: #999;
}
.menuClass:hover {
  background-color: #fff;
  color: #000000;
}
.community_content {
  width: 90%;
  .community_content_header {
    margin: 20px 30px;
    font-size: 16px;
    .header_left {
      height: 44px;
      display: flex;
      align-items: center;
    }
    .postspan {
      padding: 0 10px;
    }
    .postspan2 {
      border-left: 1px solid #999999;
      border-right: 1px solid #999999;
    }
    .search {
      position: relative;
      .search_input {
        width: 300px;
        height: 40px;
        border-radius: 5px;
        padding-left: 10px;
      }
      .serach_click {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  .community_content_main {
    .menu_title {
      margin: 10px 20px;
      background-color: rgb(136, 149, 223);
      font-size: 20px;
      padding: 10px 20px;
      color: #fff;
      border-radius: 5px;
    }

    .plate_img {
      width: 10%;
      height: 160px;
    }
    .platename {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
    .plateIntroduction {
      font-size: 16px;
      color: #666666;
      line-height: 30px;
    }

    .platehost {
      color: #2a44da;
    }
  }
}

.plate_left {
  width: 40%;
}
.plate_mid {
  text-align: center;
  width: 20%;
}
.plate_right {
  width: 30%;
  .platetitle {
    line-height: 30px;
    font-size: 18px;
    margin: 10px 0;
  }
}
.commentator {
  font-size: 16px;
}
.operatingtime {
  font-size: 16px;
}
.plate_div {
  margin: 0 20px;
}
.rotate {
  transition: all 0.5s;
}
.rotate1 {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
  transition: all 1s;
}
</style>