<template>
  <div>
      <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
      <div class="detal">
            <div class="list_con">
                <div class="title">
                    <p>
                        {{detail_list.title}}
                        <span class="title_time">{{detail_list.timer}}</span>
                    </p>
                </div>
                <hr>
                <div class="content_con">
                    <div class="content">
                        {{detail_list.content}}
                    </div>
                    <!-- <span href="#" @click="toSuggetDetail(index)">详情</span> -->
                    <img v-for="(images,index) in detail_list.imgList" :key="index" :src="images" alt="">
                </div>
            </div>
            <div class="reply_con">
                <img :src="reply_list.img" alt="">
                <p><span>{{reply_list.user}}</span><span>{{reply_list.timer}}</span></p>
                <div class="content">
                    {{reply_list.content}}
                </div>
            </div>
            <div>
                <replyeditor @receiveMsg="handlerMsg"/>
            </div>
      </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const replyeditor = () => import("../../components/editor/replyEditor");
export default {
    name:"suggestdetail",
    components:{
        home_herder,
        replyeditor
    },
    data(){
        return{
            menu_num: "1",
            headerKey:'',
            detail_list:
            {
                id:1,
                title:"建议标题",
                timer:"2020-20-20",
                content:"dolor sit amet lacus m socis mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
                imgList:[
                    require("@/image/news.jpeg"),
                    require("@/image/news.jpeg"),
                    require("@/image/news.jpeg")
                ],
            },
            reply_list:{
                id:1,
                user:"官方回复",
                img:"",
                timer:"2020-10-21",
                content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio."
            }           
        }
    },
    methods:{
        parentEvent(data) {
            this.menu_num = data;
        },
        //接收回复内容
        handlerMsg(data){
            console.log(data);
        }
    },
    mounted(){
        console.log(this.$route.params.name);
    }
}
</script>
<style lang="less" scoped>
.detal{
    width: 80%;
    margin: auto;
    .list_con{
        margin: 20px 0;
        .title{
            font-size: 16px;
            font-weight: 600;
            .title_time{
                float: right;
                font-size: 12px;
            }
        }
        .content_con{
            font-size: 14px;
            .content{
                height: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            a{
                float: right;
                font-size: 12px;
            }
            img{
                width: 20%;
                margin-right: 1%;
            }
        }
    }
}
</style>