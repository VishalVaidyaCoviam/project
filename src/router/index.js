import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/popular',
    name: 'popularProduct',
    component: () => import( /* webpackChunkName: "about" */ '../components/PopularProduct.vue'),
  },
  {
    path:'/product/:id',
    name: 'productDetails',
    component: () => import( /* webpackChunkName: "about" */ '../components/ProductDetails.vue'),
  },
  {
    path:'/login',
    name:'path',
    component: () => import( /* webpackChunkName: "about" */ '../components/login.vue'),
  },
  {
    path:'/search',
    name:'Search',
    component: () => import( /* webpackChunkName: "about" */ '../components/Search.vue'),
  },
  {
    path:'/cart',
    name:'Cart',
    component: () => import( /* webpackChunkName: "about" */ '../components/Cart.vue'),
  },
  {
    path:'/SignUp',
    name:'CustomerSignup',
    component: () => import( /* webpackChunkName: "about" */ '../components/CustomerSignup.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
