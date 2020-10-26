<template>
  <div>
    <div class="header cl">
      <div class="left">
        <div class="header_column">
          <img src="../../image/news/sicon.png" alt="" class="sicon" />
          <img
            :src="item.clicktype ? item.imgsrc1 : item.imgsrc"
            v-for="(item, key, index) in liveList"
            :key="item.id"
            @click="changetype(key)"
            alt=""
            class="cu siconimg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      liveListflag: 0,
    };
  },
  methods: {
    //中间切换足球、篮球种类的
    changetype(index) {
      let data = this.liveList;
      this.$store.commit("liveheader", index);
      for (let i = 0; i < data.length; i++) {
        if (i == index) {
          data[i].clicktype = true;
        } else {
          data[i].clicktype = false;
        }
      }
      this.$router.push("/live");
    },
  },
  computed: {
    ...mapState(["liveheader"]),
  },
  created () {
     this.changetype(this.liveheader);
  },
};
</script>

<style lang="less" scoped>
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
</style>