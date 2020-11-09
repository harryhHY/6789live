<template>
  <div class="login" clearfix>
  <div class="login-wrap">
    <el-dialog
    :close-on-click-modal = "onmodalclick"
    class="dialog_box"
    title=""
    :visible="dialogVisible"
    width="100%"
    center
    :before-close="handleClose">
    <p class="line_top"></p>
    <p class="line_bottom"></p>
  <p class="title">6789专注于为您提供体育赛事直播与互动交流平台</p>
  <el-tabs class="harftab" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane  label="账号密码登录" name="1">
        <el-row type="flex" justify="center">
          <el-form ref="user" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item  class="filed" prop="username" label="">
              <img class="username" :src="imgs.user" alt="">
              <el-input v-model="user.username" placeholder="请输入账户/手机号/邮箱" prefix-icon></el-input>
            </el-form-item>
            <el-form-item class="filed" prop="password" label="">
              <img class="password" :src="imgs.pass" alt="">
              <el-input v-model="user.password" show-password placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <div class="auto_box">
                <el-checkbox class="autologin" v-model="checked" @change = "changeRadio">自动登录</el-checkbox>
                <span @click="toRegistered('go')" class="register">注册账号</span>
                <router-link to="/resetpass" class="fogetpass">忘记密码&nbsp;&nbsp;/&nbsp;&nbsp;</router-link>
            </div>
            <el-form-item>
              <el-button type="primary" class="userlogin" @click="doLogin('user')" v-preventReClick>登 录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        
    </el-tab-pane>
    <el-tab-pane label="手机号登录" name="2">
      <el-row type="flex" justify="center">
          <el-form ref="iphone" :model="iphone" :rules="phoneRules" status-icon label-width="80px" class="second_con">
            <div class="region_con">
                <el-form-item  class="filed" prop="phoneNum" label="">
                  <img class="password" :src="imgs.phone" alt="">
                  <el-input v-model="iphone.phoneNum" placeholder="请输入11位手机号" prefix-icon></el-input>
                </el-form-item>
            </div>
            <!-- 获取验证码 -->
            <div class="code_con">
              <el-form-item class="filed code" prop="code" label="">
                <img class="password" :src="imgs.code" alt="">
                <el-input class="code" v-model="iphone.code" show-password placeholder="请输入验证码" autocomplete="off"></el-input>
              </el-form-item>
              <el-button
                  class="code_btn"
                  type="primary"
                  @click="getVerify"
                  :disabled="disabled=!show"
              >
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
              </el-button>
            </div>
            <div class="auto_box">
                <el-checkbox class="autologin" v-model="checked" @change = "changeRadio">自动登录</el-checkbox>
                <span class="register" @click="toRegistered('go')">注册账号</span>
                <router-link to="/resetpass" class="fogetpass">忘记密码&nbsp;&nbsp;/&nbsp;&nbsp;</router-link>
            </div>
            <el-form-item>
              <el-button type="primary" class="userlogin" @click="doLogin('iphone')" v-preventReClick>登 录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
    </el-tab-pane>
  </el-tabs>
  <div class="other-way-login">
      <span class="line"></span>  
      <span class="txt">其他登录方式</span>  
      <span class="line"></span>  
  </div>
  <div class="other-way-img">
      <div class="one">
        <img :src="imgs.qq" alt="">
      </div>
      <div class="two"><img :src="imgs.wx" alt=""></div>
      <div class="three"><img :src="imgs.wb" alt=""></div>
  </div>
  
  <span slot="footer" class="dialog-footer">
    <div class="other">
        <span class="help" @click="toHelp">帮助<span class="italic_line">/</span></span>  
        <span class="secret" @click="toRule">隐私<span class="italic_line">/</span></span>  
        <span class="rule" @click="toRule">条款</span>
    </div>
  </span>
</el-dialog>
  </div>
  </div>
</template>

