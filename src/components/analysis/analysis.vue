<template>
  <div class="dataanalysis_header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        :index="item.id"
        v-for="(item, index) in dataList"
        :key="index"
        >{{ item.title }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2",
      dataList: [
        {
          id: "1",
          title: "直播间",
          src: "/livedel",
        },
        {
          id: "2",
          title: "数据分析",
          src: "/analysis",
        },
        {
          id: "3",
          title: "指数",
          src: "/exponent",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
     for(let i =0;i<this.dataList.length;i++){
         
     }
    },
  },
};
</script>

<style lang="less" scoped>
.dataanalysis_header{
    display: flex;
    justify-content: center;
}
</style>