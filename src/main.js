import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import api from "./api"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import less from 'less';
Vue.use(less);
Vue.prototype.JuheHOST = "/juhe_api"
Vue.prototype.$api = api;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
