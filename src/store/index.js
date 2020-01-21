import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

import {Googleprovider,Facebookprovider} from '../../firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular:{},
    product:{},
    merchantProduct:{},
    Googletoken:{},
    Facebooktoken:{}
  },
  mutations: {
    popularProductsMutation(state,data)
    {
      state.popular = data;
    },
    productDetailsMutation(state,data)
    {
      state.product = data;
      // window.console.log(state.product.data);
    }
    ,
    merchantProductDetailsMutation(state,data)
    {
      state.merchantProduct = data;
      // window.console.log(state.merchantProduct.data);
    },
    GoogleMutation(state,token)
    {
      state.Googletoken = token;
    },
    FacebookMutation(state,token)
    {
      state.Facebooktoken = token;
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
        
      });
    },
    FacebookLogin({commit}){
      firebase.auth().signInWithPopup(Facebookprovider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.console.log(token);
        window.console.log(user);
        commit('FacebookMutation',token);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        window.console.log(errorCode);
        window.console.log(errorMessage);
        window.console.log(email);
        window.console.log(credential);
        // ...
      });
    }
    ,
    PopularProductAction({commit}) {
      axios
    .get("/solrsearch/popular")
    .then(response => (commit('popularProductsMutation',response))) 
    },
    productDetailsAction({commit}){
      axios
      // .get("/product/details/"+productId)
      .get("/product/details")
      .then(response => (commit('productDetailsMutation',response))) 
    }
    ,
    // merchantProductDetailsAction({commit},productId)
    merchantProductDetailsAction({commit})
    {
      axios
      // .get("/merchant/product/"+productId)
      .get("/merchant/product")
      .then(response => (commit('merchantProductDetailsMutation',response)))
    }
  },
  getters: {
    popularProductsGetter(state) {
      return state.popular;
    },
    productDetailsGetter(state) {
      return state.product;
    },
    merchantProductDetailsGetter(state) {
      return state.merchantProduct;
    }
  }
})
