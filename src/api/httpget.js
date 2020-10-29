import base from "./base"
import axios from "./http.js"
const homeindex = {
  gethomeindex(content) {
    return axios.get(base.host + base.homeindex,
      content
    );
  }
}

export default homeindex
