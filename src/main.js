import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import api from "./api"
import store from '../static/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './style/iconfont.css';
Vue.use(ElementUI);

import less from 'less';
Vue.use(less);
Vue.prototype.JuheHOST = "/juhe_api"
Vue.prototype.$api = api;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false



// import * as directive from "./page/storage.js/index"
// Object.keys (directive).forEach(keys=>{
//   Vue.prototype.directive(keys,directive[keys])
// })



new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
