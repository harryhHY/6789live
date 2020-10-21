<template>
    <div>
        <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
        <div class="help_con">
            <div class="help_left">
                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="全部">
                        <allhelps />
                    </el-tab-pane>
                    <el-tab-pane label="账号">
                    </el-tab-pane>
                    <el-tab-pane label="直播">直播</el-tab-pane>
                    <el-tab-pane label="社区">社区</el-tab-pane>
                    <el-tab-pane label="其他">其他</el-tab-pane>
                </el-tabs>
            </div>
            <div class="help_right">
               
            </div>
        </div>
        
        <!-- <i class="iconfont icon-wangluo"></i> -->
    </div>
</template>
<script>
const home_herder = () => import("../../components/home/home_herder");
const allhelps = () => import("./subhelps/allhelps");
export default {
    name:"Person",
    components:{
        home_herder,
        allhelps
    },
    data(){
        return{
            menu_num: "1",
            headerKey:'',
            tabPosition:'left'
        }
    },
    methods:{
        parentEvent(data) {
            this.menu_num = data;
        },
    }
}
</script>
<style lang="less" scoped>
.help_con{
    width: 90%;
    margin: auto;
    margin-top: 20px;
    .help_left{
        width: 80%;
        float: left;
    }
    .help_right{
        width: 18%;
        float: right;
    }
}
.el-tabs{
    height: auto !important;
}
</style>