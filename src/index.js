import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createStore from './store/store'
import Vuex from 'vuex'

import './assets/styles/global.styl'

import createRouter from './config/router'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = createRouter()
const store = createStore()
// 导航守卫
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