<script>
import { mapState ,mapMutations } from "vuex";
let params;
export default {
  name: "login",
  data() {
    //用户名登录
    let regphone = /^1[3456789]\d{9}$/;
    let regmail = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      var validateName = (rule, value, callback) => {
        if(value == ''){
          callback(new Error('用户名不能为空'))
        }else{
          if (!reg.test(value) && !regphone.test(value) && !regmail.test(value)) {
            callback(new Error('用户名格式错误'))
          } else{
            callback()
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if(value == ''){
          callback(new Error('请输入密码'))
        }else{
          if (!reg.test(value)) {
            callback(new Error('密码应是6-16位数字、字母或字符！'))
          } else{
            callback()
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      //手机号登录
      var phoneNumber = (rule, value, callback) => {
        if(value == ''){
          callback(new Error('手机号不能为空'))
        }else{
          if (!regphone.test(value)) {
            callback(new Error('手机号格式错误'))
          } else{
            callback()
          }
        }
      };
    return {
      imgs:{
        qq:require("@/image/imgs/qq.png"),
        wx:require("@/image/imgs/wx.png"),
        wb:require("@/image/imgs/wb.png"),
        pass:require("@/image/imgs/pass.png"),
        phone:require("@/image/imgs/phone.png"),
        user:require("@/image/imgs/user.png"),
        code:require("@/image/imgs/code.png"),
        login:require("@/image/imgs/login.png")
      },
      user: {
        username: "",
        password: "",
      },
      iphone:{
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
      activeName: '1',
      checked: true,
      count:"",
      show: true,
      timer:null,
      dialogVisible:this.loginVisible,
      onmodalclick:false,
      headflag:''
    };
  },
  props:["loginVisible"],
  created() {},
  methods: {
    ...mapMutations(["token"]),
    toRule(){
      this.$router.push('/rule')
    },
    toHelp(){
      this.$router.push('/helps')
    },
    //选择手机区号
    changeRegion(value){
      console.log(value)
    },
    //是否记住密码
    changeRadio(){
      console.log(this.checked)
    },
    handleClick(tab, event) {
      this.activeName = tab.name;
        console.log(tab.name);
    },
    handleClose(done) {
      this.dialogVisible=false
      this.$emit("chidVisible",this.onmodalclick)
    },
    //去注册
    toRegistered(go){
      this.$emit("chidVisible",go)
    },
    //获取验证码倒计时
    getVerify() {
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
          this.$axios({
              url:`${this.$api.getCode}/${this.iphone.phoneNum}/1`,
              method: "post",
              timeout: 3000
          })
          .then(res => {
              // console.log(res);
          })
          .catch(error => {
              // console.log(error);
          });
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //base64转码
      encode(str){
        return  str == null ? null : btoa(encodeURIComponent(str));
      },
      //用户名登录
      login(){
          this.$api.login.useLogin(
          params
          ).then(res => {
              console.log(res);
              if (res.data.code == 1) {
                  this.$message({
                    type: 'error', // warning、success
                    message: res.data.msg 
                  }) 
              } else if (res.data.code == 0) {
                  this.$message({
                    type: 'success', // warning、success
                    message: res.data.msg 
                  })
                  //登录成功获取用户基本信息
                  this.$emit("childData")
                  //token存入VUEX
                  this.token(res.data.params.token)
                  localStorage.setItem("token", res.data.params.token);                
                  this.dialogVisible = false;
                  this.$router.push("/")                                               
              } else if (res.data.code == -1) {
                  this.$message({
                    type: 'success', // warning、success
                    message: res.data.msg 
                  })
              }
          })
          .catch(error => {
            this.$message("账号或密码错误");
          })
      },
      doLogin() {
        if(this.activeName == 1){
          params = {
            name:this.$inHTMLData(this.user.username),
            mobile:"",
            vcode:"",
            pwd:this.$inHTMLData(this.encode(this.user.password)),
            type:1,
          }
          this.$refs['user'].validate((valid) => {
            if (valid) {
               this.login();
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }else{
          params = {
            name:"",
            mobile:this.$inHTMLData(this.iphone.phoneNum),
            vcode:this.$inHTMLData(this.iphone.code),
            pwd:"",
            type:2,
          }
          this.$refs['iphone'].validate((valid) => {
            if (valid) {
              this.login();    
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        } 
      },
  },
  mounted(){
    // console.log(this.$api.login);
    // console.log(this.JuheHOST);
    // this.$axios({
    //   url:
    //     // this.$api.login + "/joke/content/list.php?key=8f3e51cd2e461ab4f858ab48d8b5c027&page=2&pagesize=10&sort=asc&time=1418745237",
    //     `${this.$api.login}?key=8f3e51cd2e461ab4f858ab48d8b5c027&page=2&pagesize=10&sort=asc&time=1418745237`,
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
  position: relative;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  width: 438px;
  height:700px;
  background-size: cover;
  position:relative;
  margin: auto;
}
.title{
  width: 100%;
  position: absolute;
  font-size: 18px;
  color: #FFF;
  text-align: center;
  top: -45px;
}
.dialog_box{
  position: relative;
  border-radius: 10px;
  width: 100%;
  // height: 500px;
  .line_top,.line_bottom{
    width: 100%;
    height: 5px;
    background-color: #1A90FC;
    position: absolute;
  }
  .line_top{
    top: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .line_bottom{
    bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .harftab{
    width: 100%;
    .filed{
      img{
        width: 40px;
        position: absolute;
        top: 10px;
        z-index: 999;
      }
    }
  }
}
.register,.fogetpass{
  color: #406380;
  float: right;
  cursor: pointer;
}
.register:hover{
  text-decoration: underline;
  color: #0894EC;
}
.auto_box{
  padding: 10px 0;
  font-size: 13px;
}
.userlogin{
  margin: 20px 0 0;
  width: 100%;
  display: inline-block;
  border-radius: 25px;
  background: linear-gradient(to right,#00CBFE,#0894EC);
}
.userlogin:hover{
  background: linear-gradient(to right,#17B0FF,#016DFF);
}
.autologin{
  float: left;
  color: #406380 !important;
}
.other-way-login {
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    margin-bottom: 10px;
    color: #bebebe;
}
.other-way-login .line {
    display: inline-block;
    width: 50px;
    height: 1px;
    border-top: 1px solid #bebebe;
}
.other-way-login .txt {
    color: #bebebe;
    vertical-align: middle;
    margin: 0 10px;
}
.other-way-img{
  width: 234px;
  height: 34px;
  margin: auto;
  img{
    width: 34px;
    height: 34px;
  }
  .one{
    width: 34px;
    height: 34px;
    float: left;
    cursor: pointer;
  }
  .two{
    width: 34px;
    height: 34px;
    float: left;
    margin-left: 65px;
    cursor: pointer;
  }
  .three{
    width: 34px;
    height: 34px;
    float: right;
    cursor: pointer;
  }
}
.code_con{
  width: 100%;
  overflow: hidden;
  .el-form-item{
    width: 60% !important;
  }
  .code{
    width: 100%;
    float: left;
  }
  .code_btn{
    width: 40% !important;
    margin-bottom: 22px;
    float: right;
    border-radius: 25px;
    color: #FD8758;
    font-weight: 500;
    background-color: #FFF;
    border: 2px solid #FD8758;
  }
}
.other{
  width: 60%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: #FFF;
  text-align: center;
  bottom: -44px;
  font-size: 16px;
  .secret{
    cursor: pointer;
  }
  .help{
    float: left;
    cursor: pointer;
  }
  .rule{
    float: right;
    cursor: pointer;
  }
  .secret:hover,.help:hover,.rule:hover{
    color: #0894EC;
  }
  .italic_line{
    color: #FFF;
    margin-left: 35px;
  }
}
/deep/.el-dialog__body{
  padding: 0;
}
/deep/.el-tabs__nav{
  width: 50%;
}
/deep/.el-tabs__item{
  width:100%;
  text-align:center;
  font-size: 16px;
  left: 5px;
  font-weight: 500 !important;
}
/deep/.el-dialog{
  border-radius: 5px;
}
.el-form{
  width: 300px;
}
/deep/.el-form-item__content{
  margin-left: 0 !important;
  clear: both;
}
/deep/.el-checkbox__label{
  font-size:13px
}
/deep/.el-input__inner{
  border: none;
  border-bottom:1px solid #CACACA;
  border-radius: 0;
  font-size: 12px;
  width: 85%;
  margin-left: 15%;
  margin-top: 2px;
}
/deep/.el-tabs__active-bar{
  // width: 185px !important;
  color: #1A90FC;
}
/deep/.el-tabs__item.is-active{
    color:#1A90FC;
  }

/deep/.el-tabs__active-bar{
    background-color:#1A90FC;
}
/deep/.el-tabs__item{
  color: #848484;
}
/deep/.el-dialog__headerbtn .el-dialog__close{
  border: 1px solid;
  border-radius: 50%;
}
/deep/.el-dialog__headerbtn .el-dialog__close:hover{
  color:#000000;
}
/deep/.el-dialog__header{
  padding-bottom: 20px;
}
/deep/.code .el-input__inner{
  margin-left: 25%;
  width: 75%;
}
</style>
<style>
.second_con .el-form-item__content{
    margin-left:0 !important;
}
</style>