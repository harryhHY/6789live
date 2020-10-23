<template>
<div>
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
                    <p class="p1">用户名：爱生活爱体育</p>
                    <p class="p2">个性签名：又是玩命的一天</p>
                    <div class="info">
                        <p>关注：0</p>
                        <p>粉丝：0</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <el-button class="reportbtn" size="mini" type="info" plain @click="reportHandler('id')">举报</el-button>
            <el-button class="attentionbtn" size="mini" type="primary">+ 加关注</el-button>
        </div>
        <!-- <div class="timer">
            <div class="date">
                {{date}}
            </div>
            <div class="weekend">
                {{nowWeekend}}
            </div>
        </div> -->
    </div>
    <div class="person_info">
        <p class="p_title">个人信息</p>
        <div class="info_detail">
            <p>生日:1999-09-09</p>
            <p>性别:</p>
            <p>星座:</p>
            <p>地区:</p>
            <p>爱好:</p>
        </div>
        
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
.person_head{
    overflow: hidden;
}
.head_bg{
    width: 100%;
    height: 178px;
    background-color: #F8FCFF;
    position: relative;
    .avator_con{
        width: 108px;
        height: 108px;
        border-radius: 50%;
        position: absolute;
        top: 35px;
        left: 30px;
        overflow: hidden;
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
        left: 168px;
        top: 42px;
        font-weight: 500;
        div{
            height: 70px;
            float: left;
            p{
                height: 30px;
                line-height: 30px;
                margin-left: 50px;
            }
            .p1{
                font-size: 20px;
                color: #1a90fc;
            }
            .p2{
                font-size: 14px;
                color: #848484;
            }
            .info{
                p{
                    float: left;
                    font-size: 14px;
                    color: #848484;
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
}
.reportbtn,.attentionbtn{
    width: 84px;
    border-radius: 20px;
    color: #FD8C5E;
    position: absolute;
    top: 42px;
}
.attentionbtn{
    color: #FD8C5E;
    border-color: #FCBF31;
    background-color: #FFF;
    right: 148px;
}
.reportbtn{
    color:#3c3c3c;
    border-color: #d2d2d2;
    background-color: #d2d2d2;
    right: 48px;
}
.person_info{
    width: 100%;
    height: 143px;
    padding: 10px 0;
    .info_detail{
        margin-top: 20px;
        p{
            height: 30px;
            width: 40%;
            font-size: 14px;
            color: #aeaeae;
            float: left;
            line-height: 30px;
            padding-left: 50px;
            span{
                margin-left: 30px;
            }
        }
    }
    
    .p_title{
        border-left: 5px solid #014681;
        color: #014681;
        font-size: 18px;
        height: 20px;
        line-height: 20px;
        padding:0 10px;
        font-weight: 600;
        position: relative;
    }
    .p_title:after{
        content: '';
        position: absolute;
        top: 50%;
        height: 1px;
        width: 950px;
        background-color: #d2d2d2;
        left: 100px;
    }
}
</style>