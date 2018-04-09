import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})
app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)

const unwatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})

setTimeout(() => {
  unwatch()
}, 3000) 