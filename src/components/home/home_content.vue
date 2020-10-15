<template>
  <div class="home_content cl">
    <!-- 直播信息左半部分 -->
    <div class="cl homecontentleft left">
      <div class="swp left">
        <el-carousel height="300px">
          <el-carousel-item
            v-for="(item, key, index) in swiperdata"
            :key="key + item.id"
          >
            <img :src="item.src" alt="" class="swiper_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="foot_div left cl">
        <div class="sort cl">
          <div class="left">足球</div>
          <div class="right">FOOTBALL</div>
        </div>
        <div class="cl">
          <div class="football_class left">
            <span
              v-for="(item, key, index) in football"
              :key="item.id"
              class="foot_span"
              @click="changtype(item.id, item.name)"
              >{{ item.name }}</span
            >
          </div>
          <div class="community right">
            <div class="cl community_title_div">
              <div class="community_title left">足球社区</div>
              <div class="community_title2 right">更多</div>
            </div>
          </div>
        </div>
        <div class="cl">
          <div class="left livemsg cl">
            <div
              v-for="(item, key, index) in footballdata"
              :key="item.id"
              class="live_div left"
            >
              <img :src="item.imgsrc" alt="" class="live_img" />
              <span class="live_title">{{ item.title }}</span>
            </div>
          </div>
          <div class="left communitymsg">
            <div
              v-for="(item, key, index) in foot_communitymsg"
              :key="item.id"
              class="communitymsg_div"
            >
              <span class="communitymsg_class">[{{ item.class }}]</span>
              <span class="communitymsg_title">标题： {{ item.title }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="foot_div left">
        <div class="sort cl">
          <div class="left">篮球</div>
          <div class="right">BASKETBALL</div>
        </div>
        <div class="cl">
          <div class="football_class left">
            <span
              v-for="(item, key, index) in baskeball"
              :key="item.id"
              class="foot_span"
              @click="changtype1(item.id, item.name)"
              >{{ item.name }}</span
            >
          </div>
          <div class="community right">
            <div class="cl community_title_div">
              <div class="community_title left">足球社区</div>
              <div class="community_title2 right">更多</div>
            </div>
          </div>
        </div>
        <div class="cl">
          <div class="left livemsg cl">
            <div
              v-for="(item, key, index) in footballdata"
              :key="item.id"
              class="live_div left"
            >
              <img :src="item.imgsrc" alt="" class="live_img" />
              <span class="live_title">{{ item.title }}</span>
            </div>
          </div>
          <div class="left communitymsg">
            <div
              v-for="(item, key, index) in foot_communitymsg"
              :key="item.id"
              class="communitymsg_div"
            >
              <span class="communitymsg_class">[{{ item.class }}]</span>
              <span class="communitymsg_title">标题： {{ item.title }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 直播信息右半部分 -->
    <div class="homecontentright right">
      <div class="homecontentright_menu_div cl">
        <div class="dropdown left">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class=""></i>
              {{ elmenu }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, key, index) in livemenu"
                :key="item.id"
                :command="item.id"
                >{{ item.title }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="livestatus left cl">
          <div
            v-for="(item, key, index) in todaymenu"
            :key="item.id"
            :class="item.clicktype ? 'todaymenu clicktype' : 'todaymenu '"
            @click="changetodaymenu(item.id)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, key, index) in livecontentdata"
          :key="item.id"
          class="cl centerimg livecontent_div"
        >
          <div class="left ateam">
            <img :src="item.aicon" alt="" />
            <div>{{ item.aname }}</div>
          </div>
          <div class="left livetype">
            <div>直播</div>
            <div>
              {{ item.time }}
            </div>
          </div>
          <div class="left ateam">
            <img :src="item.aicon" alt="" />
            <div>{{ item.bteam }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperdata: [
        {
          id: 1,
          src: require("../../image/logo.png"),
        },
        {
          id: 2,
          src: require("../../image/logo.png"),
        },
        {
          id: 3,
          src: require("../../image/logo.png"),
        },
        {
          id: 4,
          src: require("../../image/logo.png"),
        },
      ],
      football: [
        {
          id: 1,
          name: "最新",
        },
        {
          id: 2,
          name: "英超",
        },
        {
          id: 3,
          name: "西甲",
        },
        {
          id: 4,
          name: "意甲",
        },
        {
          id: 5,
          name: "德甲",
        },
        {
          id: 6,
          name: "国内",
        },
        {
          id: 7,
          name: "更多",
        },
      ],
      baskeball: [
        {
          id: 1,
          name: "最新",
        },
        {
          id: 2,
          name: "CBA",
        },
        {
          id: 3,
          name: "NBA",
        },
      ],
      footballdata: [
        {
          id: 1,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 2,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 3,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 4,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 5,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 6,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 7,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
        {
          id: 8,
          imgsrc: require("../../image/logo.png"),
          title: "[女足]中国之队友谊赛：中国 0-0 墨西哥",
        },
      ],
      foot_communitymsg: [
        {
          id: 1,
          class: "中超版块",
          title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 2,
          class: "中超版块",
          title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 3,
          class: "中超版块",
          title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
      ],
      livemenu: [
        {
          id: 1,
          title: "足球直播",
        },
        {
          id: 2,
          title: "篮球直播",
        },
      ],
      todaymenu: [
        {
          id: 1,
          title: "今日",
          clicktype: true,
        },
        {
          id: 2,
          title: "完结",
          clicktype: false,
        },
      ],
      livecontentdata: [
        {
          id: 1,
          aname: "Ateam",
          bteam: "Bteam",
          aicon: require("../../image/logo.png"),
          bicon: require("../../image/logo.png"),
          time: "10.20",
        },
        {
          id: 2,
          aname: "Ateam",
          bteam: "Bteam",
          aicon: require("../../image/logo.png"),
          bicon: require("../../image/logo.png"),
          time: "10.20",
        },
        {
          id: 3,
          aname: "Ateam",
          bteam: "Bteam",
          aicon: require("../../image/logo.png"),
          bicon: require("../../image/logo.png"),
          time: "10.20",
        },
        {
          id: 4,
          aname: "Ateam",
          bteam: "Bteam",
          aicon: require("../../image/logo.png"),
          bicon: require("../../image/logo.png"),
          time: "10.20",
        },
        {
          id: 5,
          aname: "Ateam",
          bteam: "Bteam",
          aicon: require("../../image/logo.png"),
          bicon: require("../../image/logo.png"),
          time: "10.20",
        },
      ],
      elmenu: "",
    };
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      let data = this.livemenu;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == command) {
          this.elmenu = data[i].title;
        }
      }
    },
    changetodaymenu(id) {
      for (let i = 0; i < this.todaymenu.length; i++) {
        if (id == this.todaymenu[i].id) {
          this.todaymenu[i].clicktype = true;
        } else {
          this.todaymenu[i].clicktype = false;
        }
      }
    },
    initialization() {
      let data = this.livemenu;
      this.elmenu = data[0].title;
    },
    changtype(id, name) {
      console.log(id, name);
    },
    changtype1(id, name) {
      console.log(id, name);
    },
  },
  created() {
    this.initialization();
  },
};
</script>

