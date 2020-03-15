<template>
  <div  class="flex-container flex-column"> 
    <div class="flex-container">
      <!-- <div v-if="cartGetter.data.data.length > 0" class="flex-1"> -->
        <div v-if="cartGetter.data.data.length > 0" class="flex-1">
        <label style="margin-left:20px;font-weight:900;">Cart Details</label>
        <div  style="float:right;width:33%;margin-bottom:20px;">
          <a class="btn btn-dark-blue" @click="checkout">Checkout</a>
        </div>
      </div>
      <div class="flex-1" v-else-if="cartGetter.data.data.length == 0">
      <div style="float:left;">
          <label style="font-weight:900;" for="">Cart Empty</label>
      </div>
      <div style="float:right;">
        <router-link to="/popular">Home Page</router-link>
      </div>
      </div>
    </div>
    <div>
      <div v-for="cart in cartGetter.data.data" v-bind:key="cart.cartId">
        <!-- <div v-for="cart in cartGetter.data" v-bind:key="cart.cartId"> -->
        <CartComponent :cart="cart" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartComponent from "./cartComponent";
import ProfilePic from "../image/user.svg";
import Plus from "../image/plus.svg";
import Minus from "../image/minus.svg";
export default {
  name: "cart",
  props: {},
  data: () => {
    return {
      profilePic: ProfilePic,
      plus: Plus,
      minus: Minus,
      numeric: 0
    };
  },
  computed: {
    ...mapGetters(["cartGetter"])
  },
  methods:{
    checkout(){
      if(localStorage.getItem('jwtToken') == null)
      {
        alert('please Login to checkout')
        this.$router.push({path: '/login'})
      }
      window.console.log("in checkout ");
        this.$store.dispatch("CheckoutAction");
    }
  },
  mounted() {
    if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
    this.$store.dispatch("CartPageAction");
  },
  components: {
    CartComponent
    // NumberInputSpinner
    // Numberinput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtotal {
  /* float:right; */
  width: 30%;
  max-width: 100%;
  /* width: auto; */
  border: 1px solid black;
  /* width: relative; */
}
.al-rg {
  text-align: right;
}
/* .al-lf {
  /* text-align: left; */
/* }  */
.pos {
  height: 85%;
}
.b {
  margin: 1px;
  /* border:1px solid black;  */
}
.label-prod {
  margin-bottom: 15px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.txt-number {
  height: 30px;
  -webkit-appearance: none;
  outline: none;
  margin: 0;
  text-align: center;
  /* width: auto; */
}
.txt-number:focus {
  /* border: 1px solid black; */
  -webkit-appearance: none;
}
.btn-number {
  /* margin-top: 10px; */
  background: #2196f3;
  height: 30px;
  font-size: 85%;
  transition: background 0.5s ease;
  border: 0;
  /* border: 1px solid black; */
}
.btn-number:hover {
  background-color: #166ea8;
}
.padd {
  padding-top: 10px;
}
.detail {
  padding-left: 4%;
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
  font-size: 14px;
  white-space: nowrap;
  width: 60%;
  border-radius: 0%;
  padding: 0.8em 1.5em;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  line-height: 7px;
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
.mar {
  margin: 10px 0px;
}
.Numberinput {
  /* width: 20px; */
  background: black;
}
.NumberButton {
  background-color: black;
  background: black;
  color: black;
}
.qunt-div {
  /* padding-top: 20%; */
  padding-left: 10%;
  /* font-size: 100%; */
  font-weight: bold;
}
.cart {
  width: 97%;
  /* height: 270px; */
  margin-left: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-top: 10px;
  margin-bottom: 15px;
}
.cart:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.cart-image {
  max-height: 150px;
  /* width: auto; */
}
.flex-container {
  display: flex;
}
.flex-row {
  display: flex;
  flex-flow: row;
  /* flex-direction: row; */
}
.flex-column {
  display: flex;
  flex-flow: column;
  /* flex-direction: column; */
}
.flex-1 {
  flex: 1 0 auto;
}
.flex-2 {
  flex: 2 0 auto;
}
.flex-3 {
  flex: 3 0 auto;
}
.gflex-1 {
  flex-grow: 1;
}
.gflex-2 {
  flex-grow: 2;
}
.gflex-3 {
  flex-grow: 3;
}
.bd {
  /* border-bottom: 0.5px solid grey;
  border-right: 0.5px outset grey; */
  /* .card { */
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 5px;
}
.bd:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* border-style: groove; */

.label-rating {
  float: left;
  margin-left: 5px;
}
</style>
