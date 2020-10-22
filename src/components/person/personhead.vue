<template>
    <div class="head_bg">
        <div>
            <report v-if="showReport" :visible = "visible" @chidVisible="getVisible"/>
        </div>
        <div>
            <div class="avator_con">
                <img :src="avator" alt="">
            </div>
            <div class="des_con">
                <div>
                    <p class="p1">爱生活爱体育</p>
                    <p>又是玩命的一天</p>
                </div>
                <div class="btn_con">
                    <div class="btn">
                        <el-button type="info" plain @click="reportHandler('id')">举报</el-button>
                        <el-button type="primary">加关注</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="timer">
            <div class="date">
                {{date}}
            </div>
            <div class="weekend">
                {{nowWeekend}}
            </div>
        </div>
        <div class="info">
            <p>关注：0</p>
            <p>粉丝：0</p>
        </div>
    </div>
</template>
<script>
import report from "./report"
export default {
    name:"personhead",
    components:{
        report
    },
    data(){
        return {
            avator:require("@/image/news.jpeg"),
            nowWeekend:"",
            date:"",
            visible:false,
            showReport:false
        }
    },
    methods:{
        reportHandler(){
            console.log(1111);
            this.showReport = !this.showReport;
            this.visible = true;
        },
        getVisible(value){
            this.showReport = value;
        }
    },
    mounted(){
        let weekend ="周" + "日一二三四五六".charAt(new Date().getDay());
        this.nowWeekend = weekend;
        let todayDate = new Date();
        this.date = todayDate.getDate()
    }
}
</script>
<style lang="less" scoped>
.head_bg{
    width: 100%;
    height: 200px;
    background-color: #f5f5c2;
    position: relative;
    .avator_con{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        position: absolute;
        bottom: 10px;
        left: 10px;
        overflow: hidden;
        border: 10px solid #2e2929;
        z-index: 99;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .des_con{
        width: 40%;
        height: 70px;
        position: absolute;
        left: 120px;
        bottom: 20px;
        background-color: #383333;
        div{
            width: 50%;
            height: 70px;
            float: left;
            p{
                height: 35px;
                line-height: 35px;
                margin-left: 50px;
                color: #FFF;
            }
            .p1{
                font-size: 20px;
            }
        }
        .btn_con{
            .btn{
                float: right;
                margin-top: 5px;
                .el-button{
                line-height: 20px;
                padding:2px 10px;
            }
            }
            
        }
    }
    .timer{
        width: 70px;
        height: 100px;
        position: absolute;
        right: 15px;
        top: 15px;
        text-align: center;
        border-radius: 5px;
        .date{
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            font-weight: 700;
            background-color: #eee9dc;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
        }
        .weekend{
            height: 40px;
            line-height: 40px;
            background-color: #c4971d;
            border-radius: 5px;
        }
    }
    .info{
        width: 200px;
        position: absolute;
        right: 0;
        bottom: 10px;
        background-color: #2e2929;
        color: #FFF;
        padding:5px 10px;
        text-align: center;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        p{
            width: 100px;
            float: left;
        }
    }
}
</style>