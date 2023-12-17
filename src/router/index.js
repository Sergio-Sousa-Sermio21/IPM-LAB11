import Basket from '@/views/Basket.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Menu from '@/views/Menu.vue'
import Message from '@/views/Message.vue'
import MyOrders from '@/views/MyOrders.vue'
import Register from '@/views/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  }, 
  {
    path: '/basket',
    component: Basket
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }, 
  {
    path: '/myorders',
    component: MyOrders
  }, 
  {
    path: '/message/:id',
    component: Message
  },        
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
