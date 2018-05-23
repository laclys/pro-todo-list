import Vue from 'vue'
import Component from './func-notification.js'

const NotificationConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const removeInstance = (instance) => {
  if (!instance) return
  const len = instance.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instances.splice(index, 1)
}

const nofity = (opt) => {
  if (Vue.prototype.$isServer) return // 判断是否在服务端，服务端直接return

  const {autoClose, ...rest} = opt

  const instance = new NotificationConstructor({
    propsData: {...rest},
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
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
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el) //删除dom对象
    instance.vm.$destroy() // 删除vm对象
  })
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })
  return instance.vm
}

export default nofity