import Vue from 'vue'
import Router from 'vue-router'
import InputBox from '@/components/InputBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InputBox',
      component: InputBox
    }
  ]
})
