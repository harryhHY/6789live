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
            <el-form-item>
              <el-button type="primary" icon="el-icon-upload" @click="doLogin('user')">登 录</el-button>
            </el-form-item>
            <router-link to="/registered" class="register">注册账号</router-link>
            <router-link to="/resetpass" class="fogetpass">忘记密码</router-link>
          </el-form>
        </el-row>
    </el-tab-pane>
    <el-tab-pane label="手机号登录" name="second">
      <el-row type="flex" justify="center">
          <el-form ref="iphone" :model="iphone" :rules="phoneRules" status-icon label-width="80px" class="second_con">
            <div class="region_con">
                <!-- 手机区号+用户名 -->
                <el-form-item label="" prop="region" class="region">
                  <el-select v-model="iphone.region" placeholder="请选择活动区域" @change="changeRegion">
                    <el-option label="+86" value="86"></el-option>
                    <!-- <el-option label="区域二" value="beijing"></el-option> -->
                  </el-select>
                </el-form-item>
                <el-form-item  class="filed" prop="phoneNum" label="">
                  <el-input v-model="iphone.phoneNum" placeholder="11位手机号" prefix-icon></el-input>
                </el-form-item>
            </div>
            <!-- 获取验证码 -->
            <div class="code_con">
              <el-form-item class="filed code" prop="code" label="">
                <el-input v-model="iphone.code" show-password placeholder="请输入验证码" autocomplete="off"></el-input>
              </el-form-item>
              <el-button
                  class="code_btn"
                  type="primary"
                  @click="getVerify"
                  style="width:175px;"
                  :disabled="disabled=!show"
              >
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
              </el-button>
            </div>
            <div class="re_pass">
              <el-checkbox class="remember_pass" v-model="checked" @change = "changeRadio">记住密码</el-checkbox>
              <!-- <router-link to="/" class="findpass">忘记密码</router-link> -->
            </div>
            <el-form-item>
              <el-button type="primary" icon="el-icon-upload" @click="doLogin('iphone')">登 录</el-button>
            </el-form-item>
            <router-link to="/registered" class="register">注册账号</router-link>
            <router-link to="/resetpass" class="fogetpass">忘记密码</router-link>
          </el-form>
        </el-row>
    </el-tab-pane>
  </el-tabs>  
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    //用户名登录
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
      //手机号登录
      var phoneNumber = (rule, value, callback) => {
      let reg = /^1[3456789]\d{9}$/
        if (value == "") {
          return callback(new Error('手机号不能为空'));
        } else if(new RegExp(reg).test(value) == false){
          return callback(new Error('手机号格式错误'));
        }
      };
    return {
      user: {
        username: "",
        password: "",
        checkPass:"",
      },
      iphone:{
        region:"+86",
        phoneNum:"",
        code:""
      },
      // 用户名登录规则
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
      // 手机号登录规则
      phoneRules:{
        phoneNum:[
          { validator: phoneNumber, trigger: 'blur' }
        ]
      },
      activeName: 'first',
      checked: false,
      count:"",
      show: true,
      timer:null 
    };
  },
  created() {},
  methods: {
    //选择手机区号
    changeRegion(value){
      console.log(value)
    },
    //是否记住密码
    changeRadio(){
      console.log(this.checked)
    },
    handleClick(tab, event) {
        console.log(tab.name);
    },
    //获取验证码倒计时
    getVerify() {
            // 验证手机号
      // if (this.checkPhone() == false) {
      //     return false;
      // } else {
        console.log(111);
          const TIME_COUNT = 60; //更改倒计时时间
          if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                      this.count--;
                  } else {
                      this.show = true;
                      clearInterval(this.timer); // 清除定时器
                      this.timer = null;
                  }
              }, 1000);
          }
      // }
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
      },
      doLogin() {
        this.$api.login.useLogin({
            key:'8f3e51cd2e461ab4f858ab48d8b5c027',
            page:2,
            pagesize:10,
            sort:'asc',
            time:1418745237
          }).then(res => {
              console.log(res);
              // if (res.data.code == 1) {                             
              //     this.$Message.info(res.data.msg);
              // } else if (res.data.code == 0) {
              //     //is_first:0非首次，1是首次 跳转修改密码
              //         // console.log(res.data.params.is_first);
              //         if(res.data.params.is_first){
              //             localStorage.setItem("token", res.data.params.token);
              //             localStorage.setItem("userName", this.user.username);
              //             this.$router.push("/changepwd");
              //         }else{
              //             // 登陆存储
              //             localStorage.setItem("token", res.data.params.token);
              //             localStorage.setItem("userName", this.user.username);
              //             //登录成功提示信息
              //             this.$Message.info(res.data.msg);   
              //             this.$router.push("/");                                 
              //         }                               
              // } else if (res.data.code == -1) {
              //     this.$Message.info(res.data.msg); 
              //     localStorage.removeItem("token");
              //     this.$router.push("/login")        
              // }
          })
          .catch(error => {
            this.$Message.info("账号或密码错误");
          })
      }
  },
  mounted(){
    // this.$axios({
    //   url:
    //     this.JuheHOST +
    //     "/joke/content/list.php?key=8f3e51cd2e461ab4f858ab48d8b5c027&page=2&pagesize=10&sort=asc&time=1418745237",
    //   method: "get",
    //   timeout: 3000
    // })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
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
  height:700px;
  // background: url("../assets/images/login_bg.png") no-repeat;
  background-size: cover;
  position:relative;
  top:200px;
  width: 400px;
  // height: 300px;
  margin: auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
  z-index:999;
}
.filed{
  margin-bottom:22px;
}
.register{
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
  width: 100%;
  // margin-left: -50px;
}
.second_con{
  width: 100%;
}
.region_con{
  width: 100%;
  height: 40px;
  margin-bottom: 22px;
  // position: relative;
  // right: 40px;
}
.region_con .filed{
  width: 80%;
  float: right;
  // position: absolute;
  // top: 0;
  // right: 0;
}
.region{
  width:20%;
  position: absolute;
  z-index: 999;
}
.code_con{
  width: 100%;
  height: 40px;
  // position: relative;
  // right: 40px;
}
.code{
  width: 50%;
  float: left;
}
.code_btn{
  width: 30%;
  float: right;
}
.re_pass{
   width: 100%;
}
.remember_pass{
  width: 100%;
  float: left;
  z-index: 999;
}
// .re_pass .findpass{
//   width: 50%;
//   float: right;
//   z-index: 999;
// }
.fogetpass{
  float: left;
}
</style>
<style>
.harftab .el-tabs__item{
  width:100% !important;
  text-align:center !important;
}
.second_con .el-form-item__content{
    margin-left:0 !important;
}
</style>