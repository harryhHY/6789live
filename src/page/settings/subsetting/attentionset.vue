<template>
  <div class="attset">
        <el-row class="setlist">
            <el-button v-for="item in wpList" size="mini" :key="item.name" 
            :class="[{active : active == item.name},'changebtn']" 
            @click="selected(item.id)">{{item.name}}</el-button>
        </el-row>
       <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <div class="column"><div><img :src="foot" alt=""></div></div>
                <el-form-item label="" prop="footradio">
                    <el-checkbox-group v-model="ruleForm.footradio">
                    <el-checkbox label="选项一" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项二" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="footradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <div class="column"><div><img :src="basket" alt=""></div></div>
                <el-form-item label="篮球" prop="basradio">
                    <el-checkbox-group v-model="ruleForm.basradio">
                    <el-checkbox label="选项一" name="basradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项二" name="basradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="basradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <div class="column"><div><img :src="other" alt=""></div></div>
                <el-form-item label="其他" prop="otherradio">
                    <el-checkbox-group v-model="ruleForm.otherradio">
                    <el-checkbox label="选项一" name="otherradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项二" name="otherradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    <el-checkbox label="选项三" name="otherradio"><img class="team" :src="avator" alt="">巴塞罗那</el-checkbox>
                    </el-checkbox-group>
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
    name:"attentionset",
    data(){
        return{
            wpList: [
                {
                    id:1,
                    name: '直播'
                },
                {
                    id:2,
                    name: '新闻'
                },
                {
                    id:3,
                    name: '社区'
                }
            ],
            active:'1',
            ruleForm:{
                footradio: [],
                basradio:[],
                otherradio:[]
            },
            rules:{

            },
            avator:require("@/image/news.jpeg"),
            foot:require("@/image/imgs/foot.png"),
            basket:require("@/image/imgs/basket.png"),
            other:require("@/image/imgs/other.png"),
        }
    },
    methods: {
        selected(name){
            this.active = name;
            console.log(this.active);
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
    },
    mounted(){
        // 获取频道列表
        // this.$api.chanel.channelist(
        //   {type:this.active}
        // ).then(res => {
        //     console.log(res);
        //     if (res.data.code == 1) {
        //         this.$message({
        //         type: 'error', // warning、success
        //         message: res.data.msg 
        //         }) 
        //     } else if (res.data.code == 0) {
        //         this.$message({
        //         type: 'success', // warning、success
        //         message: res.data.msg 
        //         })                            
        //     } else if (res.data.code == -1) {
        //         this.$message({
        //         type: 'success', // warning、success
        //         message: res.data.msg 
        //         })
        //     }
        // })
        // .catch(error => {
        // this.$message("获取失败");
        // })
    }
}
</script>

<style lang="less" scoped>
.attset{
    width: 1131px;
    // height: 700px;
    position: relative;
    left: -200px;
    z-index: 999;
    .setlist{
        margin-bottom: 5px;
    }
    .changebtn{
        width: 100px;
        border-radius: 20px;
    }
    .team{
        width: 35px;
        height: 35px;
        position: relative;
        border-radius: 50%;
    }
}
.column{
    width: 100%;
    height: 28px;
    background:linear-gradient(to right,#F0F0EF,#F8F9FB);
    margin-bottom:10px;
    img{
        height: 28px;
    }
}
.active {
   background: #014681;
   border: 1px solid #014681;
   color: #FFF;
 }
 .canclebtn{
    width: 120px;
    margin-left: 250px;
}
.submitbtn{
    width: 120px;
    margin-left: 10px;
}
 /deep/.el-checkbox__label{
    line-height: 35px !important;
}
/deep/.el-tabs__content{
    overflow: visible !important;
}
/deep/.el-form-item{
    margin-bottom: 10px;
}
</style>
<style>
.el-tabs__content{
    overflow: visible;
}
</style>