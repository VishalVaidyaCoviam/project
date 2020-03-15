<template>
  <div>
    <h2 style="margin-left:20px;">Product Details</h2>

    <!-- {{this.$store.state.product}} -->
    <div class="flex-container flex-row">
      <div class="pflex-1">
        <!-- {{ productDetailsGetter.data }} -->
        <!-- {{merchantProductDetailsGetter.data}} -->
        <img v-bind:src="productDetailsGetter.data.data.productImage" alt class="prod-img" />
        <!-- <img v-bind:src="productDetailsGetter.data.productImage" alt class="prod-img" /> -->
        <br />
      </div>
      <div class="pflex-3 content">
        <div class="flex-container flex-row">
          <div class="pflex-1 flex-column">
            <div class="pflex-1 flex-row">
              <div class="pflex-1">
                <label for>Product Name:</label>
              </div>
              <div class="pflex-9">{{productDetailsGetter.data.data.productName}}</div>
            </div>
            <div class="pflex-1 flex-row">
              <div class="pflex-1">
                <label for>Product description:</label>
              </div>
              <div id="desc_div" class="pflex-1">{{productDetailsGetter.data.data.productDesc}}</div>
            </div>
            <div class="pflex-1 flex-row">
              <div class="pflex-1">
                <label for>Product Sell Count:</label>
              </div>
              <div class="pflex-18">{{productDetailsGetter.data.data.sellCount}}</div>
            </div>
            <div class="pflex-1 flex-row">
              <div class="col-three pflex-1" @click="addToCart" style="width:33%;">
                <a class="btn btn-dark-blue">Add to Cart</a>
              </div>
              <div class="col-buy pflex-1" @click="buyNow" style="width:33%;">
                <a class="btn btn-dark-blue">Buy Now!</a>
              </div>
            </div>
          </div>
          <!-- <div class="pflex-3 flex-column wrap"> -->
          <!-- <div>{{productDetailsGetter.data.data.productName}}</div>
            <div id="desc_div">{{productDetailsGetter.data.data.productDesc}}</div>
          <div>{{productDetailsGetter.data.data.sellCount}}</div>-->

          <!-- </div> -->
        </div>
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
        <!-- <tr> -->
        <!-- v-for="merchant in merchantProductDetailsGetter.data.data" -->
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
      merchantId: ""
    };
  },
  props: {},
  methods: {
    addToCart() {
      window.console.log(this.merchantId);
      window.console.log(this.productId);

      if (localStorage.getItem("jwtToken") === null) {
          this.guestTokenFunction
        let Obj = {
          merchantId: this.merchantId,
          productId: this.productId,
          quantity: "1",
          token: localStorage.getItem("guestToken")
        };
        if(localStorage.getItem("guestToken") != null)
          this.$store.dispatch("AddToCartAction", Obj);
        else
          this.$store.dispatch('getGuestAddtoCartToken',Obj);
      } else {
        // if(this.merchantId == 0)
        // eslint-disable-next-line no-undef
        // this.merchantId = merchantProductDetailsGetter.data.data[0].merchantId
        let Obj = {
          merchantId: this.merchantId,
          productId: this.productId,
          quantity: "1",
          token: localStorage.getItem("jwtToken")
        };
        window.console.log(Obj.token);
        this.$store.dispatch("AddToCartAction", Obj);
      }
      // window.console.log()
    },
  //  buyNow1() {
  //     window.console.log(this.merchantId);
  //     window.console.log(this.productId);

  //     if (localStorage.getItem("jwtToken") === null) {
  //         this.guestTokenFunction
  //       let Obj = {
  //         merchantId: this.merchantId,
  //         productId: this.productId,
  //         quantity: "1",
  //         token: localStorage.getItem("GuestToken")
  //       };
  //       if(localStorage.getItem("GuestToken") != null)
  //         this.$store.dispatch("AddToCartAction", Obj);
  //       else
  //         this.$store.dispatch('getGuestAddtoCartToken',Obj);
  //     } else {
  //       // if(this.merchantId == 0)
  //       // eslint-disable-next-line no-undef
  //       // this.merchantId = merchantProductDetailsGetter.data.data[0].merchantId
  //       let Obj = {
  //         merchantId: this.merchantId,
  //         productId: this.productId,
  //         quantity: "1",
  //         token: localStorage.getItem("jwtToken")
  //       };
  //       window.console.log(Obj.token);
  //      this.$store.dispatch("AddToCartAction", Obj);
  //     }
  //     // window.console.log()
  //     this.$router.push({path: '/cart'})
  //  },
  buyNow() {
      if (localStorage.getItem("jwtToken") != null) 
        this.AddtoCart()
      else if(localStorage.getItem("guestToken") != null)
        this.AddtoCart()
      else
      {
        this.$store.dispatch('getGuestToken',{
          dispatchCart : this.AddtoCart
        })
      }
    },
    AddtoCart(){
      window.console.log("in");
      if (localStorage.getItem("jwtToken") === null) {
        window.console.log("guest");
          let Obj = {
            merchantId: this.merchantId,
          productId: this.productId,
          quantity: "1",
          token: localStorage.getItem("guestToken")
          }
          this.$store.dispatch('addToCartBuyNow',{
            Obj : Obj,
            success: this.dispatchCart
          })
      }
      else
      {
        window.console.log("jwtToken");
        let Obj = {
          merchantId: this.merchantId,
          productId: this.productId,
          quantity: "1",
          token: localStorage.getItem("jwtToken")
        }
         this.$store.dispatch('addToCartBuyNow',{
            Obj : Obj,
            success: this.dispatchCart
          })
      }
         
    },
    dispatchCart(){
       this.$router.push({path: '/cart'})
    }
  },
  created() {
    this.productId = this.$route.params.id;
    // this.merchantId = merchantProductDetailsGetter.data.data[0].merchantId;
  },
  computed: {
    // get(){
    //   return this.$store.state.product;
    // }

    ...mapGetters(["merchantProductDetailsGetter", "productDetailsGetter"])
  },
  mounted() {
    if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
    this.$store.dispatch("productDetailsAction", this.productId);
    // this.$store.dispatch("productDetailsAction");
    this.$store.dispatch("merchantProductDetailsAction", this.productId);
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
  /* height: 50px; */
}
.flex-column {
  display: flex;
  flex-direction: column;
  /* border:1px solid black; */
}
.pflex-1 {
  flex-grow: 1;
  /* border:1px solid black; */
}
.pflex-3 {
  flex-grow: 3;
  /* max-width: 70vw; */
}
.pflex-4 {
  flex-grow: 4;
}
.pflex-9 {
  flex-grow: 9;
}
.pflex-18 {
  flex-grow: 18;
}
.flex-row {
  flex-direction: row;
  display: flex;
  /* border:1px solid black; */
}
.flex-container {
  display: flex;
  /* border:1px solid black; */
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
  /* max-width: 50%; */
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
