<template>
  <div>
    <p class=title>实名认证资料将作为领奖的唯一凭证；请如实填写，提交后不可更改。</p>
    <div class="authen">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="登录密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="checkPass">
            <el-input type="text" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="age">
            <el-input type="" v-model="ruleForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="canclebtn" @click="resetForm('ruleForm')">取消</el-button>   
            <el-button class="submitbtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
    </div>  
  </div>
</template>

<script>
export default {
    name:"authentication",
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
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass,required:"true", trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2,required:"true", trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, required:"true", trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
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
.title{
  font-size: 12px;
  color: #ff5858;
  text-align: center;
  margin-bottom: 5px;
}
.authen{
  width: 400px;
  margin: auto
}
.canclebtn{
    width: 120px;
    // margin-left: -50px;
}
.submitbtn{
    width: 120px;
    margin-left: 20px;
}
</style>