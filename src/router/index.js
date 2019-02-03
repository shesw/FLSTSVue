import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/homepage'
import Login from '@/components/login/login'
import CoverPic from '@/components/homepage/coverpic/coverpic'
import Playpage from '@/components/homepage/playpage/playpage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: HomePage,
    children: [{
      path: '',
      component: CoverPic
    }, {
      path: 'playpage',
      name: 'playpage',
      component: Playpage
    }]

  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
