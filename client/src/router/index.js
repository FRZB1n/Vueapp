import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/Home.vue'
import serv from '../services/serv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        
        
        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },
    {
      path: '/contacts',
      name: "contacts",
      component: () => import('../views/Contacts.vue'),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },

    {
      path: '/login',
      name: "login",
      component: () => import('../views/Login.vue'),
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      beforeEnter: (to, from, next) => {

        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
          
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },
    {
      path:'/shop',
      name:'shop',
      component:()=>import('../views/shop.vue'),
      beforeEnter: (to, from, next) => {

        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
      
    },
    {
      path:'/products/:id',
      name:"product",
      component:()=>import('../views/product.vue'),
      beforeEnter: (to, from, next) => {

        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },
    {
      path:"/product_adding",
      name:"product_adding",
      component:()=>import('../views/ProductAdd.vue'),
      // redirect: async to=>{
      //   const resp = await serv.getUserById(localStorage.id)
      //   const user = resp.data
      //   if(localStorage.id){
          
      //     if(user.role != "admin"){
      //      return('/shop')
           
      //     }
          
      //   }
      //   else{
      //     return('/shop')
      //   }
      //   next()
      // }
     
    },
    {
      path:'/card',
      name:"card",
      component:()=>import('../views/Card.vue'),
      beforeEnter: (to, from, next) => {

        if (!localStorage.getItem('id')) {
          if(!localStorage.getItem('korz') && !localStorage.getItem('billID')){
            localStorage.korz = []
            localStorage.billID = ""
          }
        }
        else {
          localStorage.removeItem('korz')

          localStorage.removeItem('billID')

        }
        next()
      }
    },
    {
      path:'/opl',
      name:'opl',
      component:()=>import('../components/Ul.vue')
    }
  ]
})
