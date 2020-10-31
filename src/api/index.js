/**
 * api接口统一出口
 */
//登录接口
import getCode from "./getcode"
import login from "./login"
import checkname from "./checkname"
import registered from "./registered"
import basic from "./basicInfo"
import getbasicInfo from "./getbasicInfo"
import privacy from "./privacy"
import getprivacy from "./getprivacy"
import chanel from "./channelist"
import uploadActionUrl from "./uploadActionUrl"
import nickname from "./nickname"
import setpassword from "./setpassword"
import changephone from "./changephone"
import checkreal from "./checkreal"
import homeindex from "./httpget"
import attchanelist from "./attchanelist"
import editchanel from "./editchanel"
import suggestList from "./suggestList"
import sendsuggest from "./sendsuggest"

//导出接口
export default {
    //获取验证码
    getCode,
    //登录
    login,
    //注册
    registered,
    //检查用户是否存在
    checkname,
    //基本信息
    basic,
    //基本信息获取
    getbasicInfo,
    //隐私设置
    privacy,
    //隐私设置获取
    getprivacy,
    //设置页频道列表
    chanel,
    //头像上传地址
    uploadActionUrl,
    //设置-修改昵称
    nickname,
    //设置-修改密码
    setpassword,
    //设置-修改手机号
    changephone,
    //设置-身份认证
    checkreal,
    //首页-获取数据
    homeindex,
    //获取关注，频道列表
    attchanelist,
    //用户关注频道编辑
    editchanel,
    //反馈列表获取
    suggestList,
    //反馈提交
    sendsuggest
}