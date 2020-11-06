<template>
    <div>
        <div class="article_info">
            <p class="p_title">我的发帖</p>
            <div class="article" v-for="(item,index) in articleList" :key="index">
                <div class="article_left">
                    <p class="article_title"><span class="title_tag">{{item.ch_name}}</span>{{item.forum_title}}</p>
                    <div class="article_content" ref="forum_body" v-html="item.forum_body"></div>
                </div>
                <p class="article_right">
                    {{item.addtime_format}}
                </p>
            </div>
            <!-- <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(item, index) in activities"
                :key="index"
                :icon="item.icon"
                :type="item.type"
                :color="item.color"
                :size="item.size"
                :timestamp="item.timestamp"
                placement="top"
                :class="{'odd_line':index%2 != 1}"
                >
                <div :class="{'odd_con':index%2 != 1}">
                    <el-card>
                        <h4>{{item.title}}</h4>
                        <hr>
                        <img :src="item.imgsrc" alt="">
                        <p>{{item.content}}</p>
                    </el-card>
                </div>
                </el-timeline-item>
            </el-timeline> -->
        </div>
        <el-backtop target="body #home"></el-backtop>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            uid:0,
            articleList: [{
                title:"帖子主题",
                content: '帖子详情',
                timestamp: '2018-04-12 20:46',
                type:"足球",
                size: 'large',
                icon: 'el-icon-more'
                }, 
                {
                title:"帖子主题",
                content: '帖子详情',
                type:"篮球",
                timestamp: '2018-04-03 10:46',
                color: '#0bbd87'
                }, 
                {
                title:"帖子主题",
                content: '帖子详情',
                type:"电竞",
                imgsrc:require("@/image/news.jpeg"),
                timestamp: '2019-04-03 20:46',
                size: 'large'
                }
            ]
        }
    },
    methods:{
        getaAticle(){
            this.$axios({
                url:`${this.$api.myprofile}/${this.uid}`,
                method: "get",
                timeout: 3000
            })
            .then(res => {
                console.log(res);
                if (res.data.code == 1) {
                    this.$message({
                        type: 'error', // warning、success
                        message: res.data.msg 
                    }) 
                } else if (res.data.code == 0) {
                    this.articleList = res.data.params.my_forum;
                } else if (res.data.code == -1) {
                    this.$message({
                        type: 'success', // warning、success
                        message: res.data.msg 
                    })
                    // this.$router.push("/") 
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    mounted(){
        this.getaAticle();
        console.log(this.$route.params.nameId)
    }
}
</script>
<style lang="less" scoped>
.article_info{
    width: 100%;
    margin-top: 5px;
    padding-bottom: 50px;
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
    .article{
        width: 1000px;
        height: 96px;
        margin-left: 45px;
        border-bottom: 1px solid #d2d2d2;
        .article_left{
            width: 70%;
            height: 100%;
            float: left;
            padding-left: 35px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            .article_title{
                height: 20px;
                line-height: 20px;
                margin-top: 15px;
                font-size: 18px;
                color: #3c3c3c;
                .title_tag{
                    font-size: 12px;
                    background-color: #82C4FF;
                    color: #ffffff;
                    padding: 3px;
                    border-radius: 5px;
                    margin-right: 5px;
                }
            }
            .article_content{
                height: 15px;
                line-height: 15px;
                margin: 20px 0 0 50px;
                overflow: hidden;
                font-size: 12px;
                color: #848484;
            }
        }
        .article_right{
            width: 15%;
            height: 96px;
            line-height: 96px;
            float: right;
            font-size: 12px;
        }
    }
    .article:hover{
        background-color: aliceblue;
        cursor: pointer;
    }
}

// /deep/.odd_line .el-timeline-item__timestamp.is-top {
//     position: absolute;
//     left: -130px;
//     color: #333333;
// }
// /deep/.el-timeline {
//     padding-left: 50%;

// }
</style>
<style scoped>
.article_content >>> img{
    width: 115px;
    height: 73px;
    display: none;
}
.article_content >>> p{
    width: 100%;
    height: 15px;
    line-height: 15px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.article_content >>> a{
    pointer-events:none;
}

</style>
