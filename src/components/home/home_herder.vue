<template>
  <div id="home_header" class="cl">
    <h1 @click="gotosm('/')" class="logo left"></h1>
    <div class="menu left">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffffff"
        text-color="#000"
        active-text-color="#2a88f3"
      >
        <el-menu-item
          v-for="(item, key, index) in title_data"
          :key="index + item.index"
          :index="item.index"
        >
          <i :class="item.icon"></i>{{ item.title }}</el-menu-item
        >
      </el-menu>
    </div>
    <div class="login_div">
      <button v-if="!token" class="loginbtn">登陆</button>
      <div v-if="token">{{ namely }}</div>
      <div class="span_div">
        <span class="logon_span" v-if="!token" @click="gotosm('/registered')"
          >还没注册？</span
        >
        <span class="logon_span" v-if="!token" @click="gotosm('/registered')"
          >|　忘记密码</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: false,
      activeIndex2: "1",
      title_data: [
        {
          icon: "el-icon-house",
          index: "1",
          title: "首页",
        },
        {
          index: "2",
          title: "直播",
        },
        {
          index: "3",
          title: "新闻",
        },
        {
          index: "4",
          title: "社区",
        },
      ],
    };
  },
  methods: {
    gotosm(src) {
      this.$router.push(src);
    },
    handleSelect(key, keyPath) {
      this.$emit("changetype", key);
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
#home_header {
  width: 100%;
  //   background-color: #f00;
  .logo {
    width: 15%;
    height: 84px;
    background: url("../../../static/image/logo.png") no-repeat;
    background-size: 100%;
    cursor: pointer;
    image {
      width: 100%;
      height: 100%;
    }
  }

  .menu {
    width: 65%;
    ul {
      margin-top: 20px;
      .el-menu--horizontal {
        border: none;
      }
      .el-menu-item:hover {
        background: #ffffff !important;
      }
    }
  }
  .login_div {
  }
  .loginbtn {
    color: #ffffff;
    border: none;
    font-size: 18px;
    background-color: rgb(42, 136, 243);
    padding: 15px 20px;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: (81px- 54px)/2;
  }
  .span_div {
    margin-left: 20px;
    display: inline-block;
  }
  .logon_span {
    color: #777777;
  }
  .logon_span:hover {
    cursor: pointer;
  }
}
</style>