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
          @click="gotosm(item.src)"
        >
          <i :class="item.icon"></i>{{ item.title }}</el-menu-item
        >
      </el-menu>
    </div>
    <div v-if="!token" class="login_div">
      <button class="loginbtn cu" @click="gotosm('/login')">登陆</button>
      <div class="span_div">
        <span class="logon_span" v-if="!token" @click="gotosm('/registered')"
          >还没注册？</span
        >
        <span class="logon_span" v-if="!token" @click="gotosm('/registered')"
          >|　忘记密码</span
        >
      </div>
    </div>
    <div v-if="token" class="left istokendiv" >
      <div class="cl centerimg token_div">
        <div class="left">
          <el-dropdown @command="gotosm">
            <span class="el-dropdown-link cu">
              {{ namely }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in menuitem" :key="index"  :command='item.src'>{{item.title}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="exit left cu" @click="exit()">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex2: "1",
      title_data: [
        {
          icon: "el-icon-house",
          index: "1",
          title: "首页",
          src: "/",
        },
        {
          index: "2",
          title: "直播",
          src: "/live",
        },
        {
          index: "3",
          title: "新闻",
          src: "/new",
        },
        {
          index: "4",
          title: "社区",
          src: "/community",
        },
      ],
      namely: "一切都是为了活着",
      menuitem:[
        {
          title:'账号设置',
          src:'/settings',
        },
        {
          title:'我的主页',
          src:'/person',
        },
        {
          title:'帮助',
          src:'',
        },

      ]
    };
  },
  props: ["headerKey"],
  methods: {
    exit() {
      this.$store.commit("token", '');
    },
    gptoperson(e){
      console.log(e)
    },
    gotosm(src) {
      this.$router.push(src);
    },
    handleSelect(key, keyPath) {
      this.$emit("changetype", key);
    },
  },
  computed: {
    ...mapState(["token"]),
  },
  watch: {},
  created() {
    this.activeIndex2 = this.headerKey;
  },
};
</script>

<style lang="less" scoped>
.istokendiv{
  height: 85px;
  display: flex;
  align-items: center;
}
#home_header {
  width: 100%;
  border-bottom: 1px solid #666666;
  //   background-color: #f00;
  .logo {
    width: 15%;
    height: 84px;
    background: url("../../image/logo.png") no-repeat;
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
.exit {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #999999;
  margin-left: 20px;
}
.token_div{

}
</style>