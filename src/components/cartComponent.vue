<template>
    <div
      class="flex-container flex-column cart b"
    >
        <div class="gflex-1 b flex-row">
          <div class="gflex-1 b al-cn">
            <img :src="cart.productImage" class="cart-image" alt />
          </div>
          <div class="gflex-2 b">
              
            <div class="flex-row b wrap ">                
              <div class="gflex-3 flex-column al-lf b desc">
                  {{cart.productName}}  ({{cart.productDesc}})
              </div>
              <div class="gflex-1 flex-column al-lf b">
                  <label class=""><small>sold by </small>{{cart.merchantName}}</label>
              </div>
              <!-- <div class="gflex-1 flex-column al-cn b "></div> -->
              <div class="gflex-1 flex-column al-cn b ">
                  <div class="flex-container" style="justify-content: flex-end;">
                  <div class=" subtotal wrap">
                  <label for="">Sub Total</label>
                  <hr>
                    {{cart.totalPrice}}
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gflex-1 flex-row">
          <div class="gflex-1 mar padd b">
            <label for="Quantity" class="qunt-div">Quantity</label>
          </div>
          <div class="gflex-1 mar b"> 
            <div>
              <input type="number" v-model="cart.quantity">
            </div>
          </div>
          <div class="gflex-1 mar b">
            <div>
              <a class="btn btn-dark-blue" @click="updateQuantity">Update Quantity</a>
            </div>
          </div>
          <div class="gflex-1 mar b">
            <div>
              <a class="btn btn-dark-blue" @click="deleteCart">Remove From Cart</a>
            </div>
          </div>
      </div>
    </div>
</template>


<script >
export default {
    name: 'cartComponent',
    data: () => {
        return {
            // cart: cartObject
        }
    },
    props: {
        cart: {
        }
    },
    methods : {
      updateQuantity(){
        if(localStorage.getItem('jwtToken')){
        let CartObj = {
            'token':localStorage.getItem('jwtToken'),
            'productId':this.cart.productId,
            'merchantId':this.cart.merchantId,
            'quantity':this.cart.quantity
        }
        window.console.log(CartObj);
                this.$store.dispatch('UpdateQuantity',CartObj);
                this.$store.dispatch("CartPageAction");
        }
        else
        {
          let CartObj = {
            'token':localStorage.getItem('guestToken'),
            'productId':this.cart.productId,
            'merchantId':this.cart.merchantId,
            'quantity':this.cart.quantity
        }
        window.console.log(CartObj);
                this.$store.dispatch('UpdateQuantity',CartObj);
                this.$store.dispatch("CartPageAction");
        }
      },
      deleteCart() {
        if(localStorage.getItem('jwtToken'))
        {
        let CartObj = {
            'token':localStorage.getItem('jwtToken'),
            'productId':this.cart.productId,
            'merchantId':this.cart.merchantId,
            'quantity':this.cart.quantity
        }
        window.console.log(CartObj);
        this.$store.dispatch('removeCart',CartObj);
        }
        else{
          let CartObj = {
            'token':localStorage.getItem('guestToken'),
            'productId':this.cart.productId,
            'merchantId':this.cart.merchantId,
            'quantity':this.cart.quantity
        }
        window.console.log(CartObj);
        this.$store.dispatch('removeCart',CartObj);
        }
      }
    }
}
</script>
<style scoped>
.drop {
  width: 150px;
}
.desc {
  word-break: break-word;
  width: 30vh;
}
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
/* .al-lf { */
    /* text-align: left; */
/* } */
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
input[type="number"]{
  height: 30px;
  font-size: 14px;
}
input[type=number]::-webkit-inner-spin-button {  
    width: 20px;
    height: 120px;
}

/* input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
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
  flex-wrap: wrap;
}
.flex-row {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  /* flex-direction: row; */
}
.flex-column {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
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