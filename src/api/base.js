/**
 * 接口地址的管理
 */

const base = {
    host: "/live",
    //登录
    getToken:"/apiv2/user_login",
    // getToken: "​/joke/content/list.php",
    //注册
    registered:"/apiv2/user_reg",
    //基本资料设置
    basicInfo:"/apiv2/user/base",
    //隐私设置
    privacy:"/apiv2/user/account/personal",
    //频道列表
    channelist:"/apiv2/channel",
    //头像上传
    uploadActionUrl:"/apiv2/user/account/pic",
    //昵称修改
    nickname:"/apiv2/user/account/nickname"
}


export default base;