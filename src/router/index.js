import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'merchanthome',
    component: () => import(/* webpackChunkName: "about" */ '../components/merchanthome.vue')
  },
  {
    path: '/header',
    name: 'header',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Header.vue')
  },
  {
<<<<<<< HEAD
    path: '/merchant',
    name: 'merchant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/merchanthome.vue')
  },
  {
    path: '/listOfProduct',
    name: 'listOfProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ListOfProduct.vue')
  },
  {
    path: '/ordersReceived',
    name: 'ordersReceived',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ordersReceived.vue')
  },
  {
    path: '/merchantProfile',
    name: 'merchantProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/merchantProfile.vue')
  },
  {
    path: '/addProducts',
    name: 'addProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/addProducts.vue')
  },
  {
    path: '/editProducts/:id',
    name: 'editProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/editProducts.vue')
  },
  {
    path: '/merchantSignup',
    name: 'merchantSignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/merchantSignup.vue')
=======
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
>>>>>>> d0cefc6d50f71b11c43387a5b5f571cc103a33fd
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
