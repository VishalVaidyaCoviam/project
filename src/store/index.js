import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import {Googleprovider} from '../../firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAccessToken:'',
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
          },
        GoogleMutation(state,token){
          state.userAccessToken=token
        }
    },
  actions: {
    GoogleLogin({commit}){
      firebase.auth().signInWithPopup(Googleprovider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.console.log(token);
        window.console.log(user);
        commit('GoogleMutation',token);
        // ...
        axios
        .post('/merchant/registration',{
          token
        })
        .then(window.console.log())
        .catch(function (error) {
          window.console.log(error);
        })
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        window.console.log(errorCode);
        window.console.log(errorMessage);
        window.console.log(email);
        window.console.log(credential);
      })
    },
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
                .post('/merchant/addProducts',{
                  newProduct
                })
                .then(alert('Successfull'))
                .catch(function (error) {
                    window.console.log(error);
                }),
              merchantSignup: (obj) =>
              axios
                .post('merchant/registration',{
                  obj
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
