/**
 * api接口统一出口
 */
//登录接口
import login from "./login"
import registered from "./registered"
import basic from "./basicInfo"
import privacy from "./privacy"
import chanel from "./channelist"
import uploadActionUrl from "./uploadActionUrl"
import nickname from "./nickname"
import setpassword from "./setpassword"
import checkreal from "./checkreal"
import homeindex from "./httpget"
import attchanelist from "./attchanelist"
import editchanel from "./editchanel"

//导出接口
export default {
    //登录
    login,
    //注册
    registered,
    //基本信息
    basic,
    //隐私设置
    privacy,
    //设置页频道列表
    chanel,
    //头像上传地址
    uploadActionUrl,
    //设置-修改昵称
    nickname,
    //设置-修改密码
    setpassword,
    //设置-身份认证
    checkreal,
    //首页-获取数据
    homeindex,
    //获取关注，频道列表
    attchanelist,
    //用户关注频道编辑
    editchanel
}