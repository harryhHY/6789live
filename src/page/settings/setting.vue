<template>
  <div>
        <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
        <div class="tabs_con">
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本资料" name="first"><basicdata /></el-tab-pane>
                <el-tab-pane label="账号信息" name="second"><accountinfo /></el-tab-pane>
                <el-tab-pane label="关注设置" name="third"><attentionset /></el-tab-pane>
                <el-tab-pane label="隐私设置" name="fourth">隐私设置</el-tab-pane>
            </el-tabs>
        </div>        
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const basicdata = () => import("./subsetting/basicdata");
const accountinfo = () => import("./subsetting/accountinfo");
const attentionset = () => import("./subsetting/attentionset");
export default {
    name:"setting",
    components:{
        home_herder,
        basicdata,
        accountinfo,
        attentionset
    },
    data(){
        return{
            menu_num: "1",
            headerKey:'',
            activeName: 'first'
        }
    },
    methods:{
        parentEvent(data) {
            this.menu_num = data;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style lang="less" scoped>
.tabs_con {
    width: 1200px;
    margin: auto;
    margin-top: 50px;
}
</style>>

