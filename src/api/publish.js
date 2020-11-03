/**
 * 帖子发布模块接口
 */

import base from "./base"
import axios from "./http.js"

const publish = {
    publishPost(content) {
        return axios.post(base.publish,
            content
        );
    }
}
const getformatechanel = {
    getChanel(params) {
        return axios.get(base.getformatechanel, {
            params: params
        });
    }
}

export default {
    publish,
    getformatechanel
}