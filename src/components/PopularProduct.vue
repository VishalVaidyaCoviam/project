<template>
  <div class="flex-container flex-wrap">
  <div v-for="product in popularProductsGetter.data" v-bind:key="product.productId" class="prod-div al-cn" @click=productDetails(product.productId)>
      <img v-bind:src="product.productImage" class="prod" alt="">
      <br>
      <label class="label-prod">{{product.productName}}</label>
  </div>
  <button @click="login()">Login</button>
  <button @click="fb()">fb</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: "popularProduct",
  props: {
  },
  data:() =>{
    return{
    }
  },
  methods:{
    productDetails(prodcutId)
    {
      window.console.log(prodcutId);
      // router.push({ path: `/user/${userId}` }) // -> /user/123

      this.$router.push({ path: `/product/${prodcutId}` })
    },
    login()
    {
      this.$store.dispatch('GoogleLogin');  
    },
    fb(){
      this.$store.dispatch('FacebookLogin');
    }
  },
  computed:{
    ...mapGetters(['popularProductsGetter'])
  }
  ,
  mounted(){
    this.$store.dispatch('PopularProductAction');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
</style>
