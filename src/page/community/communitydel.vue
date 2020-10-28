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
    };
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
        right: 20px;
        margin: auto;
      }
      .sousuodiv:hover {
        background-image: url("../../image/news/sousuo1.png");
      }
    }
  }
}
</style>