/**
 * 设置-修改昵称模块接口demo
 */

import base from "./base"
import axios from "./http.js"

const setpassword = {
    setPwd(content) {
        return axios.put(base.setpassword,
            content
        );
    }
}

export default setpassword