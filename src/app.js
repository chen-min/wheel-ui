import Vue from 'vue'
import Icon from './icon'
import Input from './input'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('wui-button', Button)
Vue.component('wui-icon', Icon)
Vue.component('wui-button-group', ButtonGroup)
Vue.component('wui-input', Input)
Vue.component('wui-row', Row)
Vue.component('wui-col', Col)
Vue.component('wui-layout', Layout)
Vue.component('wui-header', Header)
Vue.component('wui-content', Content)
Vue.component('wui-footer', Footer)
Vue.component('wui-sider', Sider)


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



