/**
 * 接口地址的管理
 */
 import host from './httpurl'
const base = {
    //登录
    getToken:`${host}/apiv2/user_login`,
    // getToken: "​/joke/content/list.php",
    //注册
    registered:`${host}/apiv2/user_reg`,
    //基本资料设置
    basicInfo:`${host}/apiv2/user/base`,
    //隐私设置
    privacy:`${host}/apiv2/user/account/personal`,
    //用户设置-频道列表
    channelist:`${host}/apiv2/channel`,
    //用户设置-头像上传
    uploadActionUrl:`${host}/apiv2/user/account/pic`,
    //用户设置-昵称修改
    nickname:`${host}/apiv2/user/account/nickname`,
    //用户设置-密码修改
    setpassword:`${host}/apiv2/user/account/pwd`,
    //用户设置-身份认证
    checkReal:`${host}/apiv2/user/account/real`,
    //用户关注设置获取，频道列表获取
    attchanelist:`${host}/apiv2/user/account/follow`,
    //用户关注频道设置编辑
    editchanel:`${host}/apiv2/user/account/follow`,
    //获取首页信息
    homeindex:`${host}/apiv2/index`,
}


export default base;