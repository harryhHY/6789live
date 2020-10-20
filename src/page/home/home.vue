<template>
  <div id="home">
    <home_herder @changetype="parentEvent" :headerKey="headerKey"></home_herder>
    <home_content />
    <div class="footer">
      <div>
        6789直播是国内最好的体育赛事直播网站之一，提供足球直播、篮球直播、世界杯直播、英超直播、NBA直播、CBA直播等,用心做最好的足球直播和NBA直播网站。
      </div>
      <div>
        直播吧所有内容均来自互联网包括：直播信号、视频录像均为由用户收集或从搜索引擎搜索整理所得，直播吧自身不提供任何直播信号、视频内容等，如有侵犯您的权益请您通知我们，我们第一时间处理，谢谢！
      </div>
      <div>版权所有</div>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const home_content = () => import("../../components/home/home_content");
const live = () => import("../../components/live/live");
export default {
  data() {
    return {
      menu_num: "1",
      component_name: "home_content",
      headerKey: "1",
    };
  },
  methods: {
    parentEvent(data) {
      this.menu_num = data;
    },
  },
  watch: {
    // menu_num(newValue, oldValue) {
    //   switch (newValue) {
    //     case "1":
    //       return (this.component_name = "home_content");
    //       break;
    //     case "2":
    //       return (this.component_name = "live");
    //       break;
    //     case "3":
    //       //   return (this.component_name = "live");
    //       break;
    //     case "4":
    //       console.log("这个是4");
    //       break;
    //   }
    // },
  },
  components: {
    home_herder,
    home_content,
    live,
  },
  created() {},
};
</script>

<style lang="less" scoped>
#home{
  background-image: url('../../image/bj.jpg');
  background-size: 100%;
}
  .footer {
    margin-top: 50px;
    font-size: 18px;
    line-height: 17px;
    text-align: center;
    div{
      padding: 7px 0;
    }
  }
</style>