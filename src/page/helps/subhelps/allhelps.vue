<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="忘记密码怎么办？" name="1">
            <div>忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item title="忘记密码怎么办？" name="2">
            <div>忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item title="忘记密码怎么办？" name="3">
            <div>忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item title="忘记密码怎么办？" name="4">
            <div>忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
    name:"allhelps",
    data(){
        return{
            activeNames: ['1']
        }
    },
    methods:{
        handleChange(val) {
        console.log(val);
      }
    }
}
</script>

<style lang="less" scoped>

</style>