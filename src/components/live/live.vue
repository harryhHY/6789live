<template>
  <div id="live" class="cl">
    <home_herder :headerKey='headerKey'></home_herder>
    <livemenu @changetype="pve" />
    <div class="live_content left">
      <div class="header cl">
        <div class="left">
          <div
            v-for="(item, key, index) in liveList"
            :key="item.id"
            :class="
              item.clicktype ? 'playdata left selected' : 'playdata left '
            "
            @click="changetype(item.id, key)"
          >
            {{ item.playdata }}
          </div>
        </div>
        <div class="right">
          <img src="../../image/live.png" alt="" />
        </div>
      </div>
      <div>
        <div v-for="(item, index) in liveclass" class="playname">
          {{ item.name }}
        </div>
      </div>
      <div class="live_all">
        <div v-for="(item, index) in buttonList" :key="index" class="">
          <div class="live_title cl" @click="todaylive(index)">
            <span class="left live_title_span">
              {{ item.text + liveList[check].playdata + "节目列表" }}
            </span>
            <i
              :class="[
                item.isRotate
                  ? 'el-icon-arrow-down right rotate  live_title_i'
                  : 'el-icon-arrow-down right rotate1 live_title_i',
              ]"
            ></i>
          </div>
          <div v-if="buttonList[index].isRotate">
            <div
              v-for="(item, index) in livedata"
              :key="index"
              class="centerimg gamecontent"
              @click="gotolive()"
            >
              <img :src="item.aicon" alt="" />
              {{ item.aname }} Vs {{ item.bname }}
              <img :src="item.bicon" alt="" />
            </div>
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
          clicktype: true,
        },
        {
          id: 2,
          playdata: "篮球",
          clicktype: false,
        },
      ],
      liveclass: [
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
      buttonList: [
        {
          value: 0,
          text: "",
          isRotate: true,
        },
        {
          value: 1,
          text: "",
          isRotate: false,
        },
        {
          value: 2,
          text: "",
          isRotate: false,
        },
      ],
      livedata: [
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
        {
          time: "10:20",
          aicon: require("../../image/logo.png"),
          aname: "哥伦甲-圣塔菲",
          bicon: require("../../image/logo.png"),
          bname: "拉伊奎达德",
        },
      ],
      check: 0,
      headerKey:'2'
    };
  },
  methods: {
    //跳转直播页面
    gotolive() {
      this.$router.push("Livedel");
    },
    //查看所选日期直播
    todaylive(index) {
      let data = this.buttonList;
      for (let i = 0; i < data.length; i++) {
        if (index == i) {
          data[i].isRotate = !data[i].isRotate;
        }
      }
      this.buttonList = data;
    },
    // 左边直播分类传过来的值
    pve(e) {
      console.log(e);
    },
    //中间切换足球、篮球种类的
    changetype(id, index) {
      let data = this.liveList;
      console.log(index);
      for (let i = 0; i < data.length; i++) {
        if (i == index) {
          data[i].clicktype = true;
        } else {
          data[i].clicktype = false;
        }
      }
      this.check = index;
    },
    //日期函数
    getDate1(num) {
      let myDate = new Date();
      let m = myDate.getMonth() + 1;
      let r = myDate.getDate() + num;
      return `${m}月${r}日`;
    },
    //循环出多日期
    changeButtonList() {
      let buttonList = this.buttonList;
      console.log(buttonList);
      let list = [];
      for (let v = 0; v < 3; v++) {
        let nowdate = this.getDate1(v);
        list.push(nowdate);
      }
      // this.getDate1();
      for (let i = 0; i < 3; i++) {
        buttonList[i].text = list[i];
      }
      this.buttonList = buttonList;
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
.playname {
  display: inline-block;
  font-size: 17px;
  padding: 5px 10px;
  color: #2a88f3;
}
.live_content {
  width: 69%;
}
.header {
  line-height: 50px;
  font-size: 20px;
  padding-left: 30px;
  .playdata {
    padding: 0 20px;
  }
  .playdata:hover {
    cursor: pointer;
  }
  .selected {
    color: #2a88f3;
    border-bottom: 1px solid #2a88f3;
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
.playname:hover {
  cursor: pointer;
}
.gamecontent {
  cursor: pointer;
}
</style>