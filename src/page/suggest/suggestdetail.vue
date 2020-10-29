<template>
  <div id="home">
      <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
      <div class="info_set">
      <div class="line"></div>
        <p class="p_title">意见详情</p>
        <div class="detal">
                <div class="list_con">
                    <div class="title">
                        <p>
                            {{detail_list.title}}
                            <span class="title_time">{{detail_list.timer}}</span>
                        </p>
                    </div>
                    <div class="content_con">
                        <p class="content">
                            详情：{{detail_list.content}}  
                        </p>
                        <img v-for="(images,index) in detail_list.imgList" :key="index" :src="images" alt="">
                    </div>
                </div>
                <div class="reply_con">
                    <p class="reply_title"><i class="el-icon-medal-1"></i><span>{{reply_list.user}}</span><span>{{reply_list.timer}}</span></p>
                    <div class="content">
                        {{reply_list.content}}
                    </div>
                </div>
                <!-- <div>
                    <replyeditor @receiveMsg="handlerMsg"/>
                </div> -->
        </div>
        <div class="editor_con">
            <div id="editor" class="text"></div>
            <div id="toolbar" class="toolbar"></div>
            <div class="btn_con">
                <el-button class="cancler"  type="info" plain @click="cancleHandler">取消</el-button>
                <el-button class="submitbtn"  type="primary" @click="getEditorData">提交</el-button>
            </div>
        </div> 
    </div>
  </div>
</template>

