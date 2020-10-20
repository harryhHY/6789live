<template>
  <div>
      <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
      <div class="info_head">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/settings' }">设置</el-breadcrumb-item>
            <el-breadcrumb-item>账号信息</el-breadcrumb-item>
            <el-breadcrumb-item>{{routeAddress}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="backset">
              <el-button type="primary" size="small" plain @click="backSet">返回</el-button>
          </div>         
          <hr style="margin-top:10px">
      </div>
      <div class="info_con">
          <component :is="iscomponent"></component>
      </div>      
      
  </div>
</template>

<script>
const home_herder = () => import("@/components/home/home_herder");
const changename = () => import("./changename");
const changephone = () => import("./changephone");
const changemail = () => import("./changemail");
const changepass = () => import("./changepass");
const authentication = () => import("./authentication");
export default {
    components: {
            home_herder,
            changename,
            changephone,
            changemail,
            changepass,
            authentication
		},
		data () {
            return{
                // iscomponent:"",
                routeAddress:"",
                component_name: "home_content",
                headerKey:'1',
                changename: changename,
                changephone: changephone,
                changemail: changemail,
                changepass: changepass,
                authentication: authentication
            }
			
		},
		computed: {
			iscomponent () {
                switch (this.$route.params.compontentName) {
                    case 'changename':
                        this.routeAddress = "修改昵称"
                        return this.changename

                        break;
                    case 'changephone':
                        this.routeAddress = "修改绑定手机号"
                        return this.changephone
                        break;
                    case 'changemail':
                        this.routeAddress = "修改邮箱地址"
                        return this.changemail
                        break;
                    case 'changepass':
                        this.routeAddress = "修改密码"
                        return this.changepass
                        break;
                    case 'authentication':
                        this.routeAddress = "身份认证"
                        return this.authentication
                        break;                
                    default:
                        this.routeAddress = "修改密码"
                        return this.changepass
                        break;
                }
			}
        },
        methods:{
            parentEvent(data) {
                this.menu_num = data;
            },
            backSet(){
                this.$router.push("/settings")
            }
        },
        mounted(){

        }
}
</script>

<style lang="less" scoped>
.info_head{
    width: 70%;
    margin: auto;
    margin-top: 20px;
    position: relative;
}
.backset{
    position: absolute;
    right: 0;
    top: -10px;
}
.info_con{
    width: 70%;
    margin: auto;
    margin-top: 20px;
    position: relative;
}
</style>