<style lang="less" scoped>
.swp {
  width: 93%;
  margin-left: 7%;
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
.swiper_img {
  width: 100%;
}
.homecontentleft {
  width: 75%;
  .foot_div {
    width: 100%;
    .sort {
      color: #2945e4;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 3px #2945e4 solid;
      padding: 10px 20px;
    }
    .football_class {
      width: 50%;
      margin: 10px 0;
    }
    .football_class .foot_span:first-child {
      margin-left: 10px;
    }
    .foot_span {
      width: 20px;
      height: 30px;
      line-height: 30px;
      font-size: 17px;
      border: 1px 0 1px 0 solid #2945e4;
      padding: 5px;
      color: #2945e4;
      cursor: pointer;
    }
    .community {
      width: 50%;
    }
    .community_title_div {
      margin-top: 10px;
      color: #666;
      font-size: 17px;
      .community_title {
      }
    }
  }
  .livemsg,
  .communitymsg {
    width: 50%;
    color: #666666;
    .communitymsg_div {
      margin-top: 5px;
    }
    .communitymsg_class {
      padding-right: 10px;
    }
    .communitymsg_title {
      padding-left: 10px;
      border-left: 1px solid #666666;
    }
  }
  .live_div {
    width: 24%;
    margin: 10px 0 0 1%;
    .live_title {
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-family: PingFangSC-Regular;
    }
    .live_img {
      width: 100%;
    }
  }
}
.homecontentright {
  width: 25%;
  .homecontentright_menu_div {
    font-size: 20px;
    .dropdown {
      width: 40%;
    }
    .el-dropdown {
      font-size: 20px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 20px;
    }
  }
  .livestatus {
    width: 50%;
  }
  .todaymenu {
    cursor: pointer;
    display: inline-block;
    width: 50%;
    text-align: center;
    background: #fff;
    color: #666666;
    border-bottom: 1px solid #666666;
  }
  .clicktype {
    border-top: 1px solid #409eff;
    border-bottom: none;
    color: #409eff;
  }
  .livecontent_div{
    border-bottom: 1px #666666 dotted;
    justify-content: center;
  }
  .ateam {
    width: 33%;
    img {
      width: 100%;
    }
    div {
      text-align: center;
    }
  }
  .livetype {
    width: 33%;
    height: 100%;
    text-align: center;
  }
}
</style>