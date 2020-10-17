<template>
  <div class="new cl">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="new_content left">
      <div>
        <div class="search">
          <input
            type="text"
            placeholder="搜话题、用户、新闻"
            v-model="searchmsg"
            v-on:keyup.enter="sousuo()"
          />
          <img
            src="../../image/sousuo.png"
            alt=""
            class="sousuo"
            @click="sousuo()"
          />
        </div>
        <div class="cl news_header">
          <div
            class="news_header_menu left"
            v-for="(item, index) in newsClass"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
        <div
          class="news_content cl"
          v-for="(item, index) in newsdata"
          :key="index"
          @click="gotonewsdel(item)"
        >
          <div class="left img_div">
            <img :src="item.imgsrc" alt="" class="news_img" />
          </div>
          <div class="left news_content_right">
            <div class="news_title">
              {{ item.title }}
            </div>
            <div class="news_content_right_bottom">
              <span class="newstype">{{ item.newstype }}</span>
              <span class="newstime"> {{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="(item, index) in swpList" :key="index">
            <div class="swp">
              <img :src="item.imgsrc" alt="" />
              <div class="newstitle">{{ item.newstitle }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <newslive></newslive>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const livemenu = () => import("../../components/live/livemenu");
const newslive = () => import("../../components/new/newslive");
export default {
  data() {
    return {
      headerKey: "3",
      searchmsg: "",
      newsClass: [
        {
          name: "西甲",
        },
        {
          name: "中超",
        },
        {
          name: "西甲",
        },
        {
          name: "中超",
        },
        {
          name: "西甲",
        },
        {
          name: "中超",
        },
        {
          name: "西甲",
        },
        {
          name: "中超",
        },
        {
          name: "西甲",
        },
        {
          name: "中超",
        },
      ],
      newsdata: [
        {
          imgsrc: require("../../image/news.jpeg"),
          title: "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
          newstype: "国际新闻",
          time: "10.20",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          title: "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
          newstype: "国际新闻",
          time: "10.20",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          title: "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
          newstype: "国际新闻",
          time: "10.20",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          title: "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
          newstype: "国际新闻",
          time: "10.20",
        },
      ],
      swpList: [
        {
          imgsrc: require("../../image/news.jpeg"),
          newstitle:
            "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          newstitle:
            "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          newstitle:
            "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
        },
        {
          imgsrc: require("../../image/news.jpeg"),
          newstitle:
            "秋冬季疫情风险是否加大？个人如何做好防护？——中国疾控中心专",
        },
      ],
    };
  },
  methods: {
    gotonewsdel(e) {
      this.$router.push({
        path: "/newdel",
      });
      this.$store.commit("newsList", e);
    },
    sousuo() {
      console.log(this.searchmsg);
    },
  },
  computed: {
    name() {
      return this.data;
    },
  },
  components: {
    livemenu,
    home_herder,
    newslive,
  },
};
</script>

<style lang="less" scoped>
.new_content {
  width: 69%;
  .search {
    display: inline-block;
    margin: 20px 30px;
    position: relative;
    input {
      width: 300px;
      height: 40px;
      border-radius: 5px;
    }
    .sousuo {
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}
.news_header {
  font-size: 18px;
  color: #fff;
  background-color: #2a3783;
  padding-left: 30px;
  .news_header_menu {
    padding: 5px 10px;
    cursor: pointer;
  }
}
.news_content {
  padding: 20px 0;
  border-bottom: 1px solid #999999;
  .img_div {
    width: 20%;
    .news_img {
      width: 100%;
    }
  }
  .news_content_right {
    padding: 10px 20px;
  }
  .news_title {
    font-size: 20px;
    height: 100px;
  }
  .news_content_right_bottom {
    font-size: 16px;
  }
  .newstype {
    color: #2a3783;
    border: 1px solid #2a3783;
    padding: 5px 10px;
  }
  .newstime {
    margin-left: 50px;
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
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.newslive {
  width: 18%;
  padding: 20px;
}
.swp {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .newstitle {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 18px;
    color: #ffffff;
    padding: 0 10px;
  }
}
</style>