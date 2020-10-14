<template>
  <div id="home">
    <home_herder @changetype="parentEvent"></home_herder>
    <div class="swp">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
export default {
  data() {
    return {
      menu_num: "1",
      swiperdata: [
        {
          id: 1,
        //   src: require("../../../static/image/logo"),
        },
      ],
    };
  },
  methods: {
    parentEvent(data) {
      this.menu_num = data;
    },
  },
  watch: {
    menu_num(newValue, oldValue) {
      switch (newValue) {
        case "1":
          console.log("这个是1");
          break;
        case "2":
          console.log("这个是2");
          break;
        case "3":
          console.log("这个是3");
          break;
        case "4":
          console.log("这个是4");
          break;
      }
    },
  },
  components: {
    home_herder,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.swp {
  width: 65%;
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
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>