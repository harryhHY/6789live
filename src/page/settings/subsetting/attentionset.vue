<template>
  <div class="attset">
        <el-row class="setlist">
            <el-button v-for="item in wpList" size="mini" :key="item.name" 
            :class="[{active : active == item.id},'changebtn']" 
            @click="selected(item.id)">{{item.name}}</el-button>
        </el-row>
       <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="" prop="footradio" v-for="(data,index) in checkboxList" :key="index">
                    <div class="column"><div><img :src="foot" alt=""></div></div>
                    <el-checkbox-group v-model="ruleForm.footradio" @change="handleCheckedCitiesChange">
                    <el-checkbox :label="item.id" name="footradio" :checked="item.is_followed == 0 ? false : true" v-for="(item,index) in data" :key="index">
                        <img class="team" :src="imgurl + item.ch_logo" alt="">
                        {{item.ch_name}}
                    </el-checkbox>
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
            checkboxList:{},
            imgurl:this.JuheHOST,
            checkedbox:[]
        }
    },
    methods: {
        handleCheckedCitiesChange(value){
            this.checkedbox = value;
            console.log(this.checkedbox);
        },
        selected(name){
            this.active = name;
            console.log(this.active);
            //清空其他页面已选项
            // this.checkedbox = [''];
            console.log(this.checkedbox);
            //根据name获取其他类别
            this.getChanelList()
        },
        submitForm(ruleForm) {
            this.$api.editchanel.editerchanel({
                channel:this.checkedbox
            }).then(res => {
                console.log(res);
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
                } else if (res.data.code == -1) {

                }
            })
            .catch(error => {
                this.$message("请检查关注项")
            })
            // this.$refs[ruleForm].validate((valid) => {
            // if (valid) {
            //     console.log(this.ruleForm.footradio);
            //     alert('submit!');
            // } else {
            //     console.log('error submit!!');
            //     return false;
            // }
            // });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 获取频道列表
        getChanelList(){
            let params = { type : this.active}
            this.$api.attchanelist.attchanel(
                params
            ).then(res => {
                console.log(res);
                if (res.data.code == 1) {
                    this.$message({
                        type: 'error', // warning、success
                        message: res.data.msg 
                    }) 
                } else if (res.data.code == 0) {
                    // this.$message({
                    //     type: 'success', // warning、success
                    //     message: res.data.msg 
                    // })
                    this.checkboxList = res.data.params;                
                } else if (res.data.code == -1) {
                    this.$message({
                        type: 'success', // warning、success
                        message: res.data.msg 
                    })
                }
            })
            .catch(error => {
                this.$message("获取失败");
            })
            // this.$axios({
            // url:`${this.$api.chanel}/${this.active}`,
            // method: "get",
            // timeout: 3000
            // })
            // .then(res => {
            //     this.checkboxList = res.data.params;
            //     console.log(res.data.params);
            // })
            // .catch(error => {
            //     console.log(error);
            // });
        }
    },
    mounted(){
        
        
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