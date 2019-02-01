// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import MyRequest from '@/core/request'
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(iView)

var http = new MyRequest()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  http,
  components: { App },
  template: '<App/>'
})
