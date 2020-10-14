<template>
  <div class="login">
     <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      titile: 123456,
    };
  },
  created() {
    this.name();
  },
  methods: {
    name() {},
  },
  computed: {
    ...mapState(["activityDetail"]),
  },
};
</script>

<style scoped lang="less">
</style>