<template>
  <div>
        <el-form :label-position="labelPosition" :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="性别" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="请选择性别">
                <el-option label="男" value="boy"></el-option>
                <el-option label="女" value="girl"></el-option>
                <el-option label="保密" value="xxx"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="生日" required>
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="星座">
                    <el-input v-model="ruleForm.constellation"></el-input>
                </el-form-item>
            </el-form-item>
            <br>
            <el-form-item label="地区" prop="area">
                <el-select v-model="ruleForm.area" placeholder="请选择地区">
                    <el-option label="中国" value="china"></el-option>
                    <el-option label="海外" value="other"></el-option>
                    <el-option label="保密" value="secrite"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="爱好">
                <el-input v-model="ruleForm.hobby"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="个人简介" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
    name:"Basicdata",
    data(){
        return{
            ruleForm: {
                gender: 'xxx',
                date1: '',
                constellation:"",
                area:"",
                hobby:"",
                desc: ''
                },
                rules: {
                constellation: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            labelPosition:'right'
        }
    },
    methods: {
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
/deep/ .el-textarea{
    width: 200%;
}
</style>>

