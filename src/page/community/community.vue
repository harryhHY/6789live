<template>
  <div class="community cl">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="community_content boxshadow left">
      <div class="menu_header">
        <div class="cl">
          <div class="left menu_header_foot"></div>
          <div class="menu_header_foot_class left">
            <div
              class="left menu_header_foot_class_title cu"
              v-for="(item, index) in footer_menu"
              :key="index"
            >
              {{ item.title }}
            </div>
          </div>
          <!-- 篮球栏目 -->
          <div class="left menu_header_bsb"></div>
          <div class="menu_header_foot_class left">
            <div
              class="left menu_header_foot_class_title cu"
              v-for="(item, index) in footer_menu"
              :key="index"
            >
              {{ item.title }}
            </div>
          </div>
          <!-- 综合栏目 -->
          <div class="left menu_header_translation"></div>
          <div class="menu_header_foot_class left">
            <div
              class="left menu_header_foot_class_title cu"
              v-for="(item, index) in footer_menu"
              :key="index"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索框 -->
      <div class="search_div cl">
        <div class="left search_div_left">
          <input
            type="text"
            class="serarch_input"
            placeholder="请输入搜索内容"
          />
          <img
            src="../../image/news/sousuo.png"
            alt=""
            class="cu search_div_left_img"
          />
        </div>
        <div class="right search_div_right cl">
          <div class="todaypost left">今日发帖：{{ todaypost }}</div>
          <i class="left">|</i>
          <div class="yesterdaypost left">昨日发帖：{{ yesterdaypost }}</div>
          <i class="left">|</i>
          <div class="totalpost left">总共累计发帖：{{ totalpost }}</div>
        </div>
      </div>
      <!-- 足球社区 -->
      <div class="footertitle"></div>
      <div
        class="cl footer_content"
        v-for="(item, index) in listdata"
        :key="index"
        @click="gotocommdel()"
      >
        <div class="footer_content_left left">
          <div class="cl footer_content_left_titleheader">
            <div class="footer_type left">{{ item.type }}</div>
            <div class="footer_title left">
              {{ item.title }}
            </div>
          </div>
          <div class="footer_content_del ov">详情：{{ item.del }}</div>
          <div class="cl footer_content_belong">
            <div class="left cl">
              <div class="left footer_name">
                {{ item.name }}
              </div>
              <div class="left footer_time">
                {{ item.time }}
              </div>
            </div>
            <div class="right cl">
              <div class="left centerimg">
                <div class="footer_commnum_img"></div>
                <div>评论：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
              <div class="left centerimg footer_goods_div">
                <div class="footer_goods_img"></div>
                <div>点赞：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_content_right left cl">
          <div class="footer_content_right_div right">
            <img
              :src="item.avatar"
              alt=""
              class="footer_content_right_avatar"
            />
            <div>
              {{ item.teamname }}
            </div>
          </div>
        </div>
      </div>
      <div class="centerimg more_div">
        <div class="more cu"></div>
      </div>
      <!-- 篮球社区 -->
      <div class="bsktitle"></div>
      <div
        class="cl footer_content"
        v-for="(item, index) in listdata"
        :key="item.time + index"
      >
        <div class="footer_content_left left">
          <div class="cl footer_content_left_titleheader">
            <div class="footer_type left">{{ item.type }}</div>
            <div class="footer_title left">
              {{ item.title }}
            </div>
          </div>
          <div class="footer_content_del ov">详情：{{ item.del }}</div>
          <div class="cl footer_content_belong">
            <div class="left cl">
              <div class="left footer_name">
                {{ item.name }}
              </div>
              <div class="left footer_time">
                {{ item.time }}
              </div>
            </div>
            <div class="right cl">
              <div class="left centerimg">
                <div class="footer_commnum_img"></div>
                <div>评论：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
              <div class="left centerimg footer_goods_div">
                <div class="footer_goods_img"></div>
                <div>点赞：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_content_right left cl">
          <div class="footer_content_right_div right">
            <img
              :src="item.avatar"
              alt=""
              class="footer_content_right_avatar"
            />
            <div>
              {{ item.teamname }}
            </div>
          </div>
        </div>
      </div>
      <div class="centerimg more_div">
        <div class="more cu"></div>
      </div>
      <!-- 综合社区 -->
      <div class="translationtitle"></div>
      <div
        class="cl footer_content"
        v-for="(item, index) in listdata"
        :key="item.title + index"
      >
        <div class="footer_content_left left">
          <div class="cl footer_content_left_titleheader">
            <div class="footer_type left">{{ item.type }}</div>
            <div class="footer_title left">
              {{ item.title }}
            </div>
          </div>
          <div class="footer_content_del ov">详情：{{ item.del }}</div>
          <div class="cl footer_content_belong">
            <div class="left cl">
              <div class="left footer_name">
                {{ item.name }}
              </div>
              <div class="left footer_time">
                {{ item.time }}
              </div>
            </div>
            <div class="right cl">
              <div class="left centerimg">
                <div class="footer_commnum_img"></div>
                <div>评论：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
              <div class="left centerimg footer_goods_div">
                <div class="footer_goods_img"></div>
                <div>点赞：</div>
                <div>
                  {{ item.commnum }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_content_right left cl">
          <div class="footer_content_right_div right">
            <img
              :src="item.avatar"
              alt=""
              class="footer_content_right_avatar"
            />
            <div>
              {{ item.teamname }}
            </div>
          </div>
        </div>
      </div>
      <div class="centerimg more_div">
        <div class="more cu"></div>
      </div>
    </div>
    <div class="community_hotmenu left boxshadow">
      <div class="community_hotmenu_header">今日热门社区</div>
      <div class="boreder_bt cl">
        <div class="boreder_bt_left left"></div>
        <div class="boreder_bt_right left"></div>
      </div>
      <div
        v-for="(item, index) in hotmenu"
        :key="index"
        class="community_hotmenu_content cl"
      >
        <div class="community_hotmenu_content_commavatar left">
          <div class="cl centerimg">
            <img :src="item.commavatar" alt="" class="left" />
            <div class="left community_hotmenu_commname ov">
              {{ item.commname }}
            </div>
          </div>
        </div>
        <div class="hotmenu_content_todaynum left">
          今日发帖：{{ item.commnum }}
        </div>
      </div>
      <div class="lookmore">查看更多</div>
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
      footer_menu: [
        {
          title: "足球",
          isRotate: true,
        },
        {
          title: "篮球",
          isRotate: false,
        },
        {
          title: "国足",
          isRotate: false,
        },
        {
          title: "球幕茶疗",
          isRotate: true,
        },
        {
          title: "国足",
          isRotate: false,
        },
        {
          title: "更多》",
          isRotate: false,
        },
      ],
      serachMsg: "",
      todaypost: 0,
      yesterdaypost: 0,
      listdata: [
        {
          type: "足球",
          title: "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          del:
            "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          time: "102/22/20",
          name: "大家叫他少爷",
          commnum: "222",
          teamname: "青岛大连",
          goodsnum: "222",
          avatar: require("../../image/team.jpg"),
        },
        {
          type: "足球",
          title: "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          del:
            "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          time: "102/22/20",
          name: "大家叫他少爷",
          commnum: "222",
          teamname: "青岛大连",
          goodsnum: "222",
          avatar: require("../../image/team.jpg"),
        },
        {
          type: "足球",
          title: "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          del:
            "美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨美媒给交易方案2换1 惟金色啊实打实大阿萨德阿萨",
          time: "102/22/20",
          name: "大家叫他少爷",
          commnum: "222",
          teamname: "青岛大连",
          goodsnum: "222",
          avatar: require("../../image/team.jpg"),
        },
      ],
      totalpost: 111,
      hotmenu: [
        {
          commavatar: require("../../image/team.jpg"),
          commname: "热议NBA",
          commnum: 222,
        },
        {
          commavatar: require("../../image/team.jpg"),
          commname: "湖人",
          commnum: 222,
        },
        {
          commavatar: require("../../image/team.jpg"),
          commname: "中国篮球",
          commnum: 222,
        },
        {
          commavatar: require("../../image/team.jpg"),
          commname: "英雄联盟",
          commnum: 222,
        },
      ],
    };
  },
  methods: {
    serach(msg) {
      this.serachMsg = this.$inHTMLData(msg);
      console.log(this.serachMsg);
    },
    gotocommdel() {
      this.$router.push("/communitydel");
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
.community {
  background-image: url("../../image/bj.jpg");
  background-size: 100%;
  font-size: 14px;
}
.community_content {
  width: 1165px;
  margin: 20px 0 0 48px;
  border-radius: 5px;
  background: #fff;
  .menu_header {
    background-color: #fff;
    border-bottom: 1px solid #e2f1fe;
    .menu_header_foot {
      background-image: url("../../image/cmm/foot.png");
      background-size: 100%;
      width: 116px;
      height: 68px;
      background-color: #e2f1fe;
    }
    .menu_header_bsb {
      background-image: url("../../image/cmm/bsb.png");
      background-size: 100%;
      width: 116px;
      height: 68px;
      background-color: #e2f1fe;
    }
    .menu_header_translation {
      background-image: url("../../image/cmm/translation.png");
      background-size: 100%;
      width: 116px;
      height: 68px;
      background-color: #e2f1fe;
    }
    .menu_header_foot_class {
      width: 270px;
      height: 68px;
      .menu_header_foot_class_title {
        width: 33%;
        line-height: 34px;
        text-align: center;
        color: #555;
      }
      .menu_header_foot_class_title:hover {
        color: #01a0fc;
      }
    }
  }
  .search_div {
    margin: 13px 46px;
    .search_div_left {
      position: relative;
      .serarch_input {
        width: 468px;
        height: 35px;
        line-height: 35px;
        border-radius: 17px;
        background-color: #e1e2e4;
        border: 1px solid #dedede;
        padding-left: 20px;
      }
      .search_div_left_img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 15px;
        margin: auto;
      }
    }
    .search_div_right {
      color: #555;
      line-height: 35px;
      .todaypost {
        margin-right: 5px;
      }
      .yesterdaypost {
        margin: 0 5px;
      }
      .totalpost {
        margin-left: 5px;
      }
    }
  }
  .footertitle {
    background-image: url("../../image/cmm/foottitle.png");
    background-size: 100%;
    width: 1094px;
    height: 50px;
    margin-left: 34px;
  }
  .footer_content {
    border-bottom: 1px solid #dedede;
    margin: 0 58px;
    text-align: center;
    padding: 18px 0;
    .footer_content_left_titleheader {
      .footer_type {
        background-image: url("../../image/liveclass.png");
        background-size: 100%;
        color: #fff;
        width: 38px;
        height: 22px;
        line-height: 22px;
      }
      .footer_title {
        font-size: 18px;
        margin-left: 18px;
      }
    }
    .footer_content_del {
      margin: 14px 0 0 55px;
      color: #555;
      width: 608px;
    }
    .footer_content_belong {
      width: 705px;
      margin: 18px 0 0 55px;
      .footer_goods_div {
        margin-left: 20px;
        .footer_goods_img {
          background-image: url("../../image/cmm/goods.png");
          background-size: 100%;
          width: 16px;
          height: 16px;
        }
      }
      .footer_time {
        color: #555;
        margin-left: 23px;
      }

      .footer_commnum_img {
        background-image: url("../../image/cmm/comment.png");
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
    }
    .footer_content_right {
      width: 277px;
      .footer_content_right_div {
        margin-right: 20px;
        .footer_content_right_avatar {
          width: 54px;
          height: 54px;
          border: 1px solid #dedede;
          border-radius: 50%;
        }
      }
    }
  }
  .bsktitle {
    background-image: url("../../image/cmm/bsbtitle.png");
    background-size: 100%;
    width: 1094px;
    height: 50px;
    margin-left: 34px;
    margin-top: 10px;
  }
  .translationtitle {
    background-image: url("../../image/cmm/translationtitle.png");
    background-size: 100%;
    width: 1094px;
    height: 50px;
    margin-left: 34px;
    margin-top: 10px;
  }
  .more_div {
    margin: 16px 0 10px 0;
    .more {
      background-image: url("../../image/cmm/unfoldicon.png");
      width: 17px;
      height: 14px;
      background-size: 100%;
    }
    .more:hover {
      background-image: url("../../image/cmm/unfoldicon1.png");
    }
  }
}
.community_hotmenu {
  width: 352px;
  padding: 18px 13px;
  border-top: 4px solid #0190fc;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0 0 10px;
  .community_hotmenu_header {
    color: #01a0fc;
    border-left: 5px solid #014581;
    padding-left: 11px;
    margin-left: 10px;
  }
  .boreder_bt {
    margin: 16px 0;
    .boreder_bt_left {
      height: 2px;
      width: 49%;
      margin-right: 2%;
      background-color: #0190fc;
    }
    .boreder_bt_right {
      height: 2px;
      width: 49%;
      background-color: #dedede;
    }
  }
  .community_hotmenu_content {
    width: 352px;
    height: 78px;
    border-bottom: 1px solid #dedede;
    .community_hotmenu_content_commavatar {
      width: 50%;
      font-size: 18px;
      img {
        width: 52px;
        height: 52px;
      }
    }
    .community_hotmenu_commname {
      width: 100px;
      margin-left: 15px;
      line-height: 78px;
    }
    .hotmenu_content_todaynum {
      width: 50%;
      line-height: 78px;
      color: #555;
      text-align: center;
    }
  }
  .lookmore {
    color: #0190fc;
    border: 1px solid #0190fc;
    width: 125px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 14px;
    margin: 24px auto;
  }
}
</style>