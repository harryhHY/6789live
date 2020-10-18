<template>
    <div>
        <div class="publish">
            <el-button type="primary" @click="showEditor" icon="el-icon-edit" round>发表帖子</el-button>
        </div>
        <el-dialog
            title="发表 帖子"
            :visible="dialogVisible"
            width="50%"
            :before-close="handleClose"
        >
            <publishEditor/>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>
<script>
import wangEditor from 'wangeditor'
const publishEditor = () => import("@/components/editor/editor");
export default {
    name:"",
    components:{
        publishEditor
    },
    data(){
        return{
            dialogVisible: false,

        }
    },
    mounted(){
        
    },
    methods:{
        showEditor(){
            this.dialogVisible = true;
        },

        //关闭编辑器
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                this.dialogVisible = false;
            })
            .catch(_ => {});
        } 
    }

}
</script>
<style lang="less" scoped>
.publish{
    width: 100%;
    padding: 10px 0;
    overflow: hidden;
    .el-button{
        float: right;
    }
}
</style>