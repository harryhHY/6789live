<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
            <template slot="title">
                <i class="el-icon-s-help"></i>一致性 Consistency?
            </template>
            <div class="content">忘记密码怎么办？</div>
            <div>忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item name="2">
            <template slot="title">
                <i class="el-icon-s-help"></i>一致性 Consistency?
            </template>
            <div class="content">忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item name="3">
            <template slot="title">
                <i class="el-icon-s-help"></i>一致性 Consistency?
            </template>
            <div class="content">忘记密码怎么办？</div>
        </el-collapse-item>
        <el-collapse-item name="4">
            <template slot="title">
                <i class="el-icon-s-help"></i>一致性 Consistency?
            </template>
            <div class="content">忘记密码怎么办？</div>
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
.content{
    margin-left: 55px;
}
</style>