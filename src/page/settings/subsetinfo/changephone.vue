<template>
  <div class="changephone">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="当前手机" prop="phone">
          <el-input v-model="ruleForm.phone" autocomplete="off"><template slot="prepend">+86</template></el-input>          
        </el-form-item>
        <el-form-item label="登录密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新手机" prop="checkphone">
          <el-input type="" v-model="ruleForm.checkphone" autocomplete="off"><template slot="prepend">+86</template></el-input>
        </el-form-item>
        <div class="code_con">
          <el-form-item class="filed coder" prop="code" label="验证码">
            <!-- <img class="password" :src="imgs.code" alt=""> -->
            <el-input class="code" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
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
        <el-form-item class="btn_box">
          <el-button class="submitbtn" type="primary" @click="submitForm('ruleForm')" v-preventReClick>提交</el-button>
          <el-button class="canclebtn" @click="resetForm('ruleForm')">取消</el-button>            
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    name:"changephone",
    data(){
      //用户名登录
    let regphone = /^1[3456789]\d{9}$/;
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
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
      var phoneNumber2 = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入新手机号'));
        } else if (value == this.ruleForm.phone) {
          callback(new Error('手机号重复！'));
        } else if (!regphone.test(value)) {
          callback(new Error('手机号格式错误'));
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
        ruleForm: {
          phone:'',
          pass: '',
          checkphone: '',
          code: ''
        },
        rules: {
          phone: [
            { validator: phoneNumber, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkphone: [
            { validator: phoneNumber2, trigger: 'blur' }
          ],
          code: [
            { required:true,message:"验证码不能为空", trigger: 'blur' }
          ]
        },
        count:"",
        show: true,
        timer:null
      }
    },
    methods:{
      //base64转码
      encode(str){
        return  str == null ? null : btoa(encodeURIComponent(str));
      },
      //获取验证码倒计时
      getVerify() {
        let regphone = /^1[3456789]\d{9}$/;
        if(this.ruleForm.checkphone != '' && regphone.test(this.ruleForm.checkphone)){
          this.$axios({
              url:`${this.$api.getCode}/${this.ruleForm.checkphone}/3`,
              method: "post",
              timeout: 3000
          })
          .then(res => {
            console.log(res);
              if(res.data.code == 1) {
                  this.$message({
                      type: 'error', // warning、success
                      message: '请一分钟后再试' 
                  }) 
              } else if (res.data.code == 0) {
                this.$message({
                  type: 'success', // warning、success
                  message: "验证码已发送"
                })
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
              } else if (res.data.code == -1) {
                  this.$message({
                      type: 'success', // warning、success
                      message: res.data.msg 
                  })
              }
          })
          .catch(error => {
              // console.log(error);
              this.$message({
                  type: 'warning', // warning、success
                  message: '请求频繁，请稍后再试'
              })
          });
        }else{
          this.$message({
            type: 'warning', // warning、success
            message: '请注意手机号格式和不能为空'
          })
        }
          
      // }
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$api.changephone.changemobile({
                pwd:this.encode(this.ruleForm.pass),
                old_mobile:this.$inHTMLData(this.ruleForm.phone),
                new_mobile:this.$inHTMLData(this.ruleForm.checkphone),
                vcode:this.$inHTMLData(this.ruleForm.code)
            }).then(res => {
                // console.log(res);
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
                    this.$refs[formName].resetFields();                            
                } else if (res.data.code == -1) {
                    this.$message({
                        type: 'warning', // warning、success
                        message: res.data.msg 
                    })
                    this.$router.push("/")
                }
            })
            .catch(error => {
                this.$message("设置失败")
            })
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
.changephone{
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