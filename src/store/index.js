import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { _ } from 'core-js'
const base_path='http://10.177.69.105:8090'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAccessToken:'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiIwZWZhMTlhMy02MTAwLTQxZGMtOTg1ZS00YmQ2OTQwNmFiOTEiLCJyb2xlIjoidXNlciJ9.CHwj8gY6grlAokIDGKmUm2TFWP2ol-tOSvM6gU4Q_zqwtETJCzh-S7jojr7E8ZyackLopHwAqcJEPzQPzuepvQ',
    merchantProducts:[],
    products:[],
    merchantProfile:{},
    merchantOrders:[],
    allCategories:[]
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
          },
        allCategories(state,data){
            state.allCategories=data
        }
    },
  actions: {
        getMerchantListOfProducts({commit,state}){
            axios
            .get(base_path+'/merchant/listOfProduct/'+state.userAccessToken)
            .then((response) => {
            commit('merchantProductList', response.data.data)
              })
          },
        getMerchantProfile({commit, state}) {
            var token = state.userAccessToken
            axios
            .get(base_path+'/merchant/profile/'+token)
            .then((response) => {
              window.console.log(response)
            commit('setMerchantProfile',response.data.data)
              })
          },
        getOrdersReceived({commit , state}) {
            axios
            .get(base_path+'/cartOrder/orderDetails/'+state.userAccessToken)
            .then((response) => {
              window.console.log(response)
            commit('ordersReceived',response.data.data)
              })
          },
        getListOfProducts({commit},selectedctegory) {
            axios
            .get(base_path+'/product/allProducts/'+selectedctegory)
            .then((response) => {
            commit('allProducts',response.data.data)
              })
          },
          getListOfCategories({commit}) {
            axios
            .get(base_path+'/product/allCategories')
            .then((response) => {
            commit('allCategories',response.data.data)
              })
          },

          merchantEdit({ commit }, data) {
              axios
                .post(base_path+'/merchant/edit',data)
                .then((resp)=>{
                  if(resp.status === "1000") {
                    alert("Edit Successfull")
                  commit()
                }
              })
                .catch(function (error) {
                    window.console.log(error);
                });
              }, 
          addProducts({commit},newProduct){
              axios
                .post(base_path+'/merchant/addProducts',
                  newProduct
                )
                .then((resp)=>{
                  window.console.log('this is my api response',resp)
                  if(resp.status === "1000") {
                    alert("Add Successfull")
                    commit()
                }
              })
                .catch(function (error) {
                    window.console.log(error);
                })
              },
          merchantSignup({commit},details){
            window.console.log('this is data at post',details)
              axios
                .post(base_path+'/merchant/registration',details)
                .then((response)=>{window.console.log(response)
                    if(response.status==='1000'){
                      alert('Successfully Registered. Now Login');
                    }
                    else{
                      if(response.message==='Already Exists'){
                        alert('User Already Exists..Please Login');
                      }                
                    }
                  }
                  )
                .catch(function (error) {
                    window.console.log(error);
                })
                commit()
              }
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
          },
        getAllCategories(state){
            return state.allCategories
        }
  }
})
