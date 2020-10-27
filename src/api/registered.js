/**
 * 注册模块接口demo
 */

import base from "./base"
import axios from "./http.js"

const registered = {
    useRegister(content) {
        return axios.post(base.host + base.registered,
            content
        );
    }
}

export default registered