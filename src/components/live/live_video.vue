<template>
  <div class="live_video boxshadow left cl" id="live_video">
    <div class="header_div">
      <div class="header">
        {{ title }}
      </div>
    </div>
    <div>
      <div
        v-for="(item, key, index) in videoData"
        :key="item.id"
        @click="gotovideo(item.id)"
        class="videotitle_div cu"
      >
        <div class="videotype left">
          {{ item.videotype }}
        </div>
        <div class="videotitle left ov">
          {{ item.videotitle }}
        </div>
      </div>
      <div class="lookmore cu">
        查看更多视频
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "足球视频精选",
      videoData: [
        {
          id: 1,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 2,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 3,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 4,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 5,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 6,
          videotype: "西甲板块",
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
      ],
    };
  },
  methods: {
    gotovideo(id) {
      this.$router.push("/newdel");
      this.$store.commit("newsList", id);
      console.log(id);
    },
  },
};
</script>

<style lang="less" scoped>
.live_video {
  width: 325px;
  margin-left: 7px;
  background-color: #fff;
  border-top: 3px solid #1a90fc;
  border-radius: 5px;
  margin-top: 57px;
  .header_div {
    padding-bottom: 10px;
    border-bottom: 1px solid #848484;
    margin: 0 10px;
  }
  .header {
    font-size: 16px;
    color: #1a90fc;
    margin-left: 10px;
    margin-top: 8px;
    padding-left: 10px;

    border-left: 5px solid #014681;
  }
  .videotype {
    width: 62px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    margin: 6px 7px 6px 19px;
    border: 1px solid #848484;
  }
  .videotitle {
    width: 224px;
  }
  .videotitle:hover {
    cursor: pointer;
  }
  .videotitle_div {
    color: #848484;
    display: flex;
    align-items: center;
    height: 35px;
  }
  .videotitle_div:hover {
    color: #1a90fc;
  }
  .videotitle_div:hover .videotype {
    border: 1px solid #1a90fc;
  }
  .lookmore{
    color: #1a90fc;
    border: 1px solid #1a90fc;
    width: 128px;
    height: 30px;
    margin: 19px auto;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
  }
  .boxshadow{
      box-shadow: 1px 4px 1px 1px #d2d2d2;
  }
}
</style>