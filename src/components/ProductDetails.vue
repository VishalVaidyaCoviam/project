<template>
  <div>
    <h2 style="margin-left:20px;">
      Product Details
    </h2>
    <!-- {{this.$store.state.product}} -->
    <div class="flex-container flex-row">
      <div class="pflex-1">
        <!-- {{ productDetailsGetter.data }} -->
        <!-- {{merchantProductDetailsGetter.data}} -->
        <img v-bind:src="productDetailsGetter.data.data.productImage" alt class="prod-img" />
        <br>
        <!-- <div class="flex-container"> -->
      <!-- <div class="flex-1 col-three" @click="addToCart">
        <a class="btn btn-dark-blue">Add to Cart</a>
      </div> -->
      <!-- </div> -->
      </div>
      <div class="pflex-3 content">
        <div class="flex-container flex-row">
          <div class="pflex-1 flex-column">
            <div><label for>Product Name:</label></div>
            <div><label for="">Product description:</label></div>
            <div><label for="">Product Sell Count:</label></div>
            <div class="col-three" @click="addToCart">
              <a class="btn btn-dark-blue">Add to Cart</a>
            </div>       
          </div>
          <div class="pflex-3 flex-column wrap">
            <div>{{productDetailsGetter.data.data.productName}}</div>
            <div id="desc_div">{{productDetailsGetter.data.data.productDesc}}</div>
            <div>{{productDetailsGetter.data.data.sellCount}}</div>   
            <div class="col-buy" @click="addToCart" style="width:33%;">
              <a class="btn btn-dark-blue">Buy Now!</a>
            </div>       
          </div>
          
        </div>
        <!-- <table class="tbl-merchant">
          <tr>
            <th>
              <label for>Product Name:</label>
            </th>
            <td>
              <label for="productName">{{productDetailsGetter.data.productName}}</label>
            </td>
          </tr>
          <tr>
            <th>
              <label for>Product description:</label>
            </th>
            <td>{{productDetailsGetter.data.productDesc}}</td>
          </tr>
          <tr>
            <th>
              <label for>Product Name:</label>
            </th>
            <td>
              <label for="productName">{{productDetailsGetter.data.productName}}</label>
            </td>
          </tr>
        </table> -->
      </div>
      <!-- <br /> -->
    </div>
    <h3 style="margin-left:20px;">Merchant Details</h3>
    <div class="flex-container flex-column">
      <table class="tbl-merchant">
        <tr>
          <th></th>
          <th>
            <label for>Name</label>
          </th>
          <th>
            <label for>price</label>
          </th>
          <th>
            <label for>Rating</label>
          </th>
        </tr>
        <!-- <tr> -->
        <tr v-for="merchant in merchantProductDetailsGetter.data.data" v-bind:key="merchant.merchantId">
          <td>
            <input
              v-model="merchantId"
              type="radio"
              name="merchant"
              v-bind:value="merchant.merchantId"
            /> 
            <!-- {{merchant.merchantId}} -->
          </td>
          <td>
            <label>{{merchant.merchantName}}</label>
          </td>
          <td>
            <label>{{merchant.price}}</label>
          </td>
          <td>
            <label for>{{merchant.merchantRating}}</label>
          </td>
        </tr>
      </table>
      <!-- <button class="btn-blu">Add to Cart</button> -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "productDetails",
  data: function() {
    return {
      product: "",
      productId: "",
      merchantId: "1"
    };
  },
  props: {},
  methods: {
    addToCart() {
      window.console.log(this.merchantId);
      window.console.log(this.productId);
      
      if(localStorage.getItem('jwtToken') === null)
      {
        let Obj = {
          merchantId : this.merchantId,
          productId : this.productId,
          quantity: "1",
          UserId:localStorage.getItem('GuestToken')
        };
        this.$store.dispatch('AddToCartAction',Obj);
      }
      else{
        let Obj = {
          merchantId : this.merchantId,
          productId : this.productId,
          quantity: "1",
          token:localStorage.getItem('jwtToken')
        };
        window.console.log(Obj.token);
        this.$store.dispatch('AddToCartAction',Obj);
      } 
      // window.console.log()
    }
  },
  created() {
    this.productId = this.$route.params.id;
  },
  computed: {
    ...mapGetters(["productDetailsGetter","merchantProductDetailsGetter"])
    // get(){
    //   return this.$store.state.product;
    // }
    // ...mapGetters(["merchantProductDetailsGetter", "productDetailsGetter"])
  },
  mounted() {
    this.$store.dispatch('productDetailsAction',this.productId);
    // this.$store.dispatch("productDetailsAction");
    this.$store.dispatch('merchantProductDetailsAction',this.productId);
    // this.$store.dispatch("merchantProductDetailsAction");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
.col-six > a.btn {
  width: 10%;
}
.footer {
  position: static;
}
#desc_div {
  word-break: break-word;
  width: 45vw;
}
.tbl-merchant {
  border-collapse: collapse;
  width: 100%;
}
.tbl-merchant > th,
td {
  padding: 8px;
  text-align: left;
  /* border-bottom: 1px solid grey; */
}
.tbl-merchant > td,
th {
  padding: 8px;
  text-align: left;
  /* border-bottom: 1px solid grey; */
}
.tbl-merchant > tr:hover {
  background-color: #f5f5f5;
}
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.btn.btn-dark-blue {
  background-color: #2196f3;
  border-color: #237fbc;
  -webkit-box-shadow: 0 3px 0 #1a5c87;
  box-shadow: 0 3px 0 #1a5c87;
}
.btn.btn-dark-blue:hover {
  background-color: #166ea8;
}
.btn.btn-dark-blue:active {
  top: 3px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.wrap {
  flex-wrap: wrap;
}
.btn {
  font-size: 18px;
  white-space: nowrap;
  width: 90%;
  border-radius: 5%;
  padding: 0.8em 1.5em;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  line-height: 18px;
  display: inline-block;
  zoom: 1;
  color: #fff;
  text-align: center;
  position: relative;
  -webkit-transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
}
/* .btn-blu{
    background-color: dodgerblue;
    width: 20%;
    height: 25px;
} */
.col-three {
  width: 100%;
}
.flex-column > div {
  width: 100%;
  height: 50px;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.pflex-1 {
  flex-grow: 1;
}
.pflex-3 {
  flex-grow: 1;
  max-width: 70vw;
}
.flex-row {
  flex-direction: row;
}
.flex-container {
  display: flex;
  /* border: 1px solid black; */
}
.flex-1 {
  flex: 1 0 auto;
  /* border: 1px solid black; */
}
.flex-2 {
  flex: 2 0 auto;
  /* border: 1px solid black; */
}
.prod-img {
  height: 350px;
}
.content {
  padding-left: 3%;
  padding-top: 80px;
}
.tbl {
  height: auto;
  /* width: 90%; */

  /* border: 1px solid black; */
  /* display:flex; */
  /* overflow: hidden; */
  /* table-layout: fixed; */
}
</style>
