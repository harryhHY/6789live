<template>
  <div class="home_content cl">
    <!-- 直播信息左半部分 -->
    <div class="cl homecontentleft left">
      <div class="newsheader">
        <img src="../../image/home_new.png" alt="" />
        <div class="newstitle">新闻热点</div>
        <div class="newstitle_en">NEWS HOTSPOT</div>
      </div>
      <div class="swp left">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
            v-for="(item, key, index) in swiperdata"
            :key="key + item.id"
          >
            <img :src="item.src" alt="" class="swiper_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 足球部分 -->
      <div class="foot_div left cl">
        <div>
          <div class="foot_divsort cl">
            <img src="../../image/home_footer.png" alt="" />
            <div class="foot_divsort_div">足球</div>
            <div class="foot_divsort_div1">FOOTBALL</div>
          </div>

          <div class="cl footer_content boxshadow">
            <div class="cl footerheader">
              <div class="football_class left">
                <div
                  v-for="(item, key, index) in football"
                  :key="item.id"
                  class="foot_span"
                >
                  <span
                    @click="changtype(item.id, item.name)"
                    :class="item.id == footballflag ? 'footerclick' : ''"
                    >{{ item.name }}</span
                  >
                  <i>|</i>
                </div>
              </div>
              <span class="cu right morespan">更多》</span>
            </div>
            <div class="livemsg cl">
              <div
                v-for="(item, key, index) in footballdata"
                :key="item.id"
                class="live_div left cu"
                @click="gotolive(item)"
              >
                <img :src="item.imgsrc" alt="" class="live_img" />
                <span class="live_title ov">{{ item.title }}</span>
              </div>
            </div>
            <div class="communitymsg_header cl">
              <div class="left footercomm">足球社区</div>
              <div class="right cu">更多》</div>
            </div>
            <div class="communitymsg">
              <div
                v-for="(item, key, index) in foot_communitymsg"
                :key="item.id"
                class="communitymsg_div cl cu"
              >
                <div class="communitymsg_class left">{{ item.class }}</div>
                <div class="communitymsg_title left">
                  标题 ： {{ item.title }}
                </div>
                <div class="communitymsg_time right">
                  {{ item.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 篮球 -->
      <div class="foot_div left">
        <div class="foot_divsort cl">
          <img src="../../image/home_bb.png" alt="" />
          <div class="foot_divsort_div">篮球</div>
          <div class="foot_divsort_div1">BASKETBALL</div>
        </div>

        <div class="cl footer_content boxshadow">
          <div class="cl footerheader">
            <div class="football_class left">
              <div
                v-for="(item, key, index) in baskeball"
                :key="item.id"
                class="foot_span"
              >
                <span
                  @click="changtype1(item.id, item.name)"
                  :class="item.id == baskeballflag ? 'footerclick' : ''"
                  >{{ item.name }}</span
                >
                <i>|</i>
              </div>
            </div>
            <span class="cu right morespan">更多》</span>
          </div>
          <div class="livemsg cl">
            <div
              v-for="(item, key, index) in footballdata"
              :key="item.id"
              class="live_div left cu"
              @click="gotolive(item)"
            >
              <img :src="item.imgsrc" alt="" class="live_img" />
              <span class="live_title ov">{{ item.title }}</span>
            </div>
          </div>
          <div class="communitymsg_header cl">
            <div class="left footercomm">篮球社区</div>
            <div class="right cu">更多》</div>
          </div>
          <div class="communitymsg">
            <div
              v-for="(item, key, index) in foot_communitymsg"
              :key="item.id"
              class="communitymsg_div cl cu"
            >
              <div class="communitymsg_class left">{{ item.class }}</div>
              <div class="communitymsg_title left">
                标题 ： {{ item.title }}
              </div>
              <div class="communitymsg_time right">
                {{ item.time }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 直播信息右半部分 -->
    <div class="homecontentright left">
      <div class="homecontentright_menu_div cl">
        <div class="livestatus cl">
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
      <div class="livecotentleft boxshadow">
        <div
          v-for="(item, key, index) in livecontentdata"
          :key="item.id"
          class="cl livecontent_div"
          @click="gotolive(item)"
        >
          <div class="left livegametype_div">
            <div class="livegametype">{{ item.gametype }}</div>
            <div>{{ item.game }}</div>
          </div>
          <div class="cl leftcontent left">
            <div class="left aname ov">
              {{ item.aname }}
            </div>
            <div class="aicon left">
              <img :src="item.aicon" alt="" />
            </div>
            <div class="ascore left">
              {{ item.ascore }}
            </div>
          </div>

          <div class="left time_div">
            <div class="time">{{ item.time }}</div>
            <div>{{ item.gamestate }}</div>
          </div>
          <div class="rightcontent left cl">
            <div class="right ascore">
              {{ item.bscore }}
            </div>
            <div class="aicon right">
              <img :src="item.bicon" alt="" />
            </div>
            <div class="right aname ov">
              {{ item.bname }}
            </div>
          </div>
        </div>
        <div class="lookmore_div centerimg">
          <div class="lookmore cu">查看更多赛事</div>
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
          name: "法甲",
        },
        {
          id: 6,
          name: "欧冠",
        },
        {
          id: 7,
          name: "欧联",
        },
        {
          id: 8,
          name: "英冠",
        },
        {
          id: 9,
          name: "澳超",
        },
        {
          id: 10,
          name: "俄超",
        },
        {
          id: 11,
          name: "国足",
        },
      ],
      footballflag: 1,
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
      baskeballflag: 1,
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
          time: "10/10",
        },
        {
          id: 2,
          class: "中超版块",
          title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "10/10",
        },
        {
          id: 3,
          class: "中超版块",
          title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "10/10",
        },
      ],
      todaymenu: [
        {
          id: 1,
          title: "今日直播",
          clicktype: true,
        },
        {
          id: 2,
          title: "足球直播",
          clicktype: false,
        },
        {
          id: 3,
          title: "已完结",
          clicktype: false,
        },
      ],
      livecontentdata: [
        {
          id: 1,
          game: "日足联",
          gametype: "足球",
          aname: "Ateam",
          bname: "Bteam",
          aicon: require("../../image/team.jpg"),
          bicon: require("../../image/team.jpg"),
          time: "10.20",
          ascore: 1,
          bscore: 2,
          gamestate: "结束",
        },
        {
          id: 2,
          game: "日足联",
          gametype: "足球",
          aname: "Ateam",
          bname: "Bteam",
          aicon: require("../../image/team.jpg"),
          bicon: require("../../image/team.jpg"),
          time: "10.20",
          ascore: 1,
          bscore: 2,
          gamestate: "结束",
        },
        {
          id: 3,
          game: "日足联",
          gametype: "足球",
          aname: "asdasdasdasdasdasdasdasdasdasdasdasdasdasd",
          bname: "Bteam",
          aicon: require("../../image/team.jpg"),
          bicon: require("../../image/team.jpg"),
          time: "10.20",
          ascore: 1,
          bscore: 2,
          gamestate: "结束",
        },
        {
          id: 4,
          game: "日足联",
          gametype: "足球",
          aname: "Ateam",
          bname: "Bteam",
          aicon: require("../../image/team.jpg"),
          bicon: require("../../image/team.jpg"),
          time: "10.20",
          ascore: 1,
          bscore: 2,
          gamestate: "结束",
        },
        {
          id: 5,
          game: "日足联",
          gametype: "足球",
          aname: "Ateam",
          bname: "Bteam",
          aicon: require("../../image/team.jpg"),
          bicon: require("../../image/team.jpg"),
          time: "10.20",
          ascore: 1,
          bscore: 2,
          gamestate: "结束",
        },
      ],
      elmenu: "",
    };
  },
  methods: {
    gotolive(e) {
      console.log(e);
      this.$store.commit("liveList", e);
      this.$router.push("Livedel");
    },
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
    // qiqi:this._.debounce(()=>{
    //   this.changetodaymenu()
    // },2000),
    initialization() {
      // let data = this.livemenu;
      // this.elmenu = data[0].title;
    },
    changtype(id, name) {
      
      this.footballflag = id;
      console.log(id, name);
    },
    changtype1(id, name) {
      this.baskeballflag = id;
      console.log(id, name);
    },
  },
  created() {
    this.initialization();
  },
};
</script>

