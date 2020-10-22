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
  <p class="registitle">立即注册</p>
  <div class="harftab">
      <el-row type="flex" justify="center">
          <el-form ref="register" :model="register" :rules="registerRules" status-icon label-width="80px" class="second_con">
            <el-form-item  class="filed" prop="username" label="">
              <img class="user" :src="imgs.user" alt="">
              <el-input v-model="register.username" @blur="checkBlur($event)" placeholder="用户名：4-20位英文或字母或“-”、“_”" prefix-icon></el-input>
            </el-form-item>
            <el-form-item class="filed" prop="password" label="">
              <img class="password" :src="imgs.pass" alt="">
              <el-input v-model="register.password" show-password placeholder="密码：6-16位密码，区分大小写" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  class="filed" label="" prop="checkPass">
              <img class="password" :src="imgs.pass" alt="">
              <el-input type="password" show-password v-model="register.checkPass" placeholder="确认密码" autocomplete="off"></el-input>
            </el-form-item>
            <div class="region_con">
                <el-form-item  class="filed" prop="phoneNum" label="">
                  <img class="phone" :src="imgs.phone" alt="">
                  <el-input v-model="register.phoneNum" placeholder="请输入11位手机号" prefix-icon></el-input>
                </el-form-item>
            </div>
            <!-- 获取验证码 -->
            <div class="code_con">
              <el-form-item class="filed code" prop="code" label="">
                <img class="code" :src="imgs.code" alt="">
                <el-input class="code" v-model="register.code" show-password placeholder="请输入验证码" autocomplete="off"></el-input>
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
                <el-checkbox class="autologin" v-model="checked" @change = "changeRadio">同意并接受</el-checkbox><span class="liverule">《6789直播用户条款》</span>
            </div>
            <el-form-item>
              <el-button type="primary" class="userlogin" @click="doRegiste('iphone')">注 册</el-button>
            </el-form-item>
          </el-form>
        </el-row>
    </div>
  <div class="other-way-login">
      <span class="txt" @click="goLogin">使用已有账户登录</span>  
  </div>
  
  <span slot="footer" class="dialog-footer">
    <div class="other">
        <span class="help">帮助<span class="italic_line">/</span></span>  
        <span class="secret">隐私<span class="italic_line">/</span></span>  
        <span class="rule">条款</span>
    </div>
    <!-- <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button> -->
  </span>
</el-dialog>
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
        } else if (value !== this.register.password) {
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
      register: {
        username: "",
        password: "",
        checkPass:"",
        region:"+86",
        phoneNum:"",
        code:""
      },
      // 注册规则
      registerRules: {
        username: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phoneNum:[
          { validator: phoneNumber, trigger: 'blur' }
        ]
      },
      activeName: 'first',
      checked: false,
      count:"",
      show: true,
      timer:null,
      dialogVisible:this.RegisteredVisible,
      onmodalclick:false
    };
  },
  created() {},
  props:["RegisteredVisible"],
  methods: {
    checkBlur(e){
      console.log(e.target.value);
      this.$message({
        type: 'error', // warning、success
        message: '这是一条消息' 
      }) 
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
        console.log(tab.name);
    },
    handleClose(done) {
      this.dialogVisible=false
      this.$emit("chidRegisterVisible",this.onmodalclick)
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
     doRegiste(register) {
        this.$refs['register'].validate((valid) => {
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
      goLogin(){
        this.$router.push("/login")
      }
      // doLogin() {
      //   this.$api.login.useLogin({
      //       key:'8f3e51cd2e461ab4f858ab48d8b5c027',
      //       page:2,
      //       pagesize:10,
      //       sort:'asc',
      //       time:1418745237
      //     }).then(res => {
      //         console.log(res);
      //         // if (res.data.code == 1) {                             
      //         //     this.$Message.info(res.data.msg);
      //         // } else if (res.data.code == 0) {
      //         //     //is_first:0非首次，1是首次 跳转修改密码
      //         //         // console.log(res.data.params.is_first);
      //         //         if(res.data.params.is_first){
      //         //             localStorage.setItem("token", res.data.params.token);
      //         //             localStorage.setItem("userName", this.user.username);
      //         //             this.$router.push("/changepwd");
      //         //         }else{
      //         //             // 登陆存储
      //         //             localStorage.setItem("token", res.data.params.token);
      //         //             localStorage.setItem("userName", this.user.username);
      //         //             //登录成功提示信息
      //         //             this.$Message.info(res.data.msg);   
      //         //             this.$router.push("/");                                 
      //         //         }                               
      //         // } else if (res.data.code == -1) {
      //         //     this.$Message.info(res.data.msg); 
      //         //     localStorage.removeItem("token");
      //         //     this.$router.push("/login")        
      //         // }
      //     })
      //     .catch(error => {
      //       this.$Message.info("账号或密码错误");
      //     })
      // }
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
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  width: 25%;
  height:700px;
  background-size: cover;
  position:relative;
  margin: auto;
}
.title{
  width: 100%;
  position: absolute;
  font-size: 16px;
  color: #FFF;
  text-align: center;
  top: -45px;
}
.dialog_box{
  position: relative;
  border-radius: 10px;
  width: 100%;
  // height: 500px;
  .registitle{
    width: 50%;
    position: absolute;
    font-size: 18px;
    color: #014681;
    text-align: left;
    top: 3%;
    left: 15%;
  }
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
  color: #406380 !important;
  float: right;
}
.auto_box{
  font-size: 13px;
  .liverule{
    color: #00cbfe;
    position: relative;
    top: 1.5px;
  }
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
    height: 15px;
    line-height: 15px;
    font-size: 13px;
    text-align: center;
}
.other-way-login .txt {
    color: #242121;
    vertical-align: middle;
    cursor: pointer;
}
.other-way-img{
  width: 50%;
  height: 42px;
  margin: auto;
  .one{
    width: 42px;
    height: 42px;
    float: left;
    cursor: pointer;
  }
  .two{
    width: 42px;
    height: 42px;
    float: left;
    margin-left: 18%;
    cursor: pointer;
  }
  .three{
    width: 42px;
    height: 42px;
    float: right;
    cursor: pointer;
  }
}
.code_con{
  width: 100%;
  overflow: hidden;
  .el-form-item{
    margin-bottom: 20px !important;
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
    // border-image-slice: 10;
    // border-image: linear-gradient(#e66465, #9198e5);
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
  .italic_line{
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
/deep/ .el-form-item{
    margin-bottom: 20px;
  }
</style>
<style>
.second_con .el-form-item__content{
    margin-left:0 !important;
}
.code .el-input__inner{
  margin-left: 25%;
  width: 75%;
}
</style>