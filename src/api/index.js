/**
 * api接口统一出口
 */
//登录接口
import login from "./login"
import registered from "./registered"
import basic from "./basicInfo"
import privacy from "./privacy"
import chanel from "./channelist"

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
    chanel
}