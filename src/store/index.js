import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular:{},
    product:{},
    merchantProduct:{}
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
    }
  },
  actions: {
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
