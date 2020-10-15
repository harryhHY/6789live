<template>
  <div id="live" class="cl">
    <livemenu @changetype="pve" />
    <div class="live_content left">
      <div class="header cl">
        <div class="left">
          <div
            v-for="(item, key, index) in liveList"
            :key="item.id"
            :class="
              item.clicktype ? 'playdata left selected' : 'playdata left '
            "
            @click="changetype(item.id, key)"
          >
            {{ item.playdata }}
          </div>
        </div>
        <div class="right">
          <img src="../../image/live.png" alt="" />
        </div>
      </div>
      <div>
          <div v-for="(item,index) in liveclass" class="playname">
              {{item.name}}
          </div>
      </div>
      <div>
          
      </div>
    </div>
    <liveVideo />
  </div>
</template>

<script>
const livemenu = () => import("../live/livemenu");
const liveVideo = () => import("../live/live_video");
export default {
  data() {
    return {
      liveList: [
        {
          id: 1,
          playdata: "足球",
          clicktype: true,
        },
        {
          id: 2,
          playdata: "篮球",
          clicktype: false,
        },
      ],
      liveclass: [
        {
          id: 1,
          name: "最新",
        },
        {
          id: 2,
          name: "英超",
        },
        {
          id: 3,
          name: "西甲",
        },
        {
          id: 4,
          name: "意甲",
        },
        {
          id: 5,
          name: "德甲",
        },
        {
          id: 6,
          name: "国内",
        },
        {
          id: 7,
          name: "更多",
        },
      ],
      check: 0,
    };
  },

  methods: {
    pve(e) {
      console.log(e);
    },
    changetype(id, index) {
      let data = this.liveList;
      console.log(index);
      for (let i = 0; i < data.length; i++) {
        if (i == index) {
          data[i].clicktype = true;
        } else {
          data[i].clicktype = false;
        }
      }
    },
  },
  components: {
    livemenu,
    liveVideo,
  },
  // watch: {
  //     data(newValue, oldValue) {

  //     }
  // },
};
</script>

<style lang="less" scoped>
.playname{
    display: inline-block;
    font-size: 17px;
    padding: 5px 10px;
    color: #2a88f3;
}
.live_content {
  width: 64%;
}
.header {
  line-height: 50px;
  font-size: 20px;
  padding-left: 30px;
  .playdata {
    padding: 0 20px;
  }
  .playdata:hover {
    cursor: pointer;
  }
  .selected {
    color: #2a88f3;
    border-bottom: 1px solid #2a88f3;
  }
}
</style>