import Vue from 'vue'
import Router from 'vue-router'
const Login = import('../page/login/login.vue');
const Registered = import('../page/registered/registered.vue');
const Resetpass = import('../page/resetpass/resetpass.vue');
const Home = import('../page/home/home.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: () => Registered
    },
    {
      path: '/resetpass',
      name: 'resetpass',
      component: () => Resetpass
    }
  ]
})
