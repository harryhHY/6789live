import base from "./base"
import axios from "./http.js"
const homeindex = {
  gethomeindex() {
    return axios.get(base.homeindex

    );
  },
  getliveindex() {
    return base.liveindex
  },
  getnewsindex() {
    return axios.get(base.newsindex

    );
  }
}

export default homeindex
