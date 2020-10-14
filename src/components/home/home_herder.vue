<template>
    <div id="home_header" class="cl">
        <h1 @click="go_homepage()" class="logo left">
            <img src="" alt="" >
        </h1>
    </div>
</template>

<script>
    export default {
        methods: {
            go_homepage() {
                this.$router.push('/')
            }
        },
    }
</script>

<style lang="less" scoped>
    #home_header{
        width: 100%;
        background-color: #f00;
        .logo{

        }
    }
</style>