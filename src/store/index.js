import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

const base_path = 'http://10.177.68.5:8090';
// const base_path = 'http://localhost:3000';
import {
  Googleprovider,
  Facebookprovider
} from '../../firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      userAccessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiIwZWZhMTlhMy02MTAwLTQxZGMtOTg1ZS00YmQ2OTQwNmFiOTEiLCJyb2xlIjoidXNlciJ9.CHwj8gY6grlAokIDGKmUm2TFWP2ol-tOSvM6gU4Q_zqwtETJCzh-S7jojr7E8ZyackLopHwAqcJEPzQPzuepvQ',
      merchantProducts: [],
      products: [],
      merchantProfile: {},
      merchantOrders: [],
      allCategories: [],
      popular: {},
      product: {},
      merchantProduct: {},
      Googletoken: {},
      Facebooktoken: {},
      jwttoken: '',
      searchString: "",
      searchStringList: {},
      type: "",
      response: {},
      cart: {}
    },
    mutations: {
      merchantProductList(state, data) {
        state.merchantProducts = data
      },
      setMerchantProfile(state, data) {
        state.merchantProfile = data
      },
      ordersReceived(state, data) {
        state.merchantOrders = data
      },
      allProducts(state, data) {
        state.products = data
      },
      allCategories(state, data) {
        state.allCategories = data
      },
      popularProductsMutation(state, data) {
        state.popular = data;
        window.console.log(data);
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
        state.searchString = data;
        window.console.log(data);
        window.console.log('this is my data', state.searchString);
      },
      callSearchStringMutation(state, data) {
        state.searchStringList = data;
      },
      loginMutation(state, data) {
        window.console.log(state.jwttoken);
        state.jwttoken = data;
      },
      typeMutation(state, data) {
        state.type = data;
      },
      ResponseMutation(state, data) {
        state.response = data;
      },
      CartMutation(state, data) {
        state.cart = data;
        window.console.log(data);
      }
    },
    actions: {
      getMerchantListOfProducts({
        commit,
        state
      }) {
        axios
          .get(base_path + '/merchant/listOfProduct/' + state.userAccessToken)
          .then((response) => {
            commit('merchantProductList', response.data.data)
          })
      },
      getMerchantProfile({
        commit,
        state
      }) {
        var token = state.userAccessToken
        axios
          .get(base_path + '/merchant/profile/' + token)
          .then((response) => {
            window.console.log(response)
            commit('setMerchantProfile', response.data.data)
          })
      },
      getOrdersReceived({
        commit,
        state
      }) {
        axios
          .get(base_path + '/cartOrder/orderDetails/' + state.userAccessToken)
          .then((response) => {
            window.console.log(response)
            commit('ordersReceived', response.data.data)
          })
      },
      getListOfProducts({
        commit
      }, selectedctegory) {
        axios
          .get(base_path + '/product/allProducts/' + selectedctegory)
          .then((response) => {
            commit('allProducts', response.data.data)
          })
      },
      getListOfCategories({
        commit
      }) {
        axios
          .get(base_path + '/product/allCategories')
          .then((response) => {
            commit('allCategories', response.data.data)
          })
      },

      merchantEdit({
        commit
      }, data) {
        axios
          .post(base_path + '/merchant/edit', data)
          .then((resp) => {
            if (resp.status === "1000") {
              alert("Edit Successfull")
              commit()
            }
          })
          .catch(function (error) {
            window.console.log(error);
          });
      },
      addProducts({
        commit
      }, newProduct) {
        axios
          .post(base_path + '/merchant/addProducts',
            newProduct
          )
          .then((resp) => {
            window.console.log('this is my api response', resp)
            if (resp.status === "1000") {
              alert("Add Successfull")
              commit()
            }
          })
          .catch(function (error) {
            window.console.log(error);
          })
      },
      merchantSignup({
        commit
      }, details) {
        window.console.log('this is data at post', details)
        axios
          .post(base_path + '/merchant/registration', details)
          .then((response) => {
            window.console.log(response)
            if (response.status === '1000') {
              alert('Successfully Registered. Now Login');
            } else {
              if (response.message === 'Already Exists') {
                alert('User Already Exists..Please Login');
              }
            }
          })
          .catch(function (error) {
            window.console.log(error);
          })
        commit()
      },
    CartPageAction({
      commit
    }) {
      window.console.log("in cart");
      axios
        .get(base_path + "/cartorderservice/cartOrder/cart/" + localStorage.getItem('jwtToken'))
        .then(response => (commit('CartMutation', response)))
    },
    AddToCartAction({
      commit
    }, Obj) {
      window.console.log(Obj)
      axios.post(base_path + '/cartorderservice/cartOrder/addToCart', Obj)
        .then(function (response) {
          window.console.log(response);
          commit('ResponseMutation', response);
        });
    },
    setStateAction({
      commit
    }, type) {
      commit('typeMutation', type);
    },
    setSearchStringAction({
      commit
    }, searchString) {
      window.console.log('called in actions', searchString);
      commit('setSearchStringMutation', searchString)
    },
    callSearchString({
      commit,
      state
    }) {

      // window.console.log(" in post")
      window.console.log('this is my ', state.searchString);
      window.console.log()

      // window.console.log(str);
      axios.post(base_path + '/solrsearchservice/solrsearch/search', {
          searchString: state.searchString
        })
        .then(function (response) {
          // window.console.log(response);
          commit('callSearchStringMutation', response)
        });
    },
    login({
      commit
    }, Obj) {
      // window.console.log(Obj.email + " "+Obj.password+" "+Obj.role);
      axios
        .post(base_path + '/loginservice/login/user', Obj)
        .then(function (response) {
          commit('loginMutation', response.data.data);
        })
    },
    GoogleLogin({
      commit,
      state
    }) {
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
          .post(base_path + '/loginservice/login/getGoogleDetailsFromWeb', {
            accesstoken: idToken,
            role: state.type,
            type: "web"
          })
          .then(function (response) {
            window.console.log(response);
            commit('loginMutation', response.data.data);
            localStorage.setItem('jwtToken', response.data.data);
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
      commit,
      state
    }) {
      firebase.auth().signInWithPopup(Facebookprovider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var idToken = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        window.console.log(idToken);
        // window.console.log(user);
        // commit('FacebookMutation', idToken);
        axios
          .post(base_path + '/loginservice/login/getFacebookDetails', {
            accesstoken: idToken,
            role: state.role,
            type: "web"
          })
          .then(function (response) {
            window.console.log(response);
            commit('loginMutation', response.data.data);
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
      window.console.log("i'm in");
      axios
        .get(base_path + "/solrsearchservice/solrsearch/popular")
        .then(response => (commit('popularProductsMutation', response)))
    },
    productDetailsAction({
      commit
    }, productId) {
      var pro = productId;
      // var res;
      // window.console.log(pro);
      axios
        .get(base_path + "/productservice/product/details/" + pro)
        // .get(base_path+"/product/details")
        .then(response => (
          // window.console.log(response);
          commit('productDetailsMutation', response)))
      // window.console.log(response);
    },
    // merchantProductDetailsAction({commit},productId)

    merchantProductDetailsAction({
      commit
    }, productId) {
      var pro = productId;
      window.console.log(pro);
      axios
        .get(base_path + "/merchantservice/merchant/listOfMerchant/" + pro)
        // .get("/merchant/product")
        .then(response => (commit('merchantProductDetailsMutation', response)))
    }
  },
  getters: {
    merchantProductsGetter(state) {
      return state.merchantProducts
    },
    merchantOrdersGetter(state) {
      return state.merchantOrders
    },
    merchantProfileGetter(state) {
      return state.merchantProfile
    },
    getuserAccessToken(state) {
      return state.userAccessToken
    },
    getAllProducts(state) {
      return state.products
    },
    getAllCategories(state) {
      return state.allCategories
    },
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
    jwttokenGetter(state) {
      return state.jwttoken;
    },
    cartGetter(state) {
      return state.cart;
    }
  }
})