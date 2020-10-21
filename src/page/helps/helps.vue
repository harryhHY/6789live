<template>
    <div>
        <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
        <div class="person_wrap">
   
        </div>
        
        <!-- <i class="iconfont icon-wangluo"></i> -->
    </div>
</template>
<script>
const home_herder = () => import("../../components/home/home_herder");
export default {
    name:"Person",
    components:{
        home_herder
    },
    data(){
        return{
            menu_num: "1",
            headerKey:'',
        }
    },
    methods:{
        parentEvent(data) {
            this.menu_num = data;
        },
    }
}
</script>
<style lang="less" scoped>


</style>