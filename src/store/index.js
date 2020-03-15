import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
// import router from './router'




const base_path = 'http://10.177.68.36:8090';
// const base_path = 'http://localhost:3000';
import {
  Googleprovider,
  Facebookprovider
} from '../../firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAccessToken: '',
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
    cart: {},
    cartObj: {},
    checkout: "",
    signup: {},
    guestToken: '',
    loginHistory: {},
    orderHistory: {},
    customerProfile: {}
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
      window.console.log(data);
    },
    allCategories(state, data) {
      state.allCategories = data
      window.console.log(data);
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
    },
    CartObjMutation(state, data) {
      state.cartObj = data;
    },
    CheckoutMutation(state, data) {
      state.checkout = data;
    },
    SignUpMutation(state, data) {
      state.signup = data;
    },
    jwtTokenMutation(state, data) {
      state.jwttoken = data;
    },
    guestTokenMutation(state, data) {
      state.guestToken = data;
    },
    loginHistory(state, data) {
      state.loginHistory = data;
    },
    orderHistory(state, data) {
      state.orderHistory = data;
    },
    userAccessTokenMutation(state, data) {
      state.userAccessToken = data;
    },
    setCustomerProfile(state, data) {
      state.customerProfile = data;
    }
  },
  actions: {
    addToCartBuyNow({
      commit
    }, {
      Obj,
      success
    }) {
      window.console.log(Obj)
      axios.post(base_path + '/cartorderservice/cartOrder/addToCart', Obj)
        .then(function (response) {
          success && success()
          window.console.log(response);
          commit('ResponseMutation', response);
        });
    },
    getGuestToken({
      commit
    }, {
      dispatchCart
    }) {
      axios
        .get(base_path + '/loginservice/getGuestToken')
        .then((response) => {
          window.console.log(response);
          localStorage.setItem('guestToken', response.data.data)
          commit('guestTokenMutation', response.data.data)
          dispatchCart && dispatchCart()

        })
    },
    getUserOrderHistory({
      commit
    }) {
      axios
        .get(base_path + '/cartorderservice/cartOrder/orderHistory/' + localStorage.getItem('jwtToken'))
        .then((response) => {
          window.console.log(response)
          commit('orderHistory', response)
        })
    },
    getUserLoginHistory({
      commit
    }) {
      axios
        .get(base_path + '/loginservice/viewHistory/' + localStorage.getItem('jwtToken'))
        .then((response) => {
          window.console.log(response)
          commit('loginHistory', response)
        })
    },
    getGuestAddtoCartToken({
      commit,
      dispatch
    }, Obj) {
      axios
        .get(base_path + '/loginservice/getGuestToken')
        .then((response) => {
          window.console.log(response);
          localStorage.setItem('guestToken', response.data.data)
          commit('guestTokenMutation', response.data.data)
          let Obj_1 = {
            merchantId: Obj.merchantId,
            productId: Obj.productId,
            quantity: "1",
            token: response.data.data
          }
          window.console.log("After Response")
          window.console.log(Obj)
          window.console.log(Obj_1)
          dispatch('AddToCartAction', Obj_1);
        })
    },
    removejwtToken({
      commit
    }) {
      localStorage.removeItem('jwtToken');
      commit('jwtTokenMutation', localStorage.getItem('jwtToken'));
    },
    SignUpCustomer({
      commit,
      router
    }, {
      Obj,
      success,
      fail
    }) {
      window.console.log(Obj);
      axios
        .post(base_path + '/loginservice/saveCustomer', Obj)
        .then((resp) => {
          window.console.log(resp);
          if (resp.data.status == 1000) {
            success && success()
            alert("SignUp Successfull")
            commit('SignUpMutation', resp);
            router.push({
              path: '/login'
            })
          }
        })
        .catch(function (error) {
          window.console.log(error);
          fail && fail()
        });
    },
    CheckoutAction({
      commit,
      dispatch
    }) {
      window.console.log("in action ");
      axios
        .get(base_path + '/cartorderservice/cartOrder/checkout/' + localStorage.getItem('jwtToken'))
        .then((response) => {
          if (response.data.status == 400) {
            alert(response.data.message)
          } else {
            dispatch("CartPageAction");
            commit('CheckoutMutation', response)
            window.console.log(response);
          }
        })
    },
    UpdateQuantity({
      commit,
      dispatch
    }, CartObj) {
      window.console.log(CartObj);
      axios
        .post(base_path + '/cartorderservice/cartOrder/updateQuantity', CartObj)
        .then((resp) => {
          window.console.log(resp);
          if (resp.data.status == 1000) {
            // window.console.log(resp);
            dispatch("CartPageAction");
            alert("Update Successfull")
            commit('CartObjMutation', resp);
          }
        })
        .catch(function (error) {
          window.console.log(error);
        });
    },
    removeCart({
      commit,
      dispatch
    }, CartObj) {
      window.console.log(CartObj);
      axios
        .post(base_path + '/cartorderservice/cartOrder/remove', CartObj)
        .then((resp) => {
          // if (resp.status === "1000") {
          window.console.log(resp);
          dispatch("CartPageAction");
          alert("Update Successfull")
          commit('CartObjMutation', resp);
          // }
        })
        .catch(function (error) {
          window.console.log(error);
        });
    },
    getMerchantListOfProducts({
      commit
    }) {
      axios
        .get(base_path + '/merchantservice/merchant/listOfProduct/' + localStorage.getItem('userAccessToken'))
        .then((response) => {
          commit('merchantProductList', response.data.data)
        })
    },
    getCustomerProfile({
      commit
    }) {
      axios
        .get(base_path + '/loginservice/viewDetails/' + localStorage.getItem('jwtToken'))
        .then((response) => {
          window.console.log(response)
          commit('setCustomerProfile', response)
        })
    },
    getMerchantProfile({
      commit
    }) {
      axios
        .get(base_path + '/merchantservice/merchant/profile/' + localStorage.getItem('userAccessToken'))
        .then((response) => {
          window.console.log(response)
          commit('setMerchantProfile', response.data.data)
        })
    },
    getOrdersReceived({
      commit
    }) {
      axios
        .get(base_path + '/cartorderservice/cartOrder/orderDetails/' + localStorage.getItem('userAccessToken'))
        .then((response) => {
          window.console.log(response)
          commit('ordersReceived', response.data.data)
        })
    },
    getListOfProducts({
      commit
    }, selectedctegory) {
      window.console.log(selectedctegory);
      axios
        .get(base_path + '/productservice/product/allProducts/' + selectedctegory)
        .then((response) => {
          commit('allProducts', response.data.data)
        })
    },
    getListOfCategories({
      commit
    }) {
      window.console.log("In");
      axios
        .get(base_path + '/productservice/product/allCategories')
        .then((response) => {
          commit('allCategories', response.data.data)
        })
    },

    merchantEdit({
      commit,
      dispatch
    }, data) {
      axios
        .post(base_path + '/merchantservice/merchant/edit', data)
        .then((resp) => {
          window.console.log(resp)
          if (resp.data.status == 1000) {
            // alert("Edit Successfull")
            dispatch('getMerchantListOfProducts')
            commit()
          }
        })
        .catch(function (error) {
          window.console.log(error);
        });
    },
    addProducts({
      commit,
      dispatch
    }, newProduct) {
      axios
        .post(base_path + '/merchantservice/merchant/addProducts',
          newProduct
        )
        .then((resp) => {
          window.console.log('this is my api response', resp)
          if (resp.data.data.status === "1000") {
            dispatch('getMerchantListOfProducts');
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
        .post(base_path + '/merchantservice/merchant/registration', details)
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
      let token = "";
      if (localStorage.getItem('guestToken') === null)
        token = localStorage.getItem('jwtToken');
      else
        token = localStorage.getItem('guestToken');
      axios
        .get(base_path + "/cartorderservice/cartOrder/cart/" + token)
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
        .post(base_path + '/loginservice/user', Obj)
        .then(function (response) {
          // window.console.log("Response ",response);
          // window.console.log("Response ",response.data);
          // window.console.log("Response ",response.data.data);
          if (response.data.status == 1000) {
            if (Obj.userRole == 0) {
              localStorage.setItem('jwtToken', response.data.data);
              localStorage.removeItem('guestToken');
              commit('loginMutation', response.data.data);
            } else {
              localStorage.setItem('userAccessToken', response.data.data);
              commit('userAccessTokenMutation', response.data.data);
            }
          } else {
            alert(response.data.message)
          }
        })
    },
    GoogleLogin({
      commit
    }, type) {
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
        window.console.log("state type", type);
        axios
          .post(base_path + '/loginservice/getGoogleDetailsFromWeb', {
            accesstoken: idToken,
            role: type,
            type: "web",
            guestAccessToken: localStorage.getItem('guestToken')
          })
          .then(function (response) {
            if (response.data.status == 1000) {
              window.console.log(response);
              window.console.log(type);
              if (type == "0") {
                localStorage.setItem('jwtToken', response.data.data);
                localStorage.removeItem('guestToken');
                commit('loginMutation', response.data.data);
              } else {
                localStorage.setItem('userAccessToken', response.data.data);
                commit('userAccessTokenMutation', response.data.data);
                // commit('typeMutation',type);
              }
            } else {
              alert(response.data.message)
            }
            // 
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
    }, type) {
      firebase.auth().signInWithPopup(Facebookprovider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var idToken = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        window.console.log(idToken);
        // window.console.log(user);
        // commit('FacebookMutation', idToken);
        axios
          .post(base_path + '/loginservice/getFacebookDetails', {
            accesstoken: idToken,
            role: type,
            type: "web",
            guestAccessToken: localStorage.getItem('guestToken')
          })
          .then(function (response) {
            window.console.log(response);
            window.console.log(type);
            if (response.data.status == 1000) {
              if (type == "0") {
                localStorage.setItem('jwtToken', response.data.data);
                localStorage.removeItem('guestToken');
                commit('loginMutation', response.data.data);
              } else {
                localStorage.setItem('userAccessToken', response.data.data);
                commit('userAccessTokenMutation', response.data.data);
                // commit('typeMutation',type);
              }
            } else {
              alert(response.data.message)
            }
            // window.console.log(response);
            // commit('loginMutation', response.data.data);
          })
        // localStorage.removeItem('guestToken');
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
    },
    userLoginHistoryGetter(state) {
      return state.loginHistory;
    },
    userOrderHistoryGetter(state) {
      return state.orderHistory;
    },
    getUserAccessToken(state) {
      return state.userAccessToken;
    },
    customerProfileGetter(state) {
      return state.customerProfile;
    }
  }
})