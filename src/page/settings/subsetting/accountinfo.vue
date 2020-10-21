<template>
  <div class="account">
      <div class="info_box">
          <div class="first_box">头像：</div>
          <div>
              <img src="" alt="">
              <el-link type="primary">更新</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">昵称：</div>
          <div>
              <p>12345</p>
              <el-link type="primary" @click="goSetinfo('changename')">设置</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">登录密码：</div>
          <div>
              <el-link type="primary" @click="goSetinfo('changepass')">修改</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">绑定手机：</div>
          <div>
              <p>13XXXXXXXX25</p>
              <el-link type="primary" @click="goSetinfo('changephone')">修改</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">邮箱认证：</div>
          <div>
              <p>未认证</p>
              <el-link type="primary" @click="goSetinfo('changemail')">立即验证</el-link>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">身份认证：</div>
          <div>
              <p>未认证</p>
              <el-link type="primary" @click="goSetinfo('authentication')">立即验证</el-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Accountinfo",
    data(){
        return{

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
    width: 400px;
    height: 500px;
    .info_box{
        width: 100%;
        height: 70px;
        line-height: 59px;
        div{
            display: inline-block;
            float: left;
            p{
                display: inline-block;
                float: left;
            }
        }
        .first_box{
            width: 20%;
            text-align: right;
        }
    }
}
</style>