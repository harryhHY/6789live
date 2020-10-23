<template>
  <div class="account">
      <div class="info_box">
          <div class="first_box">我的头像：</div>
          <div>
              <img :src="avator" alt="">
              <el-link class="link linkone" type="primary">更新</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">我的昵称：</div>
          <div>
              <p>12345</p>
              <el-link class="link" type="primary" @click="goSetinfo('changename')">设置</el-link>
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
              <p>13XXXXXXXX25</p>
              <el-link class="link" type="primary" @click="goSetinfo('changephone')">修改</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">邮箱认证：</div>
          <div>
              <p>未认证</p>
              <el-link class="link" type="primary" @click="goSetinfo('changemail')">立即验证</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">身份认证：</div>
          <div>
              <p>未认证</p>
              <el-link class="link" type="primary" @click="goSetinfo('authentication')">立即验证</el-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Accountinfo",
    data(){
        return{
            avator:require("@/image/news.jpeg"),
        }
    },
    methods:{
        goSetinfo(value){
            // this.$router.push("/setinfo/a")
            this.$router.push({ name: 'setinfo', params: { compontentName:value }})
        }
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
</style>