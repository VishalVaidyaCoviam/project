import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

const base_path = 'http://10.177.69.105:8090';
// const base_path = 'http://localhost:3000';
import {
  Googleprovider,
  Facebookprovider
} from '../../firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular: {},
    product: {},
    merchantProduct: {},
    Googletoken: {},
    Facebooktoken: {},
    jwttoken:'',
    searchString: "",
    searchStringList: {},
    type:""
  },
  mutations: {
    popularProductsMutation(state, data) {
      state.popular = data;
    },
    productDetailsMutation(state, data) {
      state.product = data;
      window.console.log(state.product);
    },
    merchantProductDetailsMutation(state, data) {
      state.merchantProduct = data;
      window.console.log(state.merchantProduct);
    },
    GoogleMutation(state, token) {
      state.Googletoken = token;
    },
    FacebookMutation(state, token) {
      state.Facebooktoken = token;
    },
    setSearchStringMutation(state, data) {
      state.searchString =  data; 
      window.console.log(data);
      window.console.log('this is my data',state.searchString);
    },
    callSearchStringMutation(state, data) {
      state.searchStringList = data;
    },
    loginMutation(state,data){
      window.console.log(state.jwttoken);
      state.jwttoken = data;
    },
    typeMutation(state,data) {
      state.type = data;
    }
  },
  actions: {
    setStateAction({commit},type){
      commit('typeMutation',type);
    },
    setSearchStringAction({
      commit
    }, searchString) {
      window.console.log('called in actions',searchString);
      commit('setSearchStringMutation', searchString)
    },
    callSearchString({
      commit
    ,state}) {
      
      // window.console.log(" in post")
      window.console.log('this is my ',state.searchString);
      window.console.log()

      // window.console.log(str);
      axios.post(base_path+'/solrsearch/search', {
          searchString: state.searchString
        })
        .then(function (response) {
          // window.console.log(response);
          commit('callSearchStringMutation', response)
        });
    },
    login({commit},Obj){
      // window.console.log(Obj.email + " "+Obj.password+" "+Obj.role);
      axios
        .post(base_path+'/login/user',Obj)
        .then(function (response){
          commit('loginMutation',response.data.data);
        })
    },
    GoogleLogin({
      commit
    ,state}) {
      firebase.auth().signInWithPopup(Googleprovider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // window.console.log(result.credential);
        // var token = result.credential.accessToken;
        var idToken = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.console.log(idToken);
        window.console.log(user);
        // commit('GoogleMutation', idToken);
        axios
        .post(base_path+'/login/getGoogleDetailsFromWeb',{
          accesstoken: idToken,
          role:state.type,
          type: "web"
        })
        .then(function (response){
          window.console.log(response);
          commit('loginMutation',response.data.data);
        })
        // ...
      }).catch(function (error) {
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
    FacebookLogin({
      commit
    ,state}) {
      firebase.auth().signInWithPopup(Facebookprovider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var idToken = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        window.console.log(idToken);
        // window.console.log(user);
        // commit('FacebookMutation', idToken);
        axios
        .post(base_path+'/login/getFacebookDetails',{
          accesstoken: idToken,
          role:state.role,
          type: "web"
        })
        .then(function (response){
          window.console.log(response);
          commit('loginMutation',response.data.data);
        })
        // ...
      }).catch(function (error) {
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
    },
    PopularProductAction({
      commit
    }) {
      axios
        .get(base_path+"/solrsearch/popular")
        .then(response => (commit('popularProductsMutation', response)))
    },
    productDetailsAction({
      commit
    },productId) {
      var pro = productId;
      // var res;
      // window.console.log(pro);
      axios
        .get(base_path+"/product/details/"+pro)
        // .get(base_path+"/product/details")
        .then(response => (
          // window.console.log(response);
          commit('productDetailsMutation', response)))
          // window.console.log(response);
        },
    // merchantProductDetailsAction({commit},productId)
    
    merchantProductDetailsAction({
      commit
    },productId) {
      var pro = productId;
      window.console.log(pro);
      axios
        .get(base_path+"/merchant/listOfMerchant/"+pro)
        // .get("/merchant/product")
        .then(response => (commit('merchantProductDetailsMutation', response)))
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
    },
    searchStringListGetter(state) {
      return state.searchStringList;
    },
    jwttokenGetter(state){
      return state.jwttoken;
    }
  }
})