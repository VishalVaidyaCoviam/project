<template>
<div class="flex-container flex-column al-cn">
    <h1 style="text-align:left;">Order History</h1>
        <div class="pflex-1 flex-container flex-column mar" v-for="value in userOrderHistoryGetter.data.data" v-bind:key="value.orderId">
            <div class="pflex-1 flex-containerRow">
             <div class="image"><img :src="value.productImage"> </div>
                <div class="details">
                    <div class="row">
                        <div class="flex1">Order Id : </div>
                        <div class="flex2">{{value.orderId}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Name :            </div>
                        <div class="flex2">{{value.productName}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1"> Quantity :       </div>
                        <div class="flex2">{{value.quantity}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Total Price : Rs. </div>
                        <div class="flex2">{{value.totalPrice}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Order Date :      </div>
                        <div class="flex2">{{value.orderDate}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Product Rating :  </div>
                        <div class="flex2">{{value.productRating}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Merchant Name :  </div>
                        <div class="flex2">{{value.merchantName}}</div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
    name:"OrderHistory",

    data(){
        return{
            value:'',
        }
    },
    mounted() {
        if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
        if(localStorage.getItem('jwtToken') == null)
            this.$router.push({path:'/login'})
       this.$store.dispatch('getUserOrderHistory');    
    },
    computed: {
        ...mapGetters (['userOrderHistoryGetter'])
    },
    methods:{
        rateProduct(productId){
            this.$router.push({name: 'rateProduct' , params: { id:productId }})
        },
        rateMerchant(merchantId){
            this.$router.push({name: 'rateMerchant' , params: { id:merchantId }})
        },
    }
}
</script>
<style scoped>
    .details{
    display:flex;
    /* border:1px solid black; */
    flex-direction:column;
    flex-wrap:wrap;
    height:300px;
    flex-grow:4;
    margin-top: 10px;
    margin-left:10px;
    /* margin-bottom: 20px; */
}
.fflex-1 {
    flex: 1 0 auto;
    /* border:1px solid black; */
}
.pflex-1 {
    flex-grow: 1;
    /* border:1px solid black; */
}
.mar {
    margin-bottom: 20px;
}
.al-cn{
    /* display:flex;
    flex-direction:row; */
    margin-left:10px;
    width: 99%;
    /* margin-bottom:20px; */
    /* margin-right:20px;  */
}
.flex-column {
    flex-direction: column;
    /* border:1px solid black; */
}
.flex-container {
    display: flex;
    /* border:1px solid black; */
}
.flex-containerRow{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    background-color: white;
    /* border:1px solid black; */
    margin-top:5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height:300px;
}
.flex-containerRow > div{
    display:flex;
    /* border:1px solid black; */
}
.image{
    display:flex;
    /* border:1px solid black; */
    flex-grow:1;
    margin-right:30px;
    justify-content:center;
    height:70%;
    width:30%;
    float:left;
    margin-top:30px;
}
.row{
    height:30px;
    /* border:1px solid black; */
    display:flex;
    flex-direction:row;
    font-size: 20px;
    margin-top:5px;
}
.flex1{
    flex-grow:1;
}
.flex2{
    flex-grow:4;
}
img{
    width:100%;
    height:100%;
    margin-top:10px;
    margin-bottom:10px;
    object-fit:contain;
}

    
</style>