<template>
    <div>
        <!-- <publishEditor :editorParams = "editorDataPub" /> -->
        <publishEditor />
        <!-- <commonEditor /> -->
    </div>
</template>
<script>
const publishEditor = () => import("../../components/editor/editor");
const commonEditor = () => import("../../components/editor/commonEditor");
export default {
    name:"Person",
    components:{
        publishEditor,
        commonEditor
    },
    data(){
        return{
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
    }
}
</script>