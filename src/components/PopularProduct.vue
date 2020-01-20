<template>
  <div class="flex-container">
    HJello
  <div v-for="product in info" class="flex-1" v-bind:key="product.productId">
      {{product.productId}}
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "foot",
  props: {
    msg: String
  },
  data:() =>{
    return{
    info: null
    }
  },
  methods:{
    logs(){
      window.console.log(this.info);
    }
  },
  mounted(){
    axios
    .get('http://0.0.0.0:3000/solrsearch/popular')
    .then(response => (this.info=response.data)) //this.info = response
    
    this.logs()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
</style>
