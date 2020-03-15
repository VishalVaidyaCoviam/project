<template>
  <div class="flex-container flex-wrap">
      <div v-if="searchStringListGetter.data.length != 0" class="flex-container" >
      <div class="flex-1">
    <h2 style="margin-left:20px;">
      Product Details
    </h2>
      </div>
      </div>
      <div v-if="searchStringListGetter.data.length == 0"> 
        <center>
          <h1>No Results Found</h1>
        </center>
    </div>
      <!-- {{searchStringListGetter}} -->
  <div v-for="product in searchStringListGetter.data" v-bind:key="product.productId" class="prod-div al-cn bd" @click=productDetails(product.productId)>
      <img v-bind:src="product.productImage" class="prod" alt="">
      <br>
      <label class="label-prod">{{product.productName}}</label>
      <br>
      <div class = "label-rating">
      <label for="">Rating: {{product.productRating}}</label>
      </div>
  </div>
  <!-- </div> -->
  <!-- <button @click="login()">Login</button>
  <button @click="fb()">fb</button> -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: "Search",
  props: {
  },
  data:() =>{
    return{
        search : ""
    }
  },
  methods:{
      productDetails(prodcutId)
    {
      window.console.log(prodcutId);
      // router.push({ path: `/user/${userId}` }) // -> /user/123

      this.$router.push({ path: `/product/${prodcutId}` })
    }
    // productDetails(prodcutId)
    // {
    //   window.console.log(prodcutId);
    //   // router.push({ path: `/user/${userId}` }) // -> /user/123

    //   this.$router.push({ path: `/product/${prodcutId}` })
    // },
    // login()
    // {
    //   this.$store.dispatch('GoogleLogin');  
    // },
    // fb(){
    //   this.$store.dispatch('FacebookLogin');
    // }
  },
  computed: {
    ...mapGetters(["searchStringListGetter"])
    
    // ...mapGetters(["searchStringGetter"]);
  },
  mounted() {
      if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
      this.$store.dispatch('callSearchString');
    // this.$store.dispatch(['productDetailsAction'],prodcutId);
    // this.$store.dispatch("productDetailsAction");
    // this.$store.dispatch(['merchantProductDetailsAction'],prodcutId);
    // this.$store.dispatch("merchantProductDetailsAction");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
.bd {
  /* border-bottom: 0.5px solid grey;
  border-right: 0.5px outset grey; */
  /* .card { */
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 5px;
}
.bd:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.label-rating {
    float:left;
    margin-left: 5px;
}

</style>
