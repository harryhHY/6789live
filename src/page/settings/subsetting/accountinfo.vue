<template>
  <div class="account">
      <div class="info_box">
          <div class="first_box">头像：</div>
          <div>
              <img src="" alt="">
              <a href="#">更新</a>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">昵称：</div>
          <div>
              <p>12345</p>
              <a href="#">设置</a>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">登录密码：</div>
          <div>
              <a href="#">修改</a>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">绑定手机：</div>
          <div>
              <p>13XXXXXXXX25</p>
              <a href="#">修改</a>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">邮箱认证：</div>
          <div>
              <p>未认证</p>
              <a href="#">立即验证</a>
          </div>
      </div>
      <div class="info_box">
          <div class="first_box">身份认证：</div>
          <div>
              <p>未认证</p>
              <a href="#">立即验证</a>
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
    }
}   
</script>

<style lang="less" scoped>
.account{
    width: 400px;
    height: 500px;
    .info_box{
        width: 100%;
        height: 80px;
        line-height: 80px;
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