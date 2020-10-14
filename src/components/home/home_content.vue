<template>
  <div class="home_content">
    <div class="swp">
      <el-carousel height="300px">
        <el-carousel-item
          v-for="(item, key, index) in swiperdata"
          :key="key + item.id"
        >
          <img :src="item.src" alt="" class="swiper_img" />
        </el-carousel-item>
      </el-carousel>
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
    };
  },
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
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
.swiper_img {
  width: 100%;
}
</style>