import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './views/index/index'
import Layout from './layout/index'
import Response from './views/response/response'
import Message from './views/message/message'
import Found from './views/found/found'
import FoundIndex from './views/found/index/index'
import Topic from './views/found/topic/topic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'layout',
      component:Layout,
      children:[
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path:'/response',
          name:'response',
          component: Response
        },
          {
              path:'/message',
              name:'message',
              component:Message,
          },
      ],
    },
    {
      path:'/found',
      name:'found',
      component:Found,
      children:[
        {
          path:'/',
          name:'FoundIndex',
          component:FoundIndex,
        },
        {
          path:'/topic',
          name:'topic',
          component:Topic
        }
      ],
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
