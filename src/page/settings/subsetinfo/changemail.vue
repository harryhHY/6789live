<template>
  <div class="changemail">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新邮箱" prop="checkPass">
          <el-input type="" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <div class="code_con">
          <el-form-item class="filed coder" prop="code" label="验证码">
            <!-- <img class="password" :src="imgs.code" alt=""> -->
            <el-input class="code" v-model="ruleForm.code" show-password placeholder="请输入验证码" autocomplete="off"></el-input>
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
        <el-form-item>
          <el-button class="submitbtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button class="canclebtn" @click="resetForm('ruleForm')">取消</el-button>  
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    name:"changemail",
    data(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          code: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        count:"",
        show: true,
        timer:null
      }
    },
    methods:{
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
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
    }
}
</script>

<style lang="less" scoped>
.changemail{
  width: 500px;
}
.code_con{
  width: 100%;
  height: 40px;
  .coder{
    width: 70%;
    float: left;
  }
  .code_btn{
    width: 30%;
    float: right;
    border-radius: 20px;
    color: #079def;
    background-color: #FFF;
    border: 1px solid #079def;
  }
}
.canclebtn{
    height: 40px;
    width: 150px;
    position: relative;
}
.submitbtn{
    height: 40px;
    width: 150px;
    position: relative;
    top: 40px;
}
</style>