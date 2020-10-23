<template>
  <div class="home">
    <input class="articletitle" type="text" maxlength="5" placeholder="请输入标题(最多5个字)" v-model="articletitle">
    <hr>
    <div id="editor"></div>
    <!-- <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
    <h3>内容预览</h3>
    <div class="webviewtext" v-html='editorData'></div> -->
    <p>{{getReplyInfo}}</p>
  </div>
</template>

<script>

// 引入 wangEditor
import wangEditor from 'wangeditor'
import {mapGetters,mapActions} from "vuex"
export default {
  data() {
    return {
      articletitle:"",
      editor: null,
      editorData: '',
    }
  },
  props:{
      editorParams:{
          type:Object,
          default:function(){
              return{
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
                isNoPaste:false,
                height:200
              }
          }
      }
  },
  mounted() {
    console.log(this.editorParams);
    const editor = new wangEditor(`#editor`);
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
       this.editorData = newHtml;
       this.setReplyInfoActions(newHtml);
       console.log(this.editorData);
    }
    //配置编辑器高度
    // editor.config.height = this.editorParams.height;
    //默认提示语
    editor.config.placeholder = '请发表讲话3'

    //配置菜单
    editor.config.menus = [
        //'head',//标题
        this.editorParams.bold,
        //'fontSize',
        this.editorParams.fontName,,//family
        this.editorParams.italic,
        this.editorParams.underline,
        this.editorParams.strikeThrough,//删除线
        this.editorParams.indent,//缩进
        //'lineHeight',
        this.editorParams.foreColor,//字体颜色
        //'backColor',
        this.editorParams.emoticon,
        this.editorParams.image,
        this.editorParams.splitLine,//hr
        this.editorParams.undo,//后退
        this.editorParams.redo,//前进
    ]
    //评论框过滤粘贴的图片
    editor.config.pasteIgnoreImg = this.editorParams.isNoPaste;
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
    ]
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
  methods: {
    ...mapActions(["setReplyInfoActions"]),
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      alert(data)

      //清空编辑器
      this.editor.txt.clear()
    }
  },
  computed:{
    ...mapGetters(["getReplyInfo"]),
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style lang="less">
  #editor{
    width:100%;
    resize: vertical;
  }
  //可拉伸高度
  .w-e-text-container{
    resize: vertical !important;
  }
  .home {
    width: 100%;
    margin: auto;
    position: relative;
    .articletitle{
      width: 100%;
      padding: 1px 2px;
      border: none;
    }
    .btn {
      float: right;
      padding: 5px 10px;
      cursor: pointer;
    }
    h3 {
      margin: 30px 0 15px;
    }
  }
.webviewtext p{
  display: inline-block;
  float: left;
}
.webviewtext p img{
  width: 400px;
  height: 200px;
  margin-left: 1px;
}
</style>
