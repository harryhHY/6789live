<template>
  <div class="comment-wrap">
    <div
      v-for="(item, index) in child"
      :key="index"
      :style="'margin-left:' + deep * 30 + 'px'"
      class="replay"
      @click="changeshow"
      v-show="flag || showreply"
    >
      {{ item.user_name }} : {{ item.c_body }}
      <div @click="reply()">回复</div>
      <comment-tree
        v-if="itemChild"
        :itemChild="item.child"
        :deep="deep + 1"
        :showreply="flag"
        :key="'son' + item.id"
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
      flag: false
    };
  },
  name: "comment-tree",
  props: ["itemChild", "deep", "showreply"],
  methods: {
    reply(){

    },
    changeshow() {
      this.flag = !this.flag;
    }
  },

  created() {
    this.child = this.itemChild;
    // this.flag = this.showreply;
  }
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
