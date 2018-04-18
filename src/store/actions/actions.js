// action 处理异步修改数据的方法
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  }
}