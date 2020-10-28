/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */

import axios from "axios"
import router from "../router"
import initStore from "../../static/store"
import qs from "querystring"
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */

const toLogin = () => {
    router.replace({
        path: '/login'
    })
}
const to500 = () => {
    router.replace({
        path: '/500'
    })
}
const to401 = () => {
    router.replace({
        path: '/401'
    })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */

const errorHandler = (status, other) => {
    //状态码判断
    switch (status) {
        case 401:
            //跳转登录
            to401();
            break;
        case 403:
            /**
             * 清除掉token的存储
             *    1.本地，cookie
             *    2.vuex，remove
             */

            localStorage.removeItem("token");
            // store.dispatch("setTokenAction", null);
            setTimeout(() => {
                toLogin();
            }, 2000);
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        case 500:
            setTimeout(() => {
                to500();
            }, 2000);
            break;
        default:
            console.log(other);
            break;
    }
}


//创建axios实例

var instance = axios.create({ timeout: 5000 });
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['enctype'] = 'multipart/form-data';
instance.defaults.headers.common['Authorization'] = initStore.state.token;// token在vuex
instance.defaults.headers.token = initStore.state.token;// token在vuex

instance.interceptors.request.use(function(config) {
    // if (config.method == 'post') {
    //     config.data = qs.stringify(config.data);
    // }
    if (config.method == 'post' || config.method == 'put') {
        config.data = qs.stringify(config.data);
    }
    // config.headers.Authorization = "ddc6da6d-d9ba-9426-b432-03ff7291707b";
    // const token = store.state.token;
    // if(token){
    //     config.headers.Authorization = token;
    // }
    return config;
}, function(error) {
    return Promise.reject(error);
});

//响应拦截
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandler(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            setTimeout(() => {
                to500();
            }, 2000);
        }
    }
);


export default instance