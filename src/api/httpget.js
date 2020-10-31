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
  },
  getlivedel() {
    return base.livedel
  },
  livevideo() {
    return axios.get(base.livevideo
    );
  },
  newsdel() {
    return base.newsdel
  },
}

export default homeindex
