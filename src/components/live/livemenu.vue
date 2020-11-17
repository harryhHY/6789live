<template>
  <div class="livemenu left cl">
    <div class="live_class">
      <div class="my_attention">
        <!-- 我的关注 -->
        <div class="my_attention_header cl" @click="gotoattention()">
          <img
            src="../../image/news/attention.png"
            alt=""
            class="attention_img"
          />
          <span class="">我的关注</span>
        </div>
        <div class="mylike cl">
          <div
            v-for="(item, key, index) in mylike"
            :key="item.id"
            :class="
              highlight == item.id
                ? 'playnum1  cu left ov'
                : 'playnum cu left ov'
            "
            @click="changetype1(item.ch_columnm, item.id, item)"
          >
            {{ item.ch_name }}
          </div>
        </div>
        <!-- 直播分类 -->
        <div class="liveclass">
          <div class="liveclass_header">
            <img src="../../image/news/sort.png" alt="" />
            {{ menutitle }}
          </div>
        </div>
        <!-- 足球 -->
        <div class="footerclass">
          <div
            class="footerclass_header cu"
            @click="changebbkUnfold(1, footdataflag)"
          >
            <div>足球</div>
            <div
              :class="
                footdataflag
                  ? 'footerclass_header_img'
                  : 'footerclass_header_img1'
              "
            ></div>
          </div>
          <div class="cl mylike" v-if="!footdataflag">
            <div class="cl">
              <div
                v-for="(item, index) in footData"
                :key="item.id"
                :class="
                  highlight == item.id
                    ? 'playnum1  cu left ov'
                    : 'playnum cu left ov'
                "
                @click="changetype1(item.ch_columnm, item.id, item)"
              >
                {{ item.ch_name }}
              </div>
            </div>
            <!-- <div class="cu">
              <div class="lookmore"></div>
            </div> -->
          </div>
        </div>
        <!-- 篮球 -->
        <div>
          <div
            class="footerclass_header cu"
            @click="changebbkUnfold(2, bbflag)"
          >
            <div>篮球</div>
            <div
              :class="
                bbflag ? 'footerclass_header_img' : 'footerclass_header_img1'
              "
            ></div>
          </div>
          <div class="cl mylike" v-if="!bbflag">
            <div class="cl">
              <div
                v-for="(item, index) in backetballdata"
                :key="item.id"
                :class="
                  highlight == item.id
                    ? 'playnum1  cu left ov'
                    : 'playnum cu left ov'
                "
                @click="changetype1(item.ch_columnm, item.id, item)"
              >
                {{ item.ch_name }}
              </div>
            </div>
            <!-- <div class="cu">
              <div class="lookmore"></div>
            </div> -->
          </div>
        </div>
        <!-- 综合 -->
        <div>
          <div
            class="footerclass_header cu"
            @click="changebbkUnfold(3, isCollapse)"
          >
            <div>综合</div>
            <div
              :class="
                isCollapse
                  ? 'footerclass_header_img'
                  : 'footerclass_header_img1'
              "
            ></div>
          </div>
          <div class="cl mylike" v-if="!isCollapse">
            <div class="cl" v-if="!isCollapse">
              <div
                v-for="(item, index) in Collapsedata"
                :key="item.id"
                :class="
                  highlight == item.id
                    ? 'playnum1  cu left ov'
                    : 'playnum cu left ov'
                "
                @click="changetype1(item.ch_columnm, item.id, item)"
              >
                {{ item.ch_name }}
              </div>
            </div>
            <!-- <div class="cu">
              <div class="lookmore"></div>
            </div> -->
          </div>
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
      mylike: [], //我的关注
      footData: [], //足球
      footdataflag: false,
      backetballdata: [], //篮球
      bbflag: false,
      Collapsedata: [], //综合
      isCollapse: false,
      menutitle: "", //菜单标题
      totalData: [], //所有的栏目
      highlight: "",
    };
  },
  methods: {
    getlivemenu() {
      //获取关注列表
      console.log(this.$route.path);
      let type1 = 0;
      switch (this.$route.name) {
        case "Live":
          type1 = 1;
          this.menutitle = "直播分类";
          break;
        case "Livedel":
          type1 = 1;
          this.menutitle = "直播分类";
          break;
        case "New":
          type1 = 2;
          this.menutitle = "新闻分类";
          break;
        case "Newdel":
          type1 = 2;
          this.menutitle = "新闻分类";
          break;
        case "Community":
          type1 = 3;
          this.menutitle = "社区分类";
          break;
        case "Communitydel":
          type1 = 3;
          this.menutitle = "社区分类";
          break;
        case "Postdetails":
          type1 = 3;
          this.menutitle = "社区分类";
          break;
      }
      this.$api.attchanelist
        .attchanel({
          type: type1,
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
            if (channel[1]) {
              this.footData = channel[1];
            }
            if (channel[2]) {
              this.backetballdata = channel[2];
            }
            if (channel[3]) {
              this.Collapsedata = channel[3];
            }

            this.$store.commit("menufootData", this.footData);
            this.$store.commit("menubacketballdata", this.backetballdata);
            this.$store.commit("menucomplexdata", this.Collapsedata);

            let likelist = [];
            let newarr = [];
            let totalList = this.backetballdata.concat(
              this.footData,
              this.Collapsedata
            );
            this.totalData = totalList;
            totalList.map((item) => {
              newarr.push({ item });
            });
            user_followed_id.filter((item) => {
              newarr.map((it) => {
                if (it.item.id == item) {
                  likelist.push(it.item);
                }
              });
            });
            this.$store.commit("menulike", likelist);
            this.mylike = likelist;
          }
        });
    },
    //是否收齐直播栏目
    changebbkUnfold(id, even) {
      switch (id) {
        case 1:
          this.footdataflag = !even;
          break;
        case 2:
          this.bbflag = !even;
          break;
        case 3:
          this.isCollapse = !even;
          break;
      }
    },
    //点击左边菜单 触发的事件
    changetype1(clid, id, item) {
      switch (this.$route.name) {
        case "Live":
          this.$store.commit("liveheader", clid - 1);
          this.$emit("changetype", clid, id);
          break;
        case "Livedel":
          this.$router.push("/live");
          this.$store.commit("liveheader", clid - 1);
          this.$emit("changetype", clid, id);
          break;
        case "New":
          this.$emit("changenewstype", id);
          break;
        case "Newdel":
          this.$router.push("/new");
          this.$emit("changenewstype", id);
          break;
        case "Community":
          this.$router.push("/communitydel");
          this.$store.commit("communitydel", item);
          break;
        case "Communitydel":
          console.log(item);
          this.$store.commit("communitydel", item);
          break;
        case "Postdetails":
          this.$router.push("/communitydel");
          this.$store.commit("communitydel", item);
          break;
      }
      for (let i = 0; i < this.totalData.length; i++) {
        if (this.totalData[i].id == id) {
          this.highlight = id;
        }
      }
    },
    //去个人关注设置
    gotoattention() {
      this.$router.push("/person/attention");
    },
  },
  computed: {
    ...mapState(["menucomplexdata"]),
  },
  created() {
    this.getlivemenu();
  },
};
</script>

