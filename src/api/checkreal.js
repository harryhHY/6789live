/**
 * 设置-身份认证模块接口
 */

import base from "./base"
import axios from "./http.js"

const checkreal = {
    checkrealPerson(content) {
        return axios.put(base.host + base.checkReal,
            content
        );
    }
}

export default checkreal