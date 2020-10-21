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
            class="playnum cu left"
            @click="changetype(item.id)"
          >
            {{ item.playnum }}
          </div>
        </div>
        <!-- 直播分类 -->
        <div class="liveclass">
          <div class="liveclass_header">
            <img src="../../image/news/sort.png" alt="" />
            直播分类
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
                class="playnum cu left"
                @click="changetype(item.id)"
              >
                {{ item.playname }}
              </div>
            </div>
            <div class="cu">
              <div class="lookmore"></div>
            </div>
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
                class="playnum cu left"
                @click="changetype1(item.id)"
              >
                {{ item.playname }}
              </div>
            </div>
            <div class="cu">
              <div class="lookmore"></div>
            </div>
          </div>
        </div>
        <!-- 综合 -->
        <div>
          <div class="footerclass_header cu">
            <div>综合</div>
            <div
              :class="
                isCollapse
                  ? 'footerclass_header_img'
                  : 'footerclass_header_img1'
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylike: [
        {
          id: 1,
          playtype: 1,
          playnum: "英超",
        },
        {
          id: 2,
          playtype: 2,
          playnum: "NBA",
        },
        {
          id: 3,
          playtype: 3,
          playnum: "CBA",
        },
        {
          id: 4,
          playtype: 4,
          playnum: "NBA",
        },
        {
          id: 5,
          playtype: 5,
          playnum: "CBA",
        },
      ],
      footData: [
        {
          id: 1,
          playname: "西甲",
        },
        {
          id: 2,
          playname: "意甲",
        },
        {
          id: 3,
          playname: "国足",
        },
        {
          id: 4,
          playname: "英超",
        },
      ],
      footdataflag: false,
      backetballdata: [
        {
          id: 1,
          playname: "NBA",
        },
        {
          id: 2,
          playname: "CBA",
        },
      ],
      bbflag: false,
      isCollapse: true,
    };
  },
  methods: {
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
    changetype1(id) {
      this.$emit("changetype", id);
    },
    gotoattention() {
      this.$router.push("/person/attention");
    },
    changetype(id) {
      this.$emit("changetype", id);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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