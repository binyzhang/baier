import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoad = (str) => {
  return (resolve) => {
    import ('@/views/' + str).then((module) => {
      resolve(module)
    }).catch()
  }
}

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component: lazyLoad('Layout'),
      children: [
        {
          path: '/layout/',
          redirect: '/layout/index'
        },
        {
          path: 'index',
          name: 'index',
          component: lazyLoad('index/Index')
        },
        {
          path: 'reward',
          name: 'reward',
          component: lazyLoad('index/reward')
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: lazyLoad('index/Discovery'),
          children: [
            {
              path: '/layout/discovery/',
              redirect: 'info'
            },
            {
              path: 'info',
              name: 'info',
              component: lazyLoad('index/discovery/Info')
            },
            {
              path: 'broadcast',
              name: 'broadcast',
              component: lazyLoad('index/discovery/Broadcast')
            },
            {
              path: 'topic',
              name: 'topic',
              component: lazyLoad('index/discovery/Topic')
            },
            {
              path: 'group',
              name: 'group',
              component: lazyLoad('index/discovery/Group')
            }
          ]
        },
        {
          path: 'addressBooks',
          name: 'addressBooks',
          component: lazyLoad('index/AddressBooks')
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: lazyLoad('search/Search')
    },
    {
      path: '/search2',
      name: 'Search2',
      component: lazyLoad('search/Search2')
    },
    {
      path: '/news',
      name: 'News',
      component: lazyLoad('news/News')
    },
    {
      path: '/add',
      name: 'add',
      component: lazyLoad('add/Add')
    },
    {
      path: '/selectAdministrator',
      name: 'selectAdministrator',
      component: lazyLoad('selectAdministrator/selectAdministrator')
    }
  ]
})

export default router
