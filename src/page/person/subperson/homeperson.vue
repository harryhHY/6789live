<template>
    <div>
        <div class="person_info">
            <p>个人信息</p>
            <p>生日:1999-09-09<span>性别:</span></p>
            <p>星座:<span>地区:</span></p>
            <p>爱好:</p>
        </div>
        <div class="article_info">
            <el-timeline :reverse="reverse">
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
            </el-timeline>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            //帖子排序
            reverse:true,
            activities: [{
                title:"帖子主题",
                content: '帖子详情',
                timestamp: '2018-04-12 20:46',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more'
                }, 
                {
                title:"帖子主题",
                content: '帖子详情',
                timestamp: '2018-04-03 10:46',
                color: '#0bbd87'
                }, 
                {
                title:"帖子主题",
                content: '帖子详情',
                imgsrc:require("@/image/news.jpeg"),
                timestamp: '2019-04-03 20:46',
                size: 'large'
                }, 
                {
                title:"帖子主题",
                content: '帖子详情',
                timestamp: '2020-04-03 05:00'
            }]
        }
    }

}
</script>
<style lang="less" scoped>
.person_info{
    width: 100%;
    height: 100px;
    padding: 10px 0;
    background-color: #b3c9ca;
    p{
        height: 25px;
        line-height: 25px;
        margin-left:10px;
        span{
            margin-left: 30px;
        }
    }
}
.article_info{
    width: 100%;
    margin-top: 20px;
}

/deep/.odd_line .el-timeline-item__timestamp.is-top {
    position: absolute;
    left: -130px;
    color: #333333;
}
/deep/.el-timeline {
    padding-left: 50%;

}
</style>
<style>
.odd_con .el-card {
    color: darkorchid;
    position: relative;
    left: -110%;
    top:25px;
}
</style>
