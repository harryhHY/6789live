<template>
    <div class="">
        <div :class="['subatten',{'subatten2':(index+1) % 4 !== 0}]" v-for="(item,index) in attentionData" :key="index" @click="getIndex(index)">
            <!-- <p class="guanzhu" :style="{ width: newWidth < 100 ? 100 : newWidth + 'px' }">2222</p> -->
            <div class="attenhead">
                <img :src="item.person_avotor" alt="">
                <!-- <el-button class="attenbtn" type="primary">取消关注</el-button> -->
                <p class="attendes">{{item.sign}}</p>
            </div>
            <div class="attenmid">
                <div>
                    <p>帖子</p>
                    <p class="article_one" :style="{ width: item.one>100 ? 100 + 'px': item.one + 'px'}" >{{item.one}}</p>
                </div>
                <div>
                    <p>粉丝</p>
                    <p class="fans_two" :style="{ width: item.two>100 ? 100 + 'px': item.two + 'px'}">{{item.two}}</p>
                </div>
                <div>
                    <p>关注</p>
                    <p class="atten_three" :style="{ width: item.three>100 ? 100 + 'px': item.three + 'px'}">{{item.three}}</p>
                </div>
            </div>
            <div class="attenfoot">
                {{item.desc}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            imgsrc:require("@/image/news.jpeg"),
            colorStyle: 'red',
            background: 'blue',
            newWidth:10,
            attentionData:[
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:101,
                    two:26,
                    three:85,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:50,
                    two:68,
                    three:39,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:48,
                    two:268,
                    three:58,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:28,
                    two:8,
                    three:35,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:158,
                    two:8,
                    three:100,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:58,
                    two:8,
                    three:0,
                    desc:"专业就是不一样+++++++++++++++++++"
                },
                {
                    person_avotor:require("@/image/news.jpeg"),
                    sign:"小清新",
                    one:58,
                    two:268,
                    three:30,
                    desc:"专业就是不一样+是的hi上帝是来访接待来访+回复收到回复对方hi后方i的花费多少覅打回访电话"
                }
            ]
        }
    },
    methods:{
        getIndex(i){
            console.log(i);
        }
    },
    mounted(){
        console.log(1>90 ? 200 :300);
    }

}
</script>
<style lang="less" scoped>
.subatten{
    width: 20%;
    height: 300px;
    float: left;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0px 1px 1px 1px #e7e2e2;
    transition: all .2s linear;
    border-radius: 1px;
    .attenhead{
        height: 100px;
        width: 100%;
        background-color: aquamarine;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .attenbtn{
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 12px;
            color: #FFF;
            background-color: #CACACA;
            border: none;
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
        }
        .attendes{
            position: absolute;
            top: 70px;
            left: 10px;
        }
    }
    .attenmid{
        height: 135px;
        width: 100%;       
        p{
            height: 25px;
            line-height: 25px;
            padding: 0 5px;
            display: inline-block;
        }
        .article_one{
            background-color: #3d7aeb;
            margin: 10px 0;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            text-align: right;
            padding-right: 10px;
        }
        .fans_two{
            background-color: #d40b2c;
            margin: 10px 0;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            text-align: right;
            padding-right: 10px;
        }
        .atten_three{
            background-color: #0bd447;
            margin: 10px 0;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            text-align: right;
            padding-right: 10px;
        }
    }
    .attenfoot{
        height: 50px;
        margin-bottom: 15px;
        padding:0 5px;
        line-height: 25px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
}
.subatten:hover{
    transform: translateY(-3px);
    box-shadow: 0 5px 10px #CACACA;
}
.subatten2{
    // margin-right:0;
    margin-right: 6.5%;
}
</style>