<script>
const home_herder = () => import("../../components/home/home_herder");
const replyeditor = () => import("../../components/editor/replyEditor");
import wangEditor from 'wangeditor'
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
        },
        getEditorData() {
            // 通过代码获取编辑器内容
            let data = this.editor.txt.html()
            alert(data)

            //清空编辑器
            this.editor.txt.clear()
        },
        cancleHandler(){

        }
    },
    mounted(){
        console.log(this.$route.params.name);
        const editor = new wangEditor('#toolbar', '#editor')
        // const editor = new wangEditor(`#editor`,'#toolbar');
        // 配置 onchange 回调函数，将数据同步到 vue 中
        editor.config.onchange = (newHtml) => {
            this.editorData = newHtml;
            console.log(this.editorData);
        }
        //配置编辑器高度
        // editor.config.height = this.editorParams.height;
        //默认提示语
        editor.config.placeholder = '请发表讲话3'

        //配置菜单
        editor.config.menus = [
            "emoticon",
            "image",
            "undo",//后退
            "redo",//前进
        ]
        //评论框过滤粘贴的图片
        editor.config.pasteIgnoreImg = false;
        // 配置行高
        // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']
        editor.config.emotions = [
            {
                title: 'emoji',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐 😍 🥰 🤩 😘 😚 🤑 🤪 🤭 🤔 🤗 😡 😤 🤬 💀 👽 💩 😵 🤢 🤕 🤧 😭'.split(/\s/),
            },
            {
                title: 'gesture',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '👋 🤚 🖐️ ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤜 🤛 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦿 🦵 👁️ 👅 👀'.split(/\s/),
            },
            {
                title: 'Symbols',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '🏧 🚮 ♿ 🚰 🚹 🚺 🚻 🛅 🛄 🛂 ⚠️ 🚸 ⛔ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 ☢️ ☣️ ♀️ ♂️ 🆚 ✔️ ❌ ➕ ➖ ✖️ ➗ 〽️ ✳️ ✴️ ‼️ ⁉️ ❓ ❗'.split(/\s/),
            },
        ];
        //配置字体
        editor.config.fontNames = [
            '黑体',
            '仿宋',
            '楷体',
            '标楷体',
            '华文仿宋',
            '华文楷体',
            '宋体',
            '微软雅黑',
        ];
        // 配置全屏功能按钮是否展示
        editor.config.showFullScreen = false
        // 配置粘贴文本的内容处理
        editor.config.pasteTextHandle = function (pasteStr) {
        // 对粘贴的文本进行处理，然后返回处理后的结果
        return pasteStr + '-6789直播'
        }
        // 配置上传图片 server 接口地址
        editor.config.uploadImgServer = '/upload-img'
        //取消网络图片上传
        editor.config.showLinkImg = false
        //图片上传操作钩子函数
        editor.config.uploadImgHooks = {
            // 上传图片之前
            before: function(xhr) {
                console.log(xhr)

                // 可阻止图片上传
                return {
                    prevent: true,
                    msg: '需要提示给用户的错误信息'
                }
            },
            // 图片上传并返回了结果，图片插入已成功
            success: function(xhr) {
                console.log('success', xhr)
            },
            // 图片上传并返回了结果，但图片插入时出错了
            fail: function(xhr, editor, resData) {
                console.log('fail', resData)
            },
            // 上传图片出错，一般为 http 请求的错误
            error: function(xhr, editor, resData) {
                console.log('error', xhr, resData)
            },
            // 上传图片超时
            timeout: function(xhr) {
                console.log('timeout')
            },
            // 图片上传并返回了结果，想要自己把图片插入到编辑器中
            // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
            customInsert: function(insertImgFn, result) {
                // result 即服务端返回的接口
                console.log('customInsert', result)

                // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
                insertImgFn(result.data[0])
            }
        }
        // 创建编辑器
        editor.create()
        this.editor = editor
    },
    beforeDestroy() {
        // 调用销毁 API 对当前编辑器实例进行销毁
        this.editor.destroy()
        this.editor = null
    }
}
</script>
<style lang="less" scoped>
#home{
    width: 100%;
    background-image: url("../../image/bj.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
}
.info_set{
    width: 1273px;
    margin: auto;
    margin-top: 10px;
    // height: 800px;
    background-color: #FFF;
    // padding: 13px 13px 0;
    padding-top: 13px;
    box-shadow: 0 3px 3px 3px #DBDBDB; 
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-sizing: border-box;
    .line{
        width: 200px;
        height: 2px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: #309CFB;
        box-sizing: border-box;
    }
    .p_title{
        margin-left:46px ;
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
        width: 1050px;
        background-color: #d2d2d2;
        left: 100px;
    }
    .detal{
        width: 1147px;
        padding-bottom: 20px;
        margin: auto;
        .list_con{
            width: 1147px;
            height: 200px;
            margin-top: 13px;
            border-bottom: 1px solid #d2d2d2;
            position: relative;
            .title{
                width: 900px;
                height: 20px;
                line-height: 20px;
                font-size: 16px;
                font-weight: 600;
                margin: 23px 0 18px 10px;
                color: #777777;
                .title_time{
                    float: right;
                    font-size: 12px;
                }
            }
            .content_con{
                width: 900px;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                .content{
                    width: 800px;
                    height: 60px;
                    float: left;
                    color: #AAAAAA;
                }
                span{
                    float: right;
                    font-size: 12px;
                    color: #3C9EFC;
                    cursor: pointer;
                }
                img{
                    width: 115px;
                    height: 73px;
                    margin-right: 1%;
                }
            }
            .message{
                position: absolute;
                top:0;
                right: 10px;
                color: #FC6D6F;
                font-size: 12px;
                height: 20px;
                line-height: 20px;
            }
        }
        .reply_con{
            width: 1147px;
            .reply_title{
                color: #1a94fc;
                font-size: 16px;
                font-weight: 600;
                margin: 10px 0;
                i{
                    font-size: 18px;
                }
                span{
                    margin-right: 20px;
                }
                span:nth-child(3){
                    color: #777777;
                }
            }
            .content{
                font-size: 16px;
            }
        }
    }
    .editor_con{
        width: 1147px;
        margin: auto;
        padding-bottom: 160px;
        position: relative;
        #editor{
            width:1147px;         
            resize: vertical;
            font-size: 14px;
            border: 1px solid #ccc;
        }
        .toolbar{
            width:1147px;
            font-size: 14px;
        }
        .btn_con{
            position: absolute;
            right: 0;
            .cancler,.submitbtn{
                width: 100px;
                border-radius: 10px;
                color: #FFF;
                margin-top: 10px;
            }
            .submitbtn{
                background-color: #1A90FC; 
            }
            .cancler{
                background-color: #C5C5C5;
            }
            .submitbtn:hover{
                background-color: #58a5ec; 
            }
        }
    } 
}
/deep/.w-e-menu .w-e-panel-container{
    width: 600px !important;
    margin-left: 0 !important;
}
/deep/.w-e-menu .w-e-panel-container .w-e-panel-tab-content{
    width: 600px !important;
    height: 120px !important;
}
</style>