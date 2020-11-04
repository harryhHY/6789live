<template>
  <div class="comment-wrap">
    <div v-for="(item, index) in child" :key="index" v-if="item.child">
      {{ item.user_name }}
      <comment-tree v-if="item.child" :itemChild='item.child'> </comment-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child: "",
      flag: true,
    };
  },
  name: "comment-tree",
  props: ["itemChild"],
  created() {
    this.child = this.itemChild;
    this.flag = this.child != false;
    //   console.log(this.itemChild[0].user_name)
    console.log(this.child);
  },
};
</script>

<style lang="less" scoped>
.comment-wrap {
  width: 500px;
  height: 30px;
  line-height: 30px;
}
</style>