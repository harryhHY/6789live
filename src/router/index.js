import Vue from 'vue'
import Router from 'vue-router'
const Login = import('../page/login/login.vue');
const Registered = import('../page/registered/registered.vue');
const Resetpass = import('../page/resetpass/resetpass.vue');
const Home = import('../page/home/home.vue');
// const Leagepoints = import('../page/leagepoints/leagepoints.vue');
const Live = import('../components/live/live');
const Livedel = import('../components/live/livedel.vue');
const New = import('../page/news/news.vue');
const Newdel = import('../page/news/newsdel.vue');
const Person = import('../page/person/person.vue');
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => Home
    },
    {
      path: '/live',
      name: 'Live',
      component: () => Live
    },
    {
      path: '/new',
      name: 'New',
      component: () => New
    },
    {
      path: '/newdel',
      name: 'Newdel',
      component: () => Newdel
    },
    {
      path: '/livedel',
      name: 'Livedel',
      component: () => Livedel
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
    },
    {
      path: '/person',
      name: 'person',
      component: () => Person
    },

    //联赛数据废弃
    // {
    //   path: '/leagepoints',
    //   name: 'leagepoints',
    //   component: () => Leagepoints
    // },

  ]
})
