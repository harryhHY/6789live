import Vue from 'vue'
import Router from 'vue-router'
const Login = import('../page/login/login.vue');
const registered = import('../page/registered/registered.vue');

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: () => registered
    }
  ]
})
