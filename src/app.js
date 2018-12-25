import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('wui-button', Button)
Vue.component('wui-icon', Icon)
Vue.component('wui-button-group', ButtonGroup)
Vue.component('wui-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  created(){
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})


