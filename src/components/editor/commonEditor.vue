<template>
  <div class="home">
    <h3><p><b>评论</b></p></h3>
    <div id="editor" contenteditable="true">
    </div>
    <!-- <div id="toolbar-container" class="toolbar"></div> -->
    <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
    <h3>内容预览</h3>
    <div class="webviewtext" v-html='editorData'></div>
  </div>
</template>

<script>

// 引入 wangEditor
import wangEditor from 'wangeditor'

export default {
  data() {
    return {
      textarea:"",
      editor: null,
      editorData: '',
      bold:""
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
                isNoPaste:true
              }
          }
      }
  },
  mounted() {
    console.log(this.editorParams);
    // const editorCommon = new wangEditor('#toolbar-container',`#editor`)
    const editorCommon = new wangEditor(`#editor`)
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editorCommon.config.onchange = (newHtml) => {
       this.editorData = newHtml
    }
    //配置编辑器高度
    editorCommon.config.height = 100
    //默认提示语
    editorCommon.config.placeholder = '请发表讲话3'

    //配置菜单
    editorCommon.config.menus = [
        this.editorParams.emoticon
        /** 
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
        */
    ]
    //评论框过滤粘贴的图片
    editorCommon.config.pasteIgnoreImg = this.editorParams.isNoPaste;
    // 配置行高
    // editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']
    editorCommon.config.emotions = [
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
    editorCommon.config.showFullScreen = false
    // 配置粘贴文本的内容处理
    editorCommon.config.pasteTextHandle = function (pasteStr) {
    // 对粘贴的文本进行处理，然后返回处理后的结果
    return pasteStr + '-6789直播'
    }
    // 创建编辑器
    editorCommon.create()
    this.editorCommon = editorCommon
  },
  methods: {
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editorCommon.txt.html()
      alert(data)

      //清空编辑器
      this.editorCommon.txt.clear()
    }
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editorCommon.destroy()
    this.editorCommon = null
  }
}
</script>

<style lang="less">
  #editor{
    width:500px;
    border:1px solid #292828;
  }
  .w-e-text-container{
    resize: vertical !important;
  }
  .home {
    width: 500px;
    margin: auto;
    position: relative;
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
