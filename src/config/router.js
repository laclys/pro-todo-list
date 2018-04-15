import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',  // 使用h5 history的方式进行路由跳转（默认是hash）
    // base: '/base/'，
    linkActiveClass: 'active-link', // router-link被激活显示的样式 （部分匹配路径）
    linkExactActiveClass: 'exact-active-link' // （完全匹配路径）
  })
}