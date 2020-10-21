<template>
  <div id="live" class="cl">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu @changetype="pve" />
    <div class="live_content left">
      <div class="header cl">
        <div class="left">
          <div class="header_column">
            <img src="../../image/news/sicon.png" alt="" class="sicon" />
            <img
              :src="item.clicktype ? item.imgsrc1 : item.imgsrc"
              v-for="(item, key, index) in liveList"
              :key="item.id"
              @click="changetype(item.id, key)"
              alt=""
              class="cu siconimg"
            />
          </div>
        </div>
      </div>
      <div class="livemain boxshadow">
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
        <div class="time_class">
          <div class="buttonList_div cl">
            <div
              v-for="(item, index) in buttonList"
              :key="index"
              class="buttonList_span left"
            >
              <div>{{ item.text1 }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="live_all">
          <div></div>
          <div
            class="livecontent cl"
            v-for="(item, index) in livedata"
            :key="index"
          >
            <div class="gametype_div left">
              <div class="gametype">{{ item.gametype }}</div>
              <div class="gametype1">{{ item.gametype1 }}</div>
            </div>
            <div class="aname ov left">
              {{ item.aname }}
            </div>
            <div class="left aicon">
              <img :src="item.aicon" alt="" class="aiconimg" />
            </div>
            <div class="ascore left">
              {{ item.ascore }}
            </div>
            <div class="time_type left">
              <div>{{ item.time }}</div>
              <div>{{ item.type }}</div>
            </div>
            <div class="ascore left">
              {{ item.bscore }}
            </div>
            <div class="left aicon">
              <img :src="item.bicon" alt="" class="aiconimg" />
            </div>
            <div class="bname ov left">
              {{ item.bname }}
            </div>
            <div class="cl left anadiv cu">
              <div class="anaimg left"></div>
              <div class="ana left">数据分析</div>
            </div>
            <div class="indnxdiv left cu cl">
              <div class="left indeximg"></div>
              <div>指数</div>
            </div>
            <div class="left type_div">
              {{ item.type }}
            </div>
            <div class="liveicon left cu"></div>
            <div class="left hqlive">高清直播</div>
          </div>
        </div>
      </div>
    </div>
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
      liveList: [
        {
          id: 1,
          playdata: "足球",
          imgsrc: require("../../image/news/ftb.png"),
          imgsrc1: require("../../image/news/ftb1.png"),
          clicktype: true,
        },
        {
          id: 2,
          playdata: "篮球",
          imgsrc: require("../../image/news/bbk.png"),
          imgsrc1: require("../../image/news/bbk1.png"),
          clicktype: false,
        },
      ],
      liveListflag: 1,
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
      buttonList: [
        {
          value: 0,
          text: "",
          text1: "",
          isRotate: true,
        },
        {
          value: 1,
          text: "",
          text1: "",
          isRotate: false,
        },
        {
          value: 2,
          text: "",
          text1: "",
          isRotate: false,
        },
        {
          value: 3,
          text: "",
          text1: "",
          isRotate: false,
        },
        {
          value: 4,
          text: "",
          text1: "",
          isRotate: false,
        },
        {
          value: 5,
          text: "",
          text1: "",
          isRotate: false,
        },
        {
          value: 6,
          text: "",
          text1: "",
          isRotate: false,
        },
      ],
      livedata: [
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
        {
          type: "一结束",
          gametype: "足球",
          gametype1: "意甲",
          time: "10:20",
          aicon: require("../../image/team.jpg"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/team.jpg"),
          bname: "拉伊奎达德",
          ascore: 0,
          bscore: 1,
        },
      ],
      check: 0,
      headerKey: "2",
      footballflag: 1,
    };
  },
  methods: {
    // 切换最新栏目
    changtype(id, name) {
      this.footballflag = id;
      console.log(id, name);
    },
    //跳转直播页面
    gotolive(e) {
      // console.log(e);
      this.$store.commit("liveList", e);
      this.$router.push("Livedel");
    },
    // 左边直播分类传过来的值
    pve(e) {
      console.log(e);
    },
    //中间切换足球、篮球种类的
    changetype(id, index) {
      let data = this.liveList;
      for (let i = 0; i < data.length; i++) {
        if (i == index) {
          data[i].clicktype = true;
        } else {
          data[i].clicktype = false;
        }
      }
    },
    //日期函数
    getDate1(num) {
      let myDate = new Date();
      let m = myDate.getMonth() + 1;
      let r = myDate.getDate() + num;
      return `${m}月${r}日`;
    },
    getDate(num) {
      let a = new Array("日", "一", "二", "三", "四", "五", "六");
      let week = new Date().getDay(num);
      return `星期${a[week]}`;
    },
    //循环出多日期
    changeButtonList() {
      let buttonList = this.buttonList;
      let list = [];
      let list1 = [];
      for (let v = 0; v < 7; v++) {
        let nowdate = this.getDate1(v);
        let nowdate2 = this.getDate(v);
        list.push(nowdate);
        list1.push(nowdate2);
      }
      for (let i = 0; i < list.length; i++) {
        buttonList[i].text = list[i];
        buttonList[i].text1 = list1[i];
      }
      this.buttonList = buttonList;
      console.log(buttonList);
    },
  },
  components: {
    livemenu,
    liveVideo,
    home_herder,
  },
  created() {
    this.changeButtonList();
  },
  // watch: {
  //     data(newValue, oldValue) {

  //     }
  // },
};
</script>

