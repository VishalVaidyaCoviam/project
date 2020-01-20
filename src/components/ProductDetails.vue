<template>
  <div>
    <h2 style="margin-left:20px;"> 
      <label for>Product Details</label>
    </h2>
    <div class="flex-container">
      <div class="flex-1">
        <img v-bind:src="productDetailsGetter.data.productImage" alt class="prod-img" />
      </div>
      <div class="flex-2 content">
        <table class="tbl-merchant">
          <tr>
            <th>
              <label for>Product Name:</label>
            </th>
            <td class="flex-container">
              <label
                for="productName"
                style="flex-wrap:wrap;"
              >{{productDetailsGetter.data.productName}}</label>
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
        </table>
      </div>
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
        <tr v-for="merchant in merchantProductDetailsGetter.data" v-bind:key=merchant.merchantId>
          <td>
            <input v-model="merchantId" type="radio" name="merchant" v-bind:value="merchant.merchantId" />
            {{merchant.merchantId}}
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
      <br />
      <div class="col-three" @click="addToCart">
        <a class="btn btn-dark-blue">Add to Cart</a>
      </div>
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
      productId:"",
      merchantId: "1"
    };
  },
  props: {},
  methods:{
      addToCart()
      {
          window.console.log(this.merchantId);
      }
  },
  created() {
    this.productId = this.$route.params.id;
  },
  computed: {
    ...mapGetters(["merchantProductDetailsGetter", "productDetailsGetter"])
  },
  mounted() {
    // this.$store.dispatch(['productDetailsAction'],prodcutId);
    this.$store.dispatch("productDetailsAction");
    // this.$store.dispatch(['merchantProductDetailsAction'],prodcutId);
    this.$store.dispatch("merchantProductDetailsAction");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
.tbl-merchant {
  border-collapse: collapse;
  width: 100%;
}
.tbl-merchant > th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid grey;
}
.tbl-merchant > td,
th {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid grey;
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
.btn {
  font-size: 18px;
  white-space: nowrap;
  width: 15%;
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
  width: 5px;
}
.flex-column > div {
  width: 100%;
  height: 50px;
}
.flex-column {
  display: flex;
  flex-direction: column;
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
  flex: 1 0 auto;
  /* border: 1px solid black; */
}
.prod-img {
  height: 350px;
}
.content {
  padding-left: 5%;
  padding-top: 80px;
}
.tbl {
  height: auto;
  /* width: 90%; */

  border: 1px solid black;
  /* display:flex; */
  /* overflow: hidden; */
  /* table-layout: fixed; */
}
</style>
