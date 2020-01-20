<template>
  <div class="flex-container flex-wrap">
  <div v-for="product in popularProductsGetter.data" v-bind:key="product.productId" class="prod-div al-cn" @click="productDetails(product.productId)">
      <img v-bind:src="product.productImage" class="prod" alt="">
      <br>
      <label class="label-prod">{{product.productName}}</label>
  </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: "foot",
  props: {
    msg: String
  },
  data:() =>{
    return{
    }
  },
  methods:{
    productDetails(prodcutId)
    {
      window.console.log(prodcutId);
      this.$store.dispatch(['productDetailsAction'],prodcutId);
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
