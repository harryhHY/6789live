<template>
    <div class="public cl">
        <el-button class="publish" type="primary" icon="el-icon-edit" @click="toPublish">发帖</el-button>
        <homeperson />
    </div>
</template>
<script>
import wangEditor from 'wangeditor'
const homeperson = () => import("./homeperson");
export default {
    name:"",
    components:{
        homeperson
    },
    data(){
        return{

        }
    },
    mounted(){
        
    },
    methods:{
         toPublish(){
             this.$router.push('/publish')
         }
    },
    beforeDestroy() {
       
    }
}
</script>
<style lang="less" scoped>
.public{
    width: 100%;
    position: relative;
    margin-bottom:40px;
    .publish{
        position: fixed;
        top: 400px;
        right: 340px;
        opacity: 0.7;
        z-index: 999;
    }
}
</style>
