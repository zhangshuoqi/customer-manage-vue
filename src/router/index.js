import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customers from '../components/Customers.vue'
import About from '../components/About.vue'
import Add from '../components/Add.vue'
import CustomerDetail from '../components/CustomerDetail.vue'
import Edit from '../components/Edit.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'customerdetail',
      component: CustomerDetail
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
