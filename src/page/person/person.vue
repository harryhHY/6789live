<template>
    <div>
        <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
        <div class="person_wrap">
            <personhead />
            <div class="person_left">
                <div class="person_board">
                    <ul>
                        <router-link
                        tag="li"
                        active-class="active"
                        v-for="(item,index) in personNav"
                        :to="'/person/'+ item.id"
                        :key="index"
                        >
                        {{item.title}}
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="person_right">
                <router-view></router-view>
            </div>
            <!-- <publishEditor :editorParams = "editorDataPub" /> -->
            <!-- <publishEditor /> -->
            <!-- <commonEditor /> -->
        </div>
        
        <!-- <i class="iconfont icon-wangluo"></i> -->
    </div>
</template>
<script>
const home_herder = () => import("../../components/home/home_herder");
const publishEditor = () => import("../../components/editor/editor");
const commonEditor = () => import("../../components/editor/commonEditor");
const personhead = () => import("../../components/person/personhead");
export default {
    name:"Person",
    components:{
        home_herder,
        personhead,
        publishEditor,
        commonEditor
    },
    data(){
        return{
            menu_num: "1",
            headerKey:'',
            personNav:[
                {
                    title:"主页",
                    id:"homeperson"
                },
                {
                    title:"帖子",
                    id:"article"
                },
                {
                    title:"关注",
                    id:"attention"
                },
                {
                    title:"粉丝",
                    id:"fans"
                },
            ],
            editorDataPub:{
                bold:"bold",
                fontName:"fontName",
                underline:"underline",
                strikeThrough:"strikeThrough",
                indent:"indent",
                foreColor:"foreColor",
                emoticon:"emoticon",
                image:"image",
                splitLine:"splitLine",
                undo:"undo",
                redo:"redo",
                //是否可以粘贴图片
                isNoPaste:true
            }
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
.person_wrap{
    width: 90%;
    margin: auto;
}
.person_left{
    width: 19%;
    float: left;
    text-align: center;
}
.person_right{
    width: 80%;
    float: left;
    margin-left: 1%;
}
.person_board{
    padding: 20px 0;
    background-color: #b3a5a5;
    .ul{
        margin-top: 20px;
    }
    li{
        padding: 10px 15px;
        cursor: pointer;
    }
}
.person_board li.active,
.person_board li:hover{
    background-color: darkcyan;
    color: #FFF;
}

</style>