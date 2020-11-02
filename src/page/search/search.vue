<template>
  <div id="search">
    <home_herder></home_herder>
    <div class="search_content boxshadow">
      <div class="no1searchheader">搜索结果</div>
      <div class="keywords_div cl">
        <div class="left">关键词：</div>
        <input type="text" class="keywords_input left" />
        <div class="no1searchbtn left cl"  @click="changeoption()">
          <div class="left" ></div>
          搜索
        </div>
      </div>
      <div class="search_type_div cl">
        <div class="left">类型：</div>
        <div
          :class="
            item.id == search_type
              ? 'left search_type search_type_click cu'
              : 'left search_type cu'
          "
          v-for="(item, index) in searchtype"
          :key="item.id"
          @click="changesearch_type(item.id)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="bankuai cl">
        <div class="left">板块：</div>
        <el-select v-model="value" clearable placeholder="请选择" class="left">
          <el-option
            v-for="(item, index) in totalList"
            :key="item.id"
            :label="item.ch_name"
            :value="item.id"
            
          >
          </el-option>
        </el-select>
      </div>
      <div class="Sort cl">
        <div class="left">排序：</div>
        <div class="Sort_class">
          <el-radio
            v-for="(item, index) in selectdata"
            :key="index"
            v-model="radio"
            :label="item.id"
            size="medium"
            >{{ item.label }}</el-radio
          >
        </div>
      </div>
      <div class="search_results">搜索结果：显示条，用时秒</div>
      <div class="search_results_content">
        <div class="cl content_title_div">
          <div class="left title">贴子标题</div>
          <div class="left plate">板块</div>
          <div class="left announcer">发布者</div>
          <div class="left release_time">发布时间</div>
          <div class="left last_time">最后回复时间</div>
          <div class="left replynum">回复数</div>
          <div class="left viewing_num">浏览数</div>
        </div>
        <div class="search_data cl" v-for="(item, index) in searchdata"></div>
      </div>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
export default {
  data() {
    return {
      searchtype: [
        {
          id: 1,
          name: "新闻",
        },
        {
          id: 2,
          name: "话题",
        },
        {
          id: 3,
          name: "用户",
        },
      ],
      value: "",
      search_type: 1,
      radio: "1",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      selectdata: [
        {
          id: "1",
          label: "综合排序",
        },
        {
          id: "2",
          label: "按发布时间排序",
        },
        {
          id: "3",
          label: "按回复时间排序",
        },
        {
          id: "4",
          label: "按回复数排序",
        },
        {
          id: "5",
          label: "按浏览数排序",
        },
      ],
      searchdata: [],
      totalList: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    changesearch_type(id) {
      this.search_type = id;
      this.value= ''
      this.$api.attchanelist
        .attchanel({
          type: id,
        })
        .then((res) => {
          let { code, msg } = res.data;
          if (code == -1 && msg == "token过期") {
            console.log(code);
            this.$message({
              message: "想要查看完整功能请登录",
              type: "warning",
            });
          } else if (code == 0) {
            let { channel, user_followed_id } = res.data.params;
            let totalList = channel[1].concat(channel[2], channel[3]);
            this.totalList = totalList;
            console.log(totalList);
          }
        });
    },
    changeoption(){
        console.log(this.value)
    }
  },
  components: {
    home_herder,
  },
};
</script>

<style lang="less" scoped>
#search {
  background-image: url("../../image/bj.jpg");
  background-size: 100%;
  font-size: 14px;
}
.search_content {
  width: 1294px;
  margin: 5px auto;
  padding-top: 52px;
  background-color: #fff;
  .no1searchheader {
    font-size: 22px;
    color: #014681;
    padding-left: 15px;
    border-left: 3px solid #014681;
    margin-left: 40px;
  }
  .keywords_div {
    line-height: 50px;
    margin: 24px 0 0 82px;
    font-size: 20px;
    display: flex;
    align-items: center;
    .keywords_input {
      width: 400px;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      border: 1px solid #555;
      margin: 0 20px;
    }
    .no1searchbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: #01a0fc;
      color: #fff;
      width: 87px;
      text-align: center;
      border-radius: 5px;
      div {
        width: 32px;
        height: 32px;
        background-image: url("../../image/sousuo.png");
        background-size: 100%;
      }
    }
  }
  .search_type_div {
    font-size: 20px;
    text-align: center;
    margin: 11px 0 11px 104px;
    line-height: 48px;
    .search_type {
      padding: 0 40px;
      margin: 0 10px;
      border-radius: 5px;
      background-color: #dedede;
      color: #555;
    }
    .search_type_click {
      background-color: #1090fc;
      color: #fff;
    }
  }
  .bankuai {
    font-size: 20px;
    margin: 11px 0 11px 104px;
  }
  .Sort {
    font-size: 20px;
    margin: 11px 0 11px 104px;
    .Sort_class {
      font-size: 22px;
    }
  }
  .search_results {
    font-size: 22px;
    color: #014681;
    padding-left: 15px;
    margin: 40px 0 30px 40px;
    border-left: 3px solid #014581;
  }
  .search_results_content {
    .content_title_div {
      line-height: 60px;
      color: #333;
      text-align: center;
      background-color: #e1f1fe;
      width: 1212px;
      margin: 0 auto;
      border-bottom: 1px solid #555;
      div {
        color: #555;
      }
      .title {
        width: 300px;
      }
      .plate {
        width: 135px;
      }
      .announcer {
        width: 135px;
      }
      .release_time {
        width: 179px;
      }
      .last_time {
        width: 179px;
      }
      .replynum {
        width: 135px;
      }
      .viewing_num {
        width: 135px;
      }
    }
  }
}
</style>