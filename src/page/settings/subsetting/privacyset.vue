<template>
  <div class="attset">
       <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="个人基本资料" prop="basic">
                    <el-radio-group v-model="ruleForm.basic" :id="ider" @change="changeRadio($event)">
                    <el-radio label="公开"></el-radio>
                    <el-radio label="尽自己可见"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="我的关注" prop="attention">
                    <el-radio-group v-model="ruleForm.attention">
                    <el-radio label="公开"></el-radio>
                    <el-radio label="尽自己可见"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="我的粉丝" prop="fans">
                    <el-radio-group v-model="ruleForm.fans">
                    <el-radio label="公开"></el-radio>
                    <el-radio label="尽自己可见"></el-radio>
                    </el-radio-group>
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
    name:"privacyset",
    data(){
        return{
            ruleForm:{
                basic: "",
                attention:"",
                fans:""
            },
            rules:{

            },
            ider:"资料"
        }
    },
    methods: {
        changeRadio(e){
            console.log(e);
        },
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm.basic,this.ruleForm.attention,this.ruleForm.fans);
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
.attset{
    width: 500px;
    margin: auto;
}
 .canclebtn{
    width: 120px;
}
.submitbtn{
    width: 120px;
    margin-left: 10px;
}
</style>