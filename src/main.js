import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import api from "./api"
import store from '../static/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import less from 'less';
// import './style/iconfont.css';
import './assets/font/iconfont.css'
Vue.use(ElementUI);

import _ from 'lodash'
Vue.prototype._ = _

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import {
  inHTMLData,
  uriInUnQuotedAttr
} from "xss-filters-es6";
const xssFilters = require('xss-filters');
Vue.prototype.$inHTMLData = inHTMLData;

// Vue.use(less);
Vue.prototype.JuheHOST = "/live"
Vue.prototype.$api = api;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

import * as filter from './filter/index'
Object.keys(filter).forEach(keys => {
  console.log(keys)
  Vue.filter(keys, filter[keys])
})



Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000)
      }
    })
  }
})

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