<style lang="less" scoped>
.aname {
  width: 50px;
  font-size: 12px /**no */;
}
.rightcontent {
  width: 25%;
  display: flex;
  align-items: center;
}
.leftcontent {
  width: 25%;
  display: flex;
  align-items: center;
}
.aicon {
  img {
    width: 35px;
    height: 35px;
  }
}
.ascore {
  font-size: 18px;
  color: #014681;
}
.newsheader {
  margin-top: 4px;
  font-size: 22px;
  position: relative;
  color: #014681;
  .newstitle {
    position: absolute;
    left: 53px;
    top: 15px;
  }
  .newstitle_en {
    font-size: 17px;
    position: absolute;
    left: 149px;
    top: 23px;
  }
}
.communitymsg_header {
  font-size: 16px;
  color: #a9a9a9;
  margin: 10px 40px 10px 32px;
  border-left: 5px solid #014681;
}
.footerheader {
  margin: 10px 40px 10px 32px;
  .football_class {
    border-left: 5px solid #014681;
  }
  .football_class .foot_span:first-child {
    margin-left: 10px;
  }
}
.footercomm {
  margin-left: 15px;
  color: #1a90fc;
}
.swp {
  width: 93%;
  height: 300px;
  .is-active {
    color: #1a90fc;
  }
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
  width: 920px;
  margin-left: 307px;
  .foot_div {
    width: 100%;
    margin-top: 5px;
    .foot_divsort {
      color: #014681;
      position: relative;
      .foot_divsort_div {
        font-size: 22px;
        position: absolute;
        left: 97px;
        top: 15px;
      }
      .foot_divsort_div1 {
        font-size: 17px;
        position: absolute;
        left: 149px;
        top: 23px;
      }
    }
    .foot_span {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      border: 1px 0 1px 0 solid #2945e4;
      padding: 5px;
      color: #a9a9a9;
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
  .morespan {
    color: #a9a9a9;
    font-size: 16px;
    line-height: 30px;
  }
  .footer_content {
    padding: 16px 16px;
    background-color: #fff;
    border-radius: 15px;
  }
  .livemsg,
  .communitymsg {
    font-size: 16px;
    color: #666666;
    .communitymsg_div {
      margin-left: 45px;
      margin-top: 5px;
    }
    .communitymsg_div:hover {
      color: #1a90fc;
    }
    .communitymsg_class {
      border: 1px solid #b1b1b1;
      display: inline-block;
      padding: 5px;
    }
    .communitymsg_title {
      display: inline-block;
      padding-left: 10px;
      line-height: 33px;
    }
    .communitymsg_time {
      margin-right: 54px;
    }
  }
  .live_div {
    width: 24%;
    margin: 20px 0 0 1%;
    .live_title {
      width: 100%;
      font-size: 16px;
      color: #848484;
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
.lookmore_div {
  margin: 18px 0;
}
.lookmore {
  display: inline-block;
  line-height: 28px;
  color: #1a90fc;
  border: 1px solid #1a90fc;
  text-align: center;
  padding: 0 20px;
  border-radius: 15px;
}
.homecontentright {
  margin-top: 4px;
  width: 380px;
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
  .livecotentleft {
    background-color: #fff;
    border-radius: 0 15px 15px 15px;
    padding: 10px 12px;
  }
  .todaymenu {
    cursor: pointer;
    display: inline-block;
    width: 33%;
    text-align: center;
    font-size: 18px;
    color: #014681;
  }
  .clicktype {
    background: #fff;
    border-top: 6px solid #409eff;
    color: #409eff;
    border-radius: 10px 10px 0 0;
  }
  .livecontent_div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px #d2d2d2 solid;
    padding: 10px 0;
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
  .livegametype_div {
    width: 15%;
    margin-left: 5px;
  }
  .livegametype {
    width: 38px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    font-size: 14px;
    color: #ffffff;
    background-image: url("../../image/liveclass.png")  ;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .livetype {
    width: 33%;
    height: 100%;
    text-align: center;
  }
}
.time_div {
  width: 10%;
  text-align: center;
  padding: 0 18px;
}
.time {
  border-bottom: 1px solid #d2d2d2;
}
.boxshadow {
  box-shadow: 1px 4px 1px 1px #d2d2d2;
}

.footerclick {
  color: #1a90fc;
}
</style>