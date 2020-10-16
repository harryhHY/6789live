/**
 * 登录模块接口demo
 */

import base from "./base"
import axios from "./http.js"

const login = {
    // useLogin(params) {
    //     return axios.get(base.host + base.getToken, {
    //         params: params
    //     });
    // }
    useLogin(content) {
        return axios.post(base.host + base.getToken,
            content
        );
    }
}

export default login