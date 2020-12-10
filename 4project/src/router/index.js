import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/login.vue')
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('../views/home.vue'),
    meta:{requireAuth:true},
  },
  {
    path:'/user',
    name:'User',
    component:()=>import('../views/user.vue'),
    meta:{requireAuth:true},
  },
  {
    path:'/teacher',
    name:'Teacher',
    component:()=>import('../views/teacher.vue'),
    meta:{requireAuth:true},
  },
  {
    path:'/attentions',
    name:'Attentions',
    component:()=>import('../views/attentions.vue'),
    meta:{requireAuth:true},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
