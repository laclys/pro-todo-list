import Vue from 'vue'

const app = new Vue({
  el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  activated () {
    console.log('activated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  render (h) {
    return h('div', {}, this.text)
  },
  // 在开发中只捕获本组件的错误
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，正式环境可以使用
  }
})

setTimeout(() => {
  app.text = 'bbb'
}, 1000)

setTimeout(() => {
  app.$destroy()
},5000)