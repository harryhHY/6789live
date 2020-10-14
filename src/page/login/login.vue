<template>
  <div class="login" clearfix>
  <div class="login-wrap">
  <el-tabs class="harftab" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane  label="账号密码登录" name="first">
        <el-row type="flex" justify="center">
          <el-form ref="user" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item  class="filed" prop="username" label="用户名">
              <el-input v-model="user.username" placeholder="账户/手机号/邮箱" prefix-icon></el-input>
            </el-form-item>
            <el-form-item class="filed" prop="password" label="密码">
              <el-input v-model="user.password" show-password placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  class="filed" label="确认密码" prop="checkPass">
              <el-input type="password" v-model="user.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" @change = "changeRadio">记住密码</el-checkbox>
            <router-link to="/" class="findpass">忘记密码</router-link>
            <el-form-item>
              <el-button type="primary" icon="el-icon-upload" @click="doLogin('user')">登 录</el-button>
            </el-form-item>
            <router-link to="/registered" class="findpass">注册账号</router-link>
          </el-form>
        </el-row>
      
    </el-tab-pane>
    <el-tab-pane label="手机号登录" name="second">手机号登录</el-tab-pane>
  </el-tabs>  
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    var validateName = (rule, value, callback) => {
      let reg = /^1[3456789]\d{9}$/
        if (value == "") {
          return callback(new Error('用户名不能为空'));
        } else if(new RegExp(reg).test(value) == false){
          return callback(new Error('手机号格式错误'));
        }
      };
    var validatePass = (rule, value, callback) => {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if (value === '') {
          return callback(new Error('请输入密码'));
        } else if(new RegExp(reg).test(value) == false){
           return callback(new Error('密码为6-20位数字字母组成'));
          // if (this.user.password !== '') {
          //   this.$refs.user.validateField('checkPass');
          // }
          // callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      user: {
        username: "",
        password: "",
        checkPass:"",
      },
      rules: {
        username: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      activeName: 'first',
      checked: false  
    };
  },
  created() {},
  methods: {
    changeRadio(){
      console.log(this.checked)
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
      doLogin(user) {
        this.$refs['user'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
    // doLogin() {
    //   if (!this.user.username) {
    //     this.$message.error("请输入用户名！");
    //     return;
    //   } else if (!this.user.password) {
    //     this.$message.error("请输入密码！");
    //     return;
    //   } else {
    //     //校验用户名和密码是否正确;
    //     // this.$router.push({ path: "/personal" });
    //     axios
    //       .post("/login/", {
    //         name: this.user.username,
    //         password: this.user.password
    //       })
    //       .then(res => {
    //         // console.log("输出response.data.status", res.data.status);
    //         if (res.data.status === 200) {
    //           this.$router.push({ path: "/personal" });
    //         } else {
    //           alert("您输入的用户名或密码错误！");
    //         }
    //       });
    //   }
    // }
    // }
  },
  // computed: {
  //   ...mapState(["activityDetail"]),
  // },
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height:100%;
  // height: 740px;
  // background: url("../assets/images/bg1.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  width: 100%;
  height:100%;
  // background: url("../assets/images/login_bg.png") no-repeat;
  background-size: cover;
  width: 400px;
  // height: 300px;
  margin: auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
.filed{
  margin-bottom:22px;
}
.findpass{
  float:right;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  // margin-left: -50px;
}

</style>
<style>
.harftab .el-tabs__item{
  width:100% !important;
  text-align:center !important;
}
</style>