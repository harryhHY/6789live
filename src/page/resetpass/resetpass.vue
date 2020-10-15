<template>
  <div class="login" clearfix>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
    </el-steps>
  <div class="login-wrap">
    <h1>注册</h1>
      <el-row type="flex" justify="center">
          <el-form ref="register" :model="register" :rules="registerRules" status-icon label-width="80px" class="second_con">
            <el-form-item  class="filed" prop="username" label="">
              <el-input v-model="register.username" @blur="checkBlur($event)" placeholder="用户名：4-20位英文或字母或“-”、“_”" prefix-icon></el-input>
              <div class="text"><el-progress :percentage="50" status="exception"></el-progress></div>
            </el-form-item>
            <el-form-item class="filed" prop="password" label="">
              <el-input v-model="register.password" show-password placeholder="密码：6-16位密码，区分大小写" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  class="filed" label="" prop="checkPass">
              <el-input type="password" show-password v-model="register.checkPass" placeholder="确认密码" autocomplete="off"></el-input>
            </el-form-item>
            <div class="region_con">
                <!-- 手机区号+用户名 -->
                <el-form-item label="" prop="region" class="region">
                  <el-select v-model="register.region" placeholder="请选择活动区域" @change="changeRegion">
                    <el-option label="+86" value="86"></el-option>
                    <!-- <el-option label="区域二" value="beijing"></el-option> -->
                  </el-select>
                </el-form-item>
                <el-form-item  class="filed" prop="phoneNum" label="">
                  <el-input v-model="register.phoneNum" placeholder="11位手机号" prefix-icon></el-input>
                </el-form-item>
            </div>
            <!-- 获取验证码 -->
            <div class="code_con">
              <el-form-item class="code" prop="code" label="">
                <el-input v-model="register.code" show-password placeholder="请输入验证码" autocomplete="off"></el-input>
              </el-form-item>
              <el-button type="primary" class="code_btn">获取验证码</el-button>
            </div>
            <div class="re_pass">
              <el-checkbox class="remember_pass" v-model="checked" @change = "changeRadio">同意6789直播条款</el-checkbox>
              <!-- <router-link to="/" class="findpass">忘记密码</router-link> -->
            </div>
            <el-form-item>
              <el-button type="primary" icon="el-icon-upload" @click="doRegiste('register')">注 册</el-button>
            </el-form-item>
            <router-link to="/login" class="register">使用已有账户登录</router-link>
            <!-- <router-link to="/" class="fogetpass">忘记密码</router-link> -->
          </el-form>
        </el-row>
    <!-- </el-tab-pane>
  </el-tabs>   -->
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
      checked: false  
    };
  },
  created() {},
  methods: {
    //blur事件
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
  height:700px;
  // background: url("../assets/images/login_bg.png") no-repeat;
  background-size: cover;
  position:relative;
  top:200px;
  width: 400px;
  // height: 300px;
  margin: auto;
  // overflow: hidden;
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
  width: 80%;
  // margin-left: -50px;
}
.second_con{
  width: 100%;
}
.second_con .filed{
  position: relative;
  right: 40px;
}
.region_con{
  width: 100%;
  height: 40px;
  margin-bottom: 22px;
  position: relative;
  right: 40px;
}
.region_con .filed{
  width: 80%;
  // float: right;
  position: absolute;
  top: 0;
  right: 0;
}
.region{
  width:40%;
  position: absolute;
  z-index: 999;
}
.code_con{
  width: 100%;
  height: 40px;
  position: relative;
  right: 40px;
}
.code{
  width: 70%;
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
  width: 50%;
  float: left;
}
// .re_pass .findpass{
//   width: 50%;
//   float: right;
//   z-index: 999;
// }
.fogetpass{
  float: left;
}
.text{
  height: 40px;
  width: 50%;
  position: absolute;
  top: 0;
  right: -200px;
}
</style>
<style>
.harftab .el-tabs__item{
  width:100% !important;
  text-align:center !important;
}
</style>