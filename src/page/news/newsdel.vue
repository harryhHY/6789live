<template>
  <div class="cl newsdel">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="newsdel_content boxshadow left">
      <div class="banner">
        <img src="" alt="" />
      </div>
      <div class="title_div cl">
        <div class="newstype1 left">
          {{ newsList.newstype1 }}
        </div>
        <div class="title left">
          {{ newsList.title }}
        </div>
      </div>
      <div class="cl title_bottom">
        <div class="left">6789直播</div>
        <div class="left title_bottom_time">{{ newsList.time }}</div>
        <div class="left share_div">
          <img src="../../image/news/share.png" alt="" />
          分享到
          <img src="../../image/news/shareicon1.png" alt="" />
          <img src="../../image/news/shareicon2.png" alt="" />
          <img src="../../image/news/shareicon3.png" alt="" />
          <img src="../../image/news/shareicon4.png" alt="" />
        </div>
        <div class="cl right title_bottom_right">
          <div class="cl favorites_div left cu">
            <div class="favorites_img left"></div>
            <div class="left favorites">收藏</div>
          </div>
          <div class="cl comment_div left cu">
            <div class="comment_img left"></div>
            <div class="comment left">评论</div>
          </div>
          <div class="cl report_div left cu">
            <div class="report_img left"></div>
            <div class="report left">举报</div>
          </div>
        </div>
      </div>
      <div></div>
      <div class="interaction">
        <div class="access_header">
          <img
            src="../../image/news/sicon.png"
            alt=""
            class="access_header_img"
          />
          <span class="access"> 最近访问 </span>
        </div>
        <div class="showavatar_div cl">
          <div
            v-for="(item, index) in accessList"
            :key="index"
            class="showavatar left cu"
          >
            <img :src="item.avatar" alt="" class="showavatar_img" />
            <div>
              {{ item.name }}
            </div>
            <div>
              {{ item.time }}
            </div>
          </div>
        </div>
        <div class="access_header comment_content">
          <img
            src="../../image/news/sicon.png"
            alt=""
            class="access_header_img"
          />
          <span class="access"> 评论 </span>
          <span class="remind">文明上网理性发言，请遵守新闻评论服务协议</span>
        </div>
      </div>
    </div>
    <newslive></newslive>
  </div>
</template>

<script>
import { mapState } from "vuex";
const home_herder = () => import("../../components/home/home_herder");
const livemenu = () => import("../../components/live/livemenu");
const newslive = () => import("../../components/new/newslive");
import DPlayer from "dplayer";
export default {
  data() {
    return {
      newstitle: "",
      headerKey: "3",
      querydata: "",
      videosrc: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
      accessList: [
        {
          avatar: require("../../image/team.jpg"),
          name: "张三",
          time: "10.20",
        },
        {
          avatar: require("../../image/team.jpg"),
          name: "张三",
          time: "10.20",
        },
        {
          avatar: require("../../image/team.jpg"),
          name: "张三",
          time: "10.20",
        },
        {
          avatar: require("../../image/team.jpg"),
          name: "张三",
          time: "10.20",
        },
        {
          avatar: require("../../image/team.jpg"),
          name: "张三",
          time: "10.20",
        },
      ],
    };
  },
  methods: {
    getrouterdata() {},
  },
  components: {
    home_herder,
    livemenu,
    newslive,
  },
  created() {
    this.getrouterdata();
  },
  computed: {
    ...mapState(["newsList"]),
  },
  mounted() {
    console.log(this.newsList);
    // const dp = new DPlayer({
    //   container: document.getElementById("dplayer"),
    //   video: {
    //     url: this.videosrc,
    //   },
    // });
  },
};
</script>

<style lang="less" scoped>
.newsdel_content {
  font-size: 14px;
  margin-left: 29px;
  margin-top: 7px;
  background-color: #ffffff;
  .banner {
    width: 1112px;
    height: 97px;
    margin: 18px 17px;
  }
  .newsdel_body {
  }
  .title_div {
    font-size: 24px;
    margin-top: 27px;
    display: flex;
    align-items: center;
    .newstype1 {
      background-image: url("../../image/liveclass.png");
      background-size: 100%;
      background-repeat: no-repeat;
      font-size: 14px;
      margin: 0 5px 0 58px;
      width: 38px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
    }
  }
  .title_bottom {
    font-size: 16px;
    margin: 14px 0 0 107px;
    .title_bottom_time {
      color: #848484;
      margin-left: 26px;
    }
  }
  .share_div {
    display: flex;
    align-items: center;
    img {
      margin: 0 3px;
    }
  }
  .title_bottom_right {
    font-size: 14px;
    color: #848484;
    margin-right: 40px;
  }
  .favorites_div {
    .favorites_img {
      background-image: url("../../image/news/favorites.png");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 18px;
      height: 17px;
    }
  }
  .favorites_div:hover .favorites_img {
    background-image: url("../../image/news/favorites1.png");
  }
  .favorites_div:hover .favorites {
    color: #1a90fc;
  }
  .comment_img {
    background-image: url("../../image/news/comment.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 18px;
    height: 17px;
  }
  .comment_div:hover .comment_img {
    background-image: url("../../image/news/comment1.png");
  }
  .comment_div:hover .comment {
    color: #1a90fc;
  }
  .report_img {
    background-image: url("../../image/news/report.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 18px;
    height: 17px;
  }
  .report_div:hover .report_img {
    background-image: url("../../image/news/report1.png");
  }
  .report_div:hover .report {
    color: #1a90fc;
  }
  .favorites_div,
  .comment_div,
  .report_div {
    margin-left: 37px;
  }
}
.interaction {
  .access_header {
    display: flex;
    margin-left: 49px;
    align-items: center;
    border-bottom: 1px solid #ececec;
    .access_header_img {
      width: 33px;
      height: 50px;
    }
    .access {
      font-size: 22px;
      color: #848484;
    }
  }
}
.showavatar_div {
  margin-left: 47px;
  padding-left: 70px;
  border-bottom: 1px solid #848484;
  text-align: center;
  color: #848484;
  font-size: 14px;
  .showavatar_img {
    width: 70px;
    height: 70px;
  }
}
.comment_content{
  margin-top: 30px;
  .remind{
    color: #848484;
    font-size: 14px;
    margin:9px 0 0 5px;
  }
}
</style>