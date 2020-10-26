<template>
  <div class="cl" id="exponent">
    <home_herder :headerKey="headerKey"></home_herder>
    <div class="exponent boxshadow">
      <analysisheader :checkmenutype="checkmenutype"></analysisheader>
      <div class="exponent_div">
        <div class="exponent_header cl">
          <div class="left select_div cu" @click="openValue">
            <span>{{ value }}</span>
            <img src="../../image/al/down.png" alt="" class="select_img" />
            <div class="opthings_div" v-show="show">
              <div
                v-for="(item, index) in tableData"
                :key="index"
                class="opthings cu"
                @click="changeopthings(item.name)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="left">共【3/17】家公司</div>
        </div>
        <div class="exponent_title cl">
          <div class="left w142">公司</div>
          <div class="left w187">独赢</div>
          <div class="left w184">更新时间</div>
          <div class="left w150">大小</div>
          <div class="left w169">更新时间</div>
          <div class="left w232">让球</div>
          <div class="left w195">更新时间</div>
        </div>
        <div v-for="(item, index) in List" :key="index" class="exponentfor cl">
          <div class="left w142">{{ item.com }}</div>
          <div class="left w187">
            {{ item.duying1 }} {{ item.duying3 }} {{ item.duying3 }}
          </div>
          <div class="left w184">{{ item.update }}</div>
          <div class="left w75">{{ item.big }}</div>
          <div class="left w75">{{ item.small }}</div>
          <div class="left w165">{{ item.update1 }}</div>
          <div class="left w115">{{ item.rangqiu }}</div>
          <div class="left w115">{{ item.rangqiu1 }}</div>
          <div class="left w195">{{ item.update2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const analysisheader = () => import("../../components/analysis/analysisheader");
export default {
  data() {
    return {
      checkmenutype:2,
      headerKey: "2",
      tableData: [
        {
          name: "足协杯公司1",
        },
        {
          name: "足协杯公司2",
        },
        {
          name: "足协杯公司3",
        },
        {
          name: "足协杯公司4",
        },
      ],
      show: false,
      value: "足协杯公司",
      List: [
        {
          com: "足协杯公司",
          duying1: "111",
          duying2: "111",
          duying3: "111",
          update: "2020.01.01",
          big: 11,
          small: 22,
          update1: "2020.01.01",
          rangqiu: "11",
          rangqiu1: "22",
          update2: "2020.01.01",
        },
        {
          com: "足协杯公司",
          duying1: "111",
          duying2: "111",
          duying3: "111",
          update: "2020.01.01",
          big: 11,
          small: 22,
          update1: "2020.01.01",
          rangqiu: "11",
          rangqiu1: "22",
          update2: "2020.01.01",
        },
        {
          com: "足协杯公司",
          duying1: "111",
          duying2: "111",
          duying3: "111",
          update: "2020.01.01",
          big: 11,
          small: 22,
          update1: "2020.01.01",
          rangqiu: "11",
          rangqiu1: "22",
          update2: "2020.01.01",
        },
      ],
    };
  },
  methods: {  
    changeopthings(e){
      this.value = e
    },
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item.name;
      this.show = false;
    },
  },
  components: {
    home_herder,
    analysisheader,
  },
};
</script>

<style lang="less" scoped>
.exponent {
  padding: 17px 16px;
  width: 1300px;
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
  font-size: 14px;
  color: #555555;
  .exponent_div {
    border: 1px solid #dedede;
    .exponent_header {
      line-height: 54px;
      .select_div {
        width: 155px;
        height: 30px;
        margin: 10px 10px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #dedede;
        position: relative;
        .select_img {
          position: absolute;
          right: 5px;
          bottom: 0;
          top: 0;
          margin: auto;
        }
        .opthings_div {
          position: absolute;
          background: #fff;
          color: #555555;
          width: 155px;
          text-align: center;
          border: 1px solid #dedede;
          .opthings {
            border-top: 1px solid #dedede;
            border-bottom: 1px solid #dedede;
            border-radius: 5px;
          }
        }
      }
    }
    .exponent_title {
      line-height: 40px;
      text-align: center;
      background-color: #e2f1fe;
      border: 1px solid #dedede;
      .w142 {
        width: 142px + 3px;
      }
      .w187 {
        width: 187px + 3px;
      }
      .w184 {
        width: 184px + 3px;
      }
      .w150 {
        width: 150px + 3px;
      }
      .w169 {
        width: 169px + 3px;
      }
      .w232 {
        width: 232px + 3px;
      }
      .w195 {
        width: 195px + 3px;
      }
    }
    .exponentfor {
      line-height: 35px;
      text-align: center;
      margin: 0 3px;
      div {
        border: 1px solid #dedede;
      }
      .w142 {
        width: 142px + 2px;
      }
      .w187 {
        width: 187px + 2px;
      }
      .w184 {
        width: 184px + 2px;
      }
      .w75 {
        width: 75px + 2px;
      }
      .w165 {
        width: 165px + 2px;
      }
      .w115 {
        width: 115px + 2px;
      }
      .w195 {
        width: 195px + 2px;
      }
    }
  }
}
</style>