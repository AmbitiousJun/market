import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')

// 使用插件
Vue.use(VueRouter)

// 定义路由
const routes = [
  {
    // 默认为首页
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router