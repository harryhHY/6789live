import Vue from 'vue'
import Router from 'vue-router'
// const Login = import('../page/login/login.vue');
// const Registered = import('../page/registered/registered.vue');
const Resetpass = import('../page/resetpass/resetpass.vue');
const Home = import('../page/home/home.vue');
// const Leagepoints = import('../page/leagepoints/leagepoints.vue');
const Live = import('../components/live/live');
const Livedel = import('../components/live/livedel.vue');
const New = import('../page/news/news.vue');
const Newdel = import('../page/news/newsdel.vue');
const Person = import('../page/person/person.vue');
const Homeperson = import('../page/person/subperson/homeperson.vue');
const Article = import('../page/person/subperson/article.vue');
const Attention = import('../page/person/subperson/attention.vue');
const Fans = import('../page/person/subperson/fans.vue');
const Settings = import('../page/Settings/Setting.vue');
const Setinfo = import('../page/Settings/subsetinfo/setinfo.vue');
const Community = import('../page/community/community.vue');
const Communitydel = import('../page/community/communitydel.vue');
const Postdetails = import('../page/community/postdetails.vue');
const Analysis = import('../page/analysis/analysis.vue');
const Exponent = import('../page/exponent/exponent.vue');
const Helps = import('../page/helps/helps.vue');
const Suggest = import('../page/suggest/suggest.vue');
const Suggestdetail = import('../page/suggest/suggestdetail.vue');
const Nonetwork = import('../page/nonetwork/nonetwork.vue');
const Search = import('../page/search/search.vue')
const Publish = import('../page/publish/publish.vue')
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
      path: '/community',
      name: 'Community',
      component: () => Community
    },
    {
      path: '/search',
      name: 'Search',
      component: () => Search
    },
    {
      path: '/communitydel',
      name: 'Communitydel',
      component: () => Communitydel
    },
    {
      path: '/postdetails',
      name: 'Postdetails',
      component: () => Postdetails
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
      path: '/analysis',
      name: 'Analysis',
      component: () => Analysis
    },
    {
      path: '/exponent',
      name: 'Exponent',
      component: () => Exponent
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => Login
    // },
    // {
    //   path: '/registered',
    //   name: 'Registered',
    //   component: () => Registered
    // },
    {
      path: '/resetpass',
      name: 'resetpass',
      component: () => Resetpass
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => Settings
    },
    {
      path: '/setinfo',
      name: 'setinfo',
      component: () => Setinfo
    },
    {
      path: '/person',
      name: 'person',
      redirect:"/person/homeperson",
      component: () => Person,
      children:[
        {
          path:"homeperson",
          component: () => Homeperson,
        },
        {
          path:"article",
          component: () => Article,
        },
        {
          path:"attention",
          component: () => Attention,
        },
        {
          path:"fans",
          component: () => Fans,
        },
      ]
    },
    {
      path: '/helps',
      name: 'helps',
      component: () => Helps
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: () => Suggest,
    },
    {
      path: '/suggestdetail',
      name: 'suggestdetail',
      component: () => Suggestdetail,
    },
    {
      path: '/nonetwork',
      name: 'nonetwork',
      component: () => Nonetwork,
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => Publish,
    }

    //联赛数据废弃
    // {
    //   path: '/leagepoints',
    //   name: 'leagepoints',
    //   component: () => Leagepoints
    // },

  ]
})
