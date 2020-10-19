<template>
  <div class="attset">
        <el-row class="setlist">
            <el-button v-for="item in wpList" :key="item.name" 
            :class="{active : active == item.name}" 
            @click="selected(item.name)">{{item.name}}</el-button>
        </el-row>
        <div>
            <p>足球</p>
            <el-radio-group :id="id" v-model="footradio" @change="footHandler(id,footradio)">
                <el-radio :label="1">选项一</el-radio>
                <el-radio :label="2">选项二</el-radio>
                <el-radio :label="3">选项三</el-radio>
            </el-radio-group>
        </div>
        <div>
            <p>篮球</p>
            <el-radio-group v-model="basradio">
                <el-radio :label="4">选项一</el-radio>
                <el-radio :label="5">选项二</el-radio>
                <el-radio :label="6">选项三</el-radio>
            </el-radio-group>
        </div>
        <div>
            <p>综合</p>
            <el-radio-group v-model="otherradio">
                <el-radio :label="7">选项一</el-radio>
                <el-radio :label="8">选项二</el-radio>
                <el-radio :label="9">选项三</el-radio>
            </el-radio-group>
        </div>
        <div></div>
        <br>
        <el-button type="primary" @click="confirm">修改</el-button>
        <el-button  @click="cancel">修改</el-button>
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
            footradio:1,
            basradio:4,
            otherradio:7,
            id:5
        }
    },
    methods: {
        selected(name){
            this.active = name;
        },
        footHandler(id,value){
            console.log(id,value);
        },
        confirm(){

        },
        cancel(){

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