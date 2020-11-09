<template>
  <div class="account">
      <div class="info_box">
          <div class="first_box">我的头像：</div>
          <div>
              <img :src="imgurl + infoList.user_pic" alt="" v-if="infoList.user_pic">
              <img src="avator" alt="" v-else>
              <el-upload
                :headers = "Myheaders"
                :action="uploadActionUrl"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :show-file-list = "showList"
              >
              <el-link class="link linkone" type="primary">更新</el-link>
              </el-upload>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">我的昵称：</div>
          <div>
              <p v-if="infoList.user_nickname">{{infoList.user_nickname}}</p>
              <p v-else>xxxxx</p>
              <el-link class="link" disabled type="primary" @click="goSetinfo('changename')" v-if="infoList.user_nickname">已设置</el-link>
              <el-link class="link" type="primary" @click="goSetinfo('changename')" v-else>设置</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">登录密码：</div>
          <div>
              <p>xxxx</p>
              <el-link class="link" type="primary" @click="goSetinfo('changepass')">修改</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">绑定手机：</div>
          <div>
              <p v-if="infoList.user_mobile">{{infoList.user_mobile}}</p>
              <p v-else>未认证</p>
              <el-link class="link" type="primary" @click="goSetinfo('changephone')">修改</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">邮箱认证：</div>
          <div>
              <p v-if="infoList.user_email">{{infoList.user_email}}</p>
              <p v-else>未认证</p>
              <el-link class="link" type="primary" @click="goSetinfo('changemail')">立即验证</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">身份认证：</div>
          <div>
              <p v-if="infoList.user_id" class="idcheck">已认证</p>
              <el-link class="link" type="primary" @click="goSetinfo('authentication')" v-else>立即验证</el-link>
          </div>
      </div>
  </div>
</template>

<script>
let uptoken = localStorage.getItem("token");
export default {
    name:"Accountinfo",
    data(){
        return{
            imgurl:this.JuheHOST,
            uploadActionUrl:this.$api.uploadActionUrl,
            avator:require("@/image/news.jpeg"),
            Myheaders:{token : uptoken},
            showList:false,
            infoList:{}
        }
    },
    methods:{
        handleAvatarSuccess(res, file) {
            this.avator = this.JuheHOST + res.params.user_pic;
            localStorage.setItem('user_pic',res.data.params.user_pic); 
            console.log(res);
            console.log(file);
            if (res.code == 1) {
                  this.$message({
                    type: 'error', // warning、success
                    message: res.msg 
                  }) 
              } else if (res.code == 0) {
                  this.$message({
                    type: 'success', // warning、success
                    message: res.msg 
                  })                            
              } else if (res.code == -1) {
                  this.$message({
                    type: 'warning', // warning、success
                    message: res.msg 
                  })
              }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        goSetinfo(value){
            // this.$router.push("/setinfo/a")
            this.$router.push({ name: 'setinfo', params: { compontentName:value }})
        },
        //获取用户信息
        getbasic(){
            this.$api.getbasicInfo.getbasic(

            ).then(res => {
                console.log(res);
                if (res.data.code == 1) {
                    this.$message({
                        type: 'error', // warning、success
                        message: res.data.msg 
                    }) 
                } else if (res.data.code == 0) {
                    this.$message({
                        type: 'success', // warning、success
                        message: res.data.msg 
                    })
                    this.infoList = res.data.params;                        
                } else if (res.data.code == -1) {
                    this.$message({
                        type: 'success', // warning、success
                        message: res.data.msg 
                    })
                    this.$router.push("/")
                }
            })
            .catch(error => {
                this.$message("账号或密码错误");
            })
        }
    },
    mounted(){
        console.log(this.$api.uploadActionUrl);
        // console.log(localStorage.getItem("token"));
        this.getbasic();
    }
}   
</script>

<style lang="less" scoped>
.account{
    width: 500px;
    margin-left: 50px;
    height: 480px;
    font-size: 14px;
    .info_box{
        width: 100%;
        height: 80px;
        position: relative;
        img{
            width: 60px;
            height: 60px;
            position: absolute;
            border-radius: 50%;
            top: 10px;
        }
        .first_box{
            width: 100px;
            height: 80px;
            line-height: 80px;
            text-align: right;
        }
        div,p{
            display: inline-block;
        }
        .linkone,.link{
            position: absolute;
        }
        .linkone{
            left:300px;
            top: 30px;
        }
        .link{
            left:300px;
        }
    }
}
.idcheck{
    color: #a09b9b;
}
</style>