<template>
  <div class="newslive left">
    <div class="newslive_menu">
      <div class="header">热门直播</div>
      <div v-for="(item, index) in liveList" :key="index" class="liveclass" @click="gotolive()">
        <span class="liveclass_type">{{ item.type }}</span>
        <span class="ov">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveList: [
        {
          type: "进行中",
          title: "墨西超-马萨特兰vs华雷斯",
        },
        {
          type: "进行中",
          title: "墨西超-马萨特兰vs华雷斯",
        },
        {
          type: "进行中",
          title: "墨西超-马萨特兰vs华雷斯",
        },
        {
          type: "进行中",
          title: "墨西超-马萨特兰vs华雷斯",
        },
      ],
    };
  },
  methods: {
      gotolive() {
        this.$router.push('livedel')
      }
  },
};
</script>

<style lang="less" scoped>

.newslive_menu {
    padding:10px ;
  .header {
    padding:0 10px ;
    font-size: 20px;
    margin: 10px 0;
    border-left: 4px solid #2a3783;
  }
  .liveclass{
      font-size: 17px;
      margin-top:10px ;
    .liveclass_type{
        background-color: rgb(243, 62, 7);
        color: #ffffff;
        border-radius: 5px;
        padding: 2px 5px;
    }
  }
}
</style>