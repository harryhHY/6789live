<template>
  <div>
      <div>
            <el-dialog
                title="举报"
                :visible="oneVisible"
                :close-on-click-modal = "onmodalclick"
                width="30%"
                :before-close="handleOneClose">
                    <el-form :model="reportType" :rules="rules" ref="reportType" label-width="100px">
                        <el-form-item label="请选择举报类型" prop="type">
                            <el-checkbox-group v-model="reportType.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                            </el-checkbox-group>
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
                title="举报"
                :visible.sync="twoVisible"
                :close-on-click-modal = "onmodalclick"
                width="30%"
                :before-close="handleTwoClose">
                <input type="text" placeholder="请详细描述被举报人的行为">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="imgVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
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
        reportType: {
          type: [],
        },
        rules: {
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
        },
        oneVisible: this.visible,
        twoVisible: false,
        threeVisible: false,
        onmodalclick:false,
        //图
        dialogImageUrl: '',
        imgVisible: false
      };
    },
    props:["visible"],
    methods: {
        //第一个下一步存储信息，打开第二个
        nextHandler(reportType){
            this.oneVisible = false;
            this.twoVisible = true;
            console.log(this.reportType.type);
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
        submitForm(reportType) {
            this.$refs['reportType'].validate((valid) => {
                if (valid) {
                    console.log(this.reportType.type);
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(reportType) {
        this.$refs['reportType'].resetFields();
        }
    },
    mounted(){
        console.log(this.visible);
    }
}
</script>

<style lang="less" scoped>

</style>