import base from "./base"
import axios from "./http.js"
const homeindex = {
  gethomeindex(content) {
    return axios.get(base.homeindex,
      content
    );
  },
  getliveindex() {
    return base.liveindex
  }
}

export default homeindex
