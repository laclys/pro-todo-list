import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     <p v-html="html" />
  //   </div>`,
  template: `
    <div
      :class="[{active: !isActive}]"
      :style="styles"
    >
      <p v-html="html" />
    </div>`,
  data: {
    isActive: false,
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none' //会自动加前缀
    }
  },
  methods: {
    handleClick () {
      alert('123')
    }
  }
})