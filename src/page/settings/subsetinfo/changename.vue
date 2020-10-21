<template>
  <div>
      <p>当前昵称：<span>{{name}}</span></p>
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="设置昵称" prop="name">
            <el-input placeholder="请输入2-14个字;只支持数字、字母、汉字" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <p>* 昵称仅可设置一次，提交后不能再修改，请慎重考虑</p>                 
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    name:"changename",
    data(){
      return{
        name:"",
        ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入2-14个字;只支持数字、字母、汉字', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    props:{
      infoParams:{
        type:Object,
        default:function(){

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
    },
    mounted(){
      this.name = this.infoParams.name
    }
}
</script>

<style>

</style>