import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAccessToken:'1',
    merchantProducts:[],
    products:[],
    merchantProfile:{},
    merchantOrders:[]
  },
  mutations: {
        merchantProductList(state,data){
            state.merchantProducts = data 
          },
        setMerchantProfile(state,data){
            state.merchantProfile = data
          },
        ordersReceived(state,data){
            state.merchantOrders=data
          },
        allProducts(state,data){
            state.products=data
          }
    },
  actions: {
        getMerchantListOfProducts({commit}){
            axios
            .get('/merchant/listOfProduct')
            .then((response) => {
            commit('merchantProductList', response)
              })
          },
        getMerchantProfile({commit}) {
            axios
            .get('/merchant/profile')
            .then((response) => {
            commit('setMerchantProfile',response.data)
              })
          },
        getOrdersReceived({commit}) {
            axios
            .get('/cartOrder/orderDetails')
            .then((response) => {
            commit('ordersReceived',response)
              })
          },
        getListOfProducts({commit}) {
            axios
            .get('/products/allProducts')
            .then((response) => {
            commit('allProducts',response)
              })
          },
          merchantEdit: (state,params) =>
              axios
                .post('/merchant/edit'+state.userAccessToken,{
                  params
                })
                .then(alert("Edit Successfull"))
                .catch(function (error) {
                    window.console.log(error);
                }),
          addProducts: (newProduct) =>
              axios
                .post('/merchant/addProducts'+this.userAccessToken,{
                  newProduct
                })
                .then(alert("Add Successfull"))
                .catch(function (error) {
                    window.console.log(error);
                })
              },
  getters: {
        merchantProductsGetter(state){
            return state.merchantProducts
          },
        merchantOrdersGetter(state){
            return state.merchantOrders
          },
        merchantProfileGetter(state){
            return state.merchantProfile
        },
        getuserAccessToken(state){
            return state.userAccessToken
        },
        getAllProducts(state){
          return state.products
        }
  }
})
