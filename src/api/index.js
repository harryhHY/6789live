/**
 * api接口统一出口
 */
//登录接口
import login from "./login"
import registered from "./registered"

//导出接口
export default {
    //登录
    login,
    //注册
    registered
}