import Vue from 'vue'
import Component from './func-notification.js'

const NotificationConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const nofity = (opt) => {
  if (Vue.prototype.$isServer) return // 判断是否在服务端，服务端直接return

  const instance = new NotificationConstructor({
    propsData: opt
  })
  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance.vm
}

export default nofity