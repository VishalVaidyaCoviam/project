import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular:{},
    product:{}
  },
  mutations: {
    popularProductsMutation(state,data)
    {
      state.popular = data;
    },
    productDetailsMutation(state,data)
    {
      state.product = data;
      window.console.log(data);
    }
  },
  actions: {
    PopularProductAction({commit}) {
      axios
    .get("/solrsearch/popular")
    .then(response => (commit('popularProductsMutation',response))) 
    },
    productDetailsAction({commit},productId){
      axios
      .get("/product/details/"+productId)
      .then(response => (commit('productDetailsMutation',response))) 
    }
    // productAction({commit},productId)
    // {
    //   axios
    //   .get(configs)
    // }
  },
  getters: {
    popularProductsGetter(state) {
      return state.popular;
    }
  }
})