<style lang="less" scoped>
.livemenu {
  width: 279px;
  margin-top: -24px;
  background-image: url("../../image/news/leftbg.png");
  background-size: 100%;
  height: 1027px;
  .mylike {
    margin: 19px 25px 0 25px;
  }
  .my_attention_header {
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-top: 36px;
    margin-left: 23px;
    font-size: 18px;
    .attention_img {
      width: 24px;
      height: 24px;
    }
  }
  .playnum {
    line-height: 23px;
    width: 66px;
    text-align: center;
    background-color: #112a40;
    color: #205789;
    margin-top: 6px;
    margin-right: 6px;
    border-radius: 10px;
    font-size: 16px;
  }
  .playnum1 {
    background-color: #014681;
    color: #47a7ff;
    line-height: 23px;
    width: 66px;
    text-align: center;
    margin-top: 6px;
    margin-right: 6px;
    border-radius: 10px;
    font-size: 16px;
  }
  .playnum:hover {
    background-color: #014681;
    color: #47a7ff;
  }
  .clck {
    background-color: #014681;
    color: #47a7ff;
  }

  .liveclass {
    .liveclass_header {
      font-size: 18px;
      margin-top: 36px;
      color: #ffffff;
      display: flex;
      align-items: center;
      margin-left: 23px;
    }
  }
  .footerclass_header {
    font-size: 16px;
    background-color: #112a40;
    color: #1a90fc;
    width: 216px;
    height: 26px;
    line-height: 26px;
    margin: 12px auto;
    position: relative;
  }
  .footerclass_header_img {
    background-image: url("../../image/news/Unfold.png");
    background-size: 100%;
    position: absolute;
    width: 21px;
    height: 13px;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .footerclass_header_img1 {
    background-image: url("../../image/news/Unfold1.png");
    background-size: 100%;
    position: absolute;
    width: 21px;
    height: 13px;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .lookmore {
    width: 17px;
    height: 14px;
    margin: 19px auto;
    background-image: url("../../image/news/Unfoldicon.png");
    background-size: 100%;
  }
  .lookmore:hover {
    background-image: url("../../image/news/Unfoldicon1.png");
  }
}

.live_class {
  text-align: center;
  font-size: 20px;
  color: #fff;
  .setting_attention {
    cursor: pointer;
  }
}
.my_attention {
  width: 266px;
}
</style>