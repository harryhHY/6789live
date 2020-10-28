<template>
  <div class="communitydel cl">
    <home_herder :headerKey="headerKey"></home_herder>
    <livemenu></livemenu>
    <div class="communitydel_content boxshadow left">
      <div class="communitydel_header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/community' }"
            >社区</el-breadcrumb-item
          >
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="banner">
        <img src="../../image/bj.jpg" alt="" />
      </div>
      <div class="serach cl">
        <div class="cl right serach_div cu">
          <input
            type="text"
            class="serachinput right"
            placeholder="搜索热门话题"
          />
          <div class="sousuodiv"></div>
        </div>
      </div>
      <div class="communitydel_main">
        <div class="main_header cl">
          <div class="left">
            <img src="../../image/team.jpg" alt="" />
          </div>
          <div class="main_header_right left">
            <div class="cl">
              <div class="comm_header_type left">中国篮球</div>
              <div class="left joincom">+加入社区</div>
            </div>
            <div class="comm_num">
              今日发帖：100 / 昨日发帖： 135 / 总共累计发帖：215255
            </div>
            <div class="introduction">社区介绍：我们是地表最强</div>
          </div>
        </div>
        <div class="cl release_div">
          <div class="left release"></div>
          <div class="right pageination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="1"
              layout="prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
        <div class="main_data">
          <div class="main_title cl">
            <div class="left main_title_left cl">
              <div class="left news">最新</div>
              <div class="left news">热门</div>
              <div class="left news">精华</div>
              <div class="left news">发帖时间</div>
              <div class="left news">回复时间</div>
            </div>
            <div class="right main_title_right cl">
              <div class="author left">作者</div>
              <div class="replybrowse left">回复 / 浏览</div>
              <div class="left lastreply">最后回复</div>
            </div>
          </div>
          <div class="cl">
            <div
              v-for="(item, index) in commdata"
              :key="index"
              class="cl main_content"
              @click="gotopostdel()"
            >
              <div class="main_content_left left cl">
                <div class="cl left">
                  <div class="centerimg">
                    <div class="comm_type left"></div>
                    <div class="main_content_title left">
                      {{ item.title }}
                    </div>
                    <img src="../../image/cmm/imgs.png" alt="" />
                  </div>
                </div>
                <div class="main_content_del ov">详情：{{ item.comm_del }}</div>
              </div>
              <div class="main_content_right right cl">
                <div class="left main_content_right_author_div">
                  <div>{{ item.author }}</div>
                  <div class="c555">{{ item.time }}</div>
                </div>
                <div class="left main_content_right_reply_div">
                  <div>
                    {{ item.reply }}
                  </div>
                  <div class="c555">
                    {{ item.browse }}
                  </div>
                </div>
                <div class="left main_content_right_last_div">
                  <div>
                    {{ item.lastauthor }}
                  </div>
                  <div class="c555">
                    {{ item.lasttime }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="community_menu boxshadow left cl">
      <div class="community_menu_header">今日热门推荐</div>
      <div class="cl">
        <div class="community_menu_header_bot_left left"></div>
        <div class="community_menu_header_bot_right left"></div>
      </div>
      <div class="community_menu_main">
        <div
          class="cl com_menu_for"
          v-for="(item, index) in menudata"
          :key="index"
        >
          <div class="left menu_img">
            <img :src="item.imgsrc" alt="" />
          </div>
          <div class="left menu_type_div">
            <span class="menu_type">{{ item.type }}</span>
            {{ item.title }}
          </div>
          <div class="lookdel centerimg">
            查看详情
            <span></span>
          </div>
        </div>
        <div class="lookmorr">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const livemenu = () => import("../../components/live/livemenu");
export default {
  data() {
    return {
      headerKey: "4",
      commdata: [
        {
          commtype: 1,
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
          comm_del:
            "随着大陆称，整个世界都面临中国实现其民族复兴志向的挑战。对此，中国外交部发言人汪文斌28日在例行记者会上说，蓬佩奥声称的“中国威胁”，不过是“蓬氏谎言”的陈词滥调。",
          time: "2020.10.02",
          reply: "33",
          browse: "2223",
          lastauthor: "dagege",
          author: "dajj",
          lasttime: "20.20.20",
        },
        {
          commtype: 1,
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
          comm_del:
            "随着大陆称，整个世界都面临中国实现其民族复兴志向的挑战。对此，中国外交部发言人汪文斌28日在例行记者会上说，蓬佩奥声称的“中国威胁”，不过是“蓬氏谎言”的陈词滥调。",
          time: "2020.10.02",
          reply: "33",
          browse: "2223",
          lastauthor: "dagege",
          author: "dajj",
          lasttime: "20.20.20",
        },
        {
          commtype: 1,
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
          comm_del:
            "随着大陆称，整个世界都面临中国实现其民族复兴志向的挑战。对此，中国外交部发言人汪文斌28日在例行记者会上说，蓬佩奥声称的“中国威胁”，不过是“蓬氏谎言”的陈词滥调。",
          time: "2020.10.02",
          reply: "33",
          browse: "2223",
          lastauthor: "dagege",
          author: "dajj",
          lasttime: "20.20.20",
        },
      ],
      currentPage3: 5,
      menudata: [
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
        {
          type: "足球",
          imgsrc: require("../../image/news.jpeg"),
          title: "连续两场至少10篮板 张正月喜欢唱新歌",
        },
      ],
    };
  },
  methods: {
    gotopostdel() {
      this.$router.push("/postdetails");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  components: {
    home_herder,
    livemenu,
  },
};
</script>

<style lang="less" scoped>
.communitydel {
  background-image: url("../../image/bj.jpg");
  background-size: 100%;
  font-size: 14px;
  .communitydel_content {
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 48px;
    width: 1166px;
    .communitydel_header {
      margin-left: 19px;
      padding-left: 14px;
      border-left: 5px solid #014581;
      color: #555 !important;
      .el-breadcrumb {
        margin: 11px 0;
      }
      .el-breadcrumb__inner a,
      .el-breadcrumb__inner .is-link {
        color: #555 !important;
      }
    }
    .banner {
      margin: auto;
      width: 1060px;
      height: 120px;
      img {
        width: 1060px;
        height: 120px;
      }
    }
    .serach {
      height: 35px;
      margin: 7px 0;
      .serach_div {
        position: relative;
        margin-right: 81px;
      }
      .serachinput {
        width: 421px;
        height: 35px;
        background-color: #e1e2e4;
        padding-left: 10px;
        border: 1px solid #dedede;
        border-radius: 17px;
      }
      .sousuodiv {
        background-image: url("../../image/news/sousuo.png");
        background-size: 100%;
        width: 29px;
        height: 29px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
      }
      .sousuodiv:hover {
        background-image: url("../../image/news/sousuo1.png");
      }
    }
    .communitydel_main {
      .main_header {
        padding-bottom: 28px;
        margin-left: 34px;
        border-bottom: 1px solid #dedede;
        img {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          border: 1px solid #dedede;
          margin-left: 44px;
        }
        .main_header_right {
          .comm_header_type {
            font-size: 18px;
            color: #01a0fc;
            line-height: 30px;
          }
          .joincom {
            margin-left: 11px;
            line-height: 28px;
            font-size: 16px;
            color: #555;
            border: 1px solid #555;
            border-radius: 14px;
            width: 105px;
            text-align: center;
          }
          .comm_num,
          .introduction {
            color: #555;
            margin-left: 9px;
            line-height: 50px;
          }
        }
      }
      .release_div {
        margin: 18px 0 17px 0;
        .release {
          background-image: url("../../image/cmm/release.png");
          background-size: 100%;
          width: 113px;
          height: 39px;
          margin-left: 52px;
        }
        .pageination {
          margin-right: 35px;
        }
      }
      .main_data {
        margin: 0 35px;
        .main_title {
          color: #014581;
          background-color: #e1f1fe;
          padding-left: 20px;
          .main_title_left {
            .news {
              width: 68px;
              height: 44px;
              line-height: 44px;
              text-align: center;
            }
          }
          .main_title_right {
            line-height: 44px;
            text-align: center;
            .author {
              width: 152px;
            }
            .replybrowse {
              width: 133px;
            }
            .lastreply {
              width: 138px;
            }
          }
        }
        .main_content {
          padding: 28px 0 16px 18px;
          border-bottom: 1px solid #dedede;
          .main_content_left {
            width: 622px;
            .comm_type {
              width: 39px;
              height: 22px;
              background-image: url("../../image/cmm/top.png");
              background-size: 100%;
            }
            .main_content_title {
              font-size: 18px;
              line-height: 34px;
              height: 34px;
              margin: 0 10px;
            }
            .main_content_del {
              width: 552px;
              color: #555;
              padding-left: 50px;
              line-height: 25px;
            }
          }
          .main_content_right {
            .c555 {
              color: #555;
            }
            .main_content_right_author_div {
              width: 152px;
              line-height: 19px;
              text-align: center;
              .main_content_right_time {
                color: #555;
              }
            }
            .main_content_right_reply_div {
              width: 133px;
              line-height: 19px;
              text-align: center;
            }
            .main_content_right_last_div {
              width: 138px;
              line-height: 19px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .community_menu {
    width: 353px;
    margin-top: 20px;
    margin-left: 9px;
    padding: 0 11px;
    border-radius: 5px;
    background-color: #fff;
    border-top: 4px solid #01a0fc;
    .community_menu_header {
      margin: 18px 0;
      color: #01a0fc;
      padding-left: 11px;
      border-left: 5px solid #014581;
    }
    .community_menu_header_bot_left {
      height: 2px;
      width: 49%;
      margin-right: 2%;
      background-color: #01a0fc;
    }
    .community_menu_header_bot_right {
      height: 2px;
      width: 49%;
      background-color: #dedede;
    }
    .community_menu_main {
      .com_menu_for {
        position: relative;
        border-bottom: 1px solid #dedede;
        background-color: #fff;
      }
      .menu_img {
        margin: 11px 0;
        img {
          height: 73px;
          width: 115px;
        }
      }
      .menu_type_div {
        width: 220px;
        margin: 11px 8px;
        font-size: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //控制行数
        overflow: hidden;
      }
      .menu_type {
        background-image: url("../../image/liveclass.png");
        background-size: 100%;
        display: inline-block;
        width: 38px;
        height: 22px;
        font-size: 14px;
        color: #fff;
        line-height: 22px;
        text-align: center;
      }
      .lookdel {
        position: absolute;
        bottom: 15px;
        right: 10px;
        color: #555;
        span {
          display: inline-block;
          background-image: url("../../image/cmm/more.png");
          background-size: 100%;
          width: 14px;
          height: 11px;
        }
      }
      .com_menu_for:hover {
        background-color: #f8f9f9;
      }
      .com_menu_for:hover .lookdel {
        color: #01a0fc;
        span {
          background-image: url("../../image/cmm/more1.png");
        }
      }
      .lookmorr {
        color: #0190fc;
        border: 1px solid #0190fc;
        width: 125px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: 14px;
        margin: 24px auto;
      }
    }
  }
}
</style>