<style lang="less" scoped>
.livemain {
  background-color: #fff;
  padding: 13px 0;
  border-radius: 13px;
}
#live {
  background-image: url("../../image/bj.jpg");
  background-size: 100%;
}
.playname {
  display: inline-block;
  font-size: 17px;
  padding: 5px 10px;
  color: #2a88f3;
}
.live_content {
  width: 1195px;
  margin-left: 29px;
}
.header {
  .header_column {
    .sicon {
      margin-top: 7px;
    }
    .siconimg {
      margin-top: 23px;
      margin-right: 35px;
    }
  }
}
.live_all {
  .live_title {
    background-color: #2a88f3;
    color: #fff;
    font-size: 18px;
  }
  .live_title:hover {
    cursor: pointer;
  }
  .live_title_span {
    margin: 10px 15px;
  }
  .live_title_i {
    margin: 10px 15px;
  }
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
.footer_content {
  padding: 16px 16px;
  background-color: #fff;
  border-radius: 15px;
}
.boxshadow {
  box-shadow: 1px 4px 1px 1px #d2d2d2;
}
.footerclick {
  color: #1a90fc;
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
.morespan {
  color: #a9a9a9;
  font-size: 16px;
  line-height: 30px;
}
.gametype_div {
  line-height: 22px;
  margin-left: 35px;
  .gametype {
    width: 38px;
    height: 22px;
    line-height: 22px;
    background-image: url("../../image/liveclass.png");
    background-size: 100%;
    text-align: center;
    color: #fff;
  }
  .gametype1 {
    width: 38px;
    height: 22px;
    line-height: 22px;
    color: #a9a9a9;
    text-align: center;
  }
}
.livecontent {
  width: 1152px;
  margin: 0 25px;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #848484;
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
      background-image: url("../../image/news/ana.png");
      background-size: 100%;
      width: 20px;
      height: 20px;
    }
  }
  .anadiv:hover {
    color: #01c029;
    .anaimg {
      background-image: url("../../image/news/ana1.png");
    }
  }
  .indnxdiv {
    font-size: 14px;
    color: #848484;
    display: flex;
    align-items: center;
    margin-left: 20px;
    .indeximg {
      background-image: url("../../image/news/index.png");
      background-size: 100%;
      width: 20px;
      height: 20px;
    }
  }
  .indnxdiv:hover {
    color: #fe6102;
    .indeximg {
      background-image: url("../../image/news/index1.png");
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
    background-image: url("../../image/news/liveicon.png");
    background-size: 100%;
    margin: 0 10px;
  }
  .liveicon:hover {
    background-image: url("../../image/news/liveicon1.png");
  }
  .hqlive {
    font-size: 14px;
    width: 76px;
    text-align: center;
    color: #014681;
  }
}
.live_all .livecontent:nth-child(2n-1) {
  background-color: #f8f9f9;
}
.time_class {
  height: 46px;
  line-height: 46px;
  margin: 14px 85px;
  border: 1px solid #848484;
}
.buttonList_div{
  margin: 0 50px;
}
.buttonList_span {
  width: 75px;
  height: 35px;
  line-height: 16px;
  text-align: center;
  margin: 5px 15px;
  color: #a7a7a7;
  border-radius: 5px;
}
.buttonList_span:hover{
  color: #014681;
  background-color: #e1f1fe;
}
</style>