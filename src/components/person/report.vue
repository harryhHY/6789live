<template>
  <div class="report">
      <div>
            <el-dialog
                title="举报"
                :visible="oneVisible"
                :close-on-click-modal = "onmodalclick"
                width="30%"
                :modal-append-to-body="false"
                :before-close="handleOneClose">
                    <el-form :model="reportType" :rules="rules" ref="reportType" label-width="100px">
                        <el-form-item label="选择举报类型" prop="type">
                            <el-radio-group v-model="reportType.type">
                            <el-radio label="诈骗举报"></el-radio><br>
                            <el-radio label="营销广告"></el-radio><br>
                            <el-radio label="谩骂攻击"></el-radio><br>
                            <el-radio label="色情/政治/违法内容"></el-radio><br>
                            <el-radio label="其他"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="" prop="desc">
                            <el-input v-model="reportType.desc" placeholder="请填写举报类型，最多20字"></el-input>
                        </el-form-item>
                    </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancleOne('reportType')">取 消</el-button>
                    <el-button type="primary" @click="nextHandler('reportType')">下一步</el-button>
                </span>
            </el-dialog>
      </div>
      <div>
            <el-dialog
                class="dialogbox"
                title="举报"
                :visible.sync="twoVisible"
                :close-on-click-modal = "onmodalclick"
                width="30%"
                :before-close="handleTwoClose"
                :modal-append-to-body="false">
                <el-input type="textarea" placeholder="请详细描述被举报人的行为" v-model="textdetail"></el-input>
                <el-upload
                    class="imgup"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>                   
                </el-upload>
                <div class="imgbox">
                    <img width="100%" :src="avator" alt="">
                </div>
                <el-dialog :visible.sync="imgVisible">
                    <img width="100%" :src="avator" alt="">
                </el-dialog>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancleTwo()">取 消</el-button>
                    <el-button type="primary" @click="submitHandler()">提交</el-button>
                </span>
            </el-dialog>
      </div>
      <div>
            <el-dialog
                title="举报"
                :visible.sync="threeVisible"
                :close-on-click-modal = "onmodalclick"
                width="30%"
                :modal-append-to-body="false"
                :before-close="handleThreeClose">
                <span>完成：感谢您的支持，我们已收到您的举报信息，将会尽快处理。</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="threeComplete()">完成</el-button>
                </span>
            </el-dialog>
      </div>
  </div>
</template>

<script>
export default {
    name:"report",
     data() {
      return {
        avator:require("@/image/news.jpeg"),
        reportType: {
          type: '',
        },
        textdetail:'',
        rules: {
          type: [
            { required: true, message: '请选择一个类型', trigger: 'change' }
          ]
        },
        oneVisible: this.visible,
        userid:this.uid,
        twoVisible: false,
        threeVisible: false,
        onmodalclick:false,
        //图
        dialogImageUrl: '',
        imgVisible: true
      };
    },
    props:["visible","uid"],
    methods: {
        //第一个下一步存储信息，打开第二个
        nextHandler(reportType){
            this.$refs['reportType'].validate((valid) => {
                if (valid) {
                    console.log(this.reportType.type);
                    this.oneVisible = false;
                    this.twoVisible = true;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //第一个关闭
        handleOneClose(done) {
            this.oneVisible=false
            this.$emit("chidVisible",this.onmodalclick)
        },
        //第一个取消
        cancleOne(){
            this.oneVisible=false
            this.$emit("chidVisible",this.onmodalclick)
            this.$refs['reportType'].resetFields();
        },
        //第二个提交
        submitHandler(){
            this.twoVisible = false;
            this.threeVisible = true;
        },
        //第二个关闭
        handleTwoClose(done) {
            this.twoVisible=false
            this.$emit("chidVisible",this.onmodalclick)
        },
        //第二个取消
        cancleTwo(){
            this.twoVisible=false
            this.$emit("chidVisible",this.onmodalclick)
        },
        //第三个关闭
        handleThreeClose(done) {
            this.threeVisible=false
            this.$emit("chidVisible",this.onmodalclick)
        },
        //第三个完成
        threeComplete(){
            this.threeVisible=false
            this.$emit("chidVisible",this.onmodalclick)
        },
        //图片上传
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.imgVisible = true;
        },
    },
    mounted(){
        console.log(this.visible);
        console.log(this.userid);
    }
}
</script>

<style lang="less" scoped>
.imgup{
    display: inline;
}
.imgbox{
    display: inline-block;
    width: 148px;
    height: 148px;
    background-color: red;
    img{
        width: 100%;
        height: 100%;
    }
}
.el-radio {
    margin-bottom: 0.3rem;
}
.el-radio:last-child{
    margin-bottom: 0;
}
/deep/.el-form-item__label {
    position: relative;
    top: -15px;
}
</style>