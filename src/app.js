import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('wui-button', Button)
Vue.component('wui-icon', Icon)
Vue.component('wui-button-group', ButtonGroup)

new Vue({
    el:'#app',
    data: {
        loading1: false
    }

})

import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
//单元测试
{
    const Constructor  = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    }) //这里button就是实例，放页面里就是按钮
    button.$mount('.test') //通过js把组件写到页面
    let useElement =  button.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    // expect(useElement.getAttribute('xlink:href')).to.equal('setting')
     expect(href).to.equal('#i-setting')

} 
{
    const Constructor  = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    }) 
    button.$mount('') 
    let useElement =  button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
     expect(href).to.equal('#i-loading')
} 
{
    const Constructor  = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    }) 
    button.$mount('') 
    let useElement =  button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
     expect(href).to.equal('#i-loading')
} 
{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor  = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    }) 
    button.$mount(div) 
    let svg =  button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
     expect(order).to.equal('1')
    button.$el.remove()
    button.$destroy
} 
{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor  = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    }) 
    button.$mount(div) 
    let svg =  button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
     expect(order).to.equal('2')
     button.$el.remove()
     button.$destroy
} 
{   
    //mock
    const Constructor  = Vue.extend(Button)
    const gButton = new Constructor({
        propsData: {
            icon: 'setting',
        }
    }) 
    gButton.$mount() 
    let spy = chai.spy(() => {})
    // gButton.$on('click', function(){
    // })
    gButton.$on('click', spy)
    let button =  gButton.$el
    button.click()
    expect(order).to.equal('2')
    expect(spy).to.have.been.called()
} 