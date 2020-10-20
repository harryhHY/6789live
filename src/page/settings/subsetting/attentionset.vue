<template>
  <div class="attset">
        <el-row class="setlist">
            <el-button v-for="item in wpList" :key="item.name" 
            :class="{active : active == item.name}" 
            @click="selected(item.name)">{{item.name}}</el-button>
        </el-row>
       <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="足球" prop="footradio">
                    <el-checkbox-group v-model="ruleForm.footradio">
                    <el-checkbox label="选项一" name="footradio"></el-checkbox>
                    <el-checkbox label="选项二" name="footradio"></el-checkbox>
                    <el-checkbox label="选项三" name="footradio"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="篮球" prop="basradio">
                    <el-checkbox-group v-model="ruleForm.basradio">
                    <el-checkbox label="选项一" name="basradio"></el-checkbox>
                    <el-checkbox label="选项二" name="basradio"></el-checkbox>
                    <el-checkbox label="选项三" name="basradio"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他" prop="otherradio">
                    <el-checkbox-group v-model="ruleForm.otherradio">
                    <el-checkbox label="选项一" name="otherradio"></el-checkbox>
                    <el-checkbox label="选项二" name="otherradio"></el-checkbox>
                    <el-checkbox label="选项三" name="otherradio"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
export default {
    name:"attentionset",
    data(){
        return{
            wpList: [
                {
                name: '直播'
                },
                {
                name: '新闻'
                },
                {
                name: '社区'
                }
            ],
            active:'直播',
            ruleForm:{
                footradio: [],
                basradio:[],
                otherradio:[]
            },
            rules:{

            },
        }
    },
    methods: {
        selected(name){
            this.active = name;
        },
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                console.log(this.ruleForm.footradio);
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
}
.active {
   background: #1172ce;
   border: 1px solid #1172ce;
   color: #fff;
 }
</style>