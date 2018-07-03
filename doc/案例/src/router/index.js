import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const lazyLoad = (str) => {
  return (resolve) => {
    import('@/views/' + str).then((module) => {
      resolve(module)
    }).catch()
  }
}

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: lazyLoad('Index')
    },
    {
      path: '/reward', // 开奖
      name: 'reward',
      component: lazyLoad('reward/Reward')
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: lazyLoad('Discovery'),
      children: [
        {
          path: '/discovery/',
          redirect: '/discovery/info'
        },
        {
          path: 'info',
          name: 'info',
          component: lazyLoad('childViews/Info')
        },
        {
          path: 'broadcast',
          name: 'broadcast',
          component: lazyLoad('childViews/Broadcast')
        },
        {
          path: 'topic',
          name: 'topic',
          component: lazyLoad('childViews/Topic')
        },
        {
          path: 'group',
          name: 'group',
          component: lazyLoad('childViews/Group')
        },
        {
          path: 's',
          name: 'search',
          component: lazyLoad('childViews/Search')
        }
      ]
    }
  ]
})

export default router
