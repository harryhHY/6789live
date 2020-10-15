<template>
  <div class="login" clearfix>
      <div class="step">
        <el-steps :active="active" finish-status="success">
            <el-step title="确认账号"></el-step>
            <el-step title="安全验证"></el-step>
            <el-step title="重置密码"></el-step>
        </el-steps>
      </div>      
  <div class="login-wrap first_wrap" v-if="active == 0">
      <el-row type="flex" justify="center">
          <el-form ref="confirmUser" :model="confirmUser" :rules="confirmRules" status-icon label-width="80px" class="second_con">
            <el-form-item  class="filed" prop="username" label="">
              <el-input v-model="confirmUser.username" @blur="checkBlur($event)" placeholder="请填写用户账号，手机号或邮箱" prefix-icon></el-input>
              <!-- <div class="text"><el-progress :percentage="50" status="exception"></el-progress></div> -->
            </el-form-item>
            <el-form-item>
              <el-button class="first_btn" type="primary" icon="el-icon-upload" @click="doConfirm('confirmUser')">下一步</el-button>
            </el-form-item>
            <router-link to="/login" class="register">记得密码直接登录</router-link>
            <!-- <router-link to="/" class="fogetpass">忘记密码</router-link> -->
          </el-form>
        </el-row>
    </div>
  <div class="login-wrap sencond_wrap" v-if="active == 1">
      <el-row type="flex" justify="center">
          <el-form ref="register" :model="register" :rules="registerRules" status-icon label-width="80px" class="second_con">
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
            <el-form-item>
              <el-button class="sencond_btn" type="primary" icon="el-icon-upload" @click="forward()">上一步</el-button>
              <el-button class="sencond_btn" type="primary" icon="el-icon-upload" @click="doRegiste('register')">下一步</el-button>
            </el-form-item>
            <router-link to="/login" class="register">使用已有账户登录</router-link>
            <!-- <router-link to="/" class="fogetpass">忘记密码</router-link> -->
          </el-form>
        </el-row>
    </div>
  <div class="login-wrap third_wrap" v-if="active == 2">
      <el-row type="flex" justify="center">
          <el-form ref="resetpass" :model="resetpass" :rules="resetpassRules" status-icon label-width="80px" class="second_con">
            <el-form-item class="filed" prop="password" label="">
              <el-input v-model="resetpass.password" show-password placeholder="密码：6-16位密码，区分大小写" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  class="filed" label="" prop="checkPass">
              <el-input type="password" show-password v-model="resetpass.checkPass" placeholder="确认密码" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button class="third_btn" type="primary" icon="el-icon-upload" @click="resetPass('resetpass')">提 交</el-button>
            </el-form-item>
            <!-- <router-link to="/login" class="register">使用已有账户登录</router-link> -->
            <!-- <router-link to="/" class="fogetpass">忘记密码</router-link> -->
          </el-form>
        </el-row>
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
        //第一步
        confirmUser:{
            username: "",
        },
        //第二步
      register: {
        region:"+86",
        phoneNum:"",
        code:"",
      },
      //第三步
      resetpass:{
        password: "",
        checkPass:"",
      },
      // 第一步规则
      confirmRules:{
          username: [
          { validator: validateName, trigger: 'blur' }
        ],
      },
      //第二步规则
      registerRules: {
        phoneNum:[
          { validator: phoneNumber, trigger: 'blur' }
        ]
      },
      //第三步规则
      resetpassRules:{
          password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
      checked: false,
      //步骤条状态
      active: 0
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
    //第一步提交
    doConfirm(confirmUser) {
        this.active = this.active+1;
        this.$refs['confirmUser'].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    //上一步
    forward(){
        console.log(111);
        this.active = this.active-1;
    },
    //第二步提交
    doRegiste(register) {
        this.active = this.active+1;
        this.$refs['register'].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    //第三步提交
    resetPass(resetpass) {
        this.active = this.active+1;
        this.$refs['resetpass'].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    //移除表单
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
  height:600px;
  // background: url("../assets/images/login_bg.png") no-repeat;
  background-size: cover;
  position:relative;
  top:100px;
  width: 400px;
  // height: 300px;
  margin: auto;
  // overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
  z-index:999;
}
.filed{
    width: 100%;
    height: 100%;
  margin-bottom:22px;
}
.third_wrap .filed{
    height: 40px;
}
.third_wrap .third_btn{
    width: 100%;
}
.first_wrap .first_btn{
    width: 100%;
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
.region_con{
  width: 100%;
  height: 40px;
  margin-bottom: 22px;
//   position: relative;
//   right: 40px;
}
.region_con .filed{
  width: 80%;
  // float: right;
  position: absolute;
  top: 0;
  right: 0;
}
.region{
  width:20%;
  position: absolute;
  z-index: 999;
}
.code_con{
  width: 100%;
  height: 40px;
//   position: relative;
//   right: 40px;
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
.step{
    width: 70%;
    margin: auto;
    margin-top: 50px;
}
.first_wrap .el-input{
    width: 100% !important;
}
.second_con .el-form-item__content{
    margin-left:0 !important;
}
.sencond_btn{
    width: 48%;
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