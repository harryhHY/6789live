<template>
  <div class="comment-wrap">
    <div
      v-for="(item, index) in child"
      :key="index"
      :style="'margin-left:' + deep * 30 + 'px'"
      class="replay"
      v-show="flag"
      @click="changeshow"
    >
      {{ item.user_name }} : {{ item.c_body }}
      <comment-tree
        v-show="itemChild"
        :itemChild="item.child"
        :deep="deep + 1"
        :showreply="flag"
      >
      </comment-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child: "",
      flag: false,
    };
  },
  name: "comment-tree",
  props: ["itemChild", "deep"],
  methods: {
    changeshow(falg) {
        this.flag = falg
    },
  },
  watch: {
    // showreply(newValue) {
    //   this.flag = newValue;
    // },
  },
  created() {
    this.child = this.itemChild;
    // this.flag = this.showreply;
  },
};
</script>

<style lang="less" scoped>
.comment-wrap {
  width: 500px;
  line-height: 30px;
}
.replay {
  margin: 10px 0;
}
</style>