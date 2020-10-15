<template>
  <div class="live_video right cl" id="live_video">
    <div class="header">
      {{ title }}
    </div>
    <div>
      <div
        v-for="(item, key, index) in videoData"
        :key="item.id"
        @click="gotovideo(item.id)"
        class="videotitle"
      >
        {{ item.videotitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "足球视频精选",
      videoData: [
        {
          id: 1,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 2,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 3,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 4,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 5,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
        {
          id: 6,
          videotitle: "Russia Division 1-莫斯科鱼雷vsD. Bryansk",
        },
      ],
    };
  },
  methods: {
    gotovideo(id) {
        console.log(id)
    },
  },
};
</script>

<style lang="less" scoped>
.live_video {
  width: 20%;
  border: 1px solid #2a88f3;
  .header {
    font-size: 16px;
    background: #2a88f3;
    color: #000000;
    line-height: 35px;
    padding-left: 20px;
  }
  .videotitle {
    margin: 10px 0;
    color: #2a88f3;
    padding-left: 10px;
  }
  .videotitle:hover {
    cursor: pointer;
  }
}
</style>