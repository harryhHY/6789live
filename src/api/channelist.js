/**
 * 设置页频道列表模块接口demo
 */

import base from "./base"
import axios from "./http.js"

const chanel = {
    channelist(params) {
        return axios.get(base.host + base.channelist, {
            params: params
        });
    }
}
export default chanel