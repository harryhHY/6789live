import base from "./base"
import axios from "./http.js"
const httppost = {
  follow() {
    return base.follow
  },
  star(){
    return base.star
  }
}

export default httppost
