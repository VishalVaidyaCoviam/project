import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name:'errorPage',
    component: () => import( /* webpackChunkName: "about" */ '../components/Error.vue'),
  },
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
  },{
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
  },
  {
    path:'/popular',
    name:'popularProduct',
    component: () => import( /* webpackChunkName: "about" */ '../components/PopularProduct.vue'),
  },
  {
    path:'/loginHistory',
    name:'LoginHistory',
    component: () => import( /* webpackChunkName: "about" */ '../components/loginHistory.vue'),
  },
  {
    path:'/customerProfile',
    name:'customerProfile',
    component: () => import( /* webpackChunkName: "about" */ '../components/CustomerProfile.vue'),
  },
  {
    path:'/orderHistory',
    name: 'OrderHistory',
    component: () => import( /* webpackChunkName: "about" */ '../components/orderHistory.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
