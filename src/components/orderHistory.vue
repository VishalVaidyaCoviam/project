<template>
<div class="al-cn">
        <div v-for="value in userOrderHistoryGetter" v-bind:key="value.orderId">
            <div class="flex-containerRow">
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
                        <div class="flex2"><star-rating value="value.productRating"></star-rating></div>
                    </div>
                    <div class="row">
                        <div class="flex1">Merchant Rating :  </div>
                        <div class="flex2"><star-rating value="value.MerchantRating"></star-rating></div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>
<script>

import {mapGetters} from 'vuex'
export default {


    data(){
        return{
            value:'',
        }
    },
    mounted() {
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
    flex-direction:column;
    flex-wrap:wrap;
    height:300px;
    flex-grow:4;
    margin-top: 10px;
    margin-left:10px;
}
.al-cn{
    display:flex;
    flex-direction:row;
    margin-left:20px;
    margin-right:20px;
}
.flex-containerRow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    margin-top:5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height:300px;
}
.flex-containerRow > div{
    display:flex;
}
.image{
    display:flex;
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

%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

.star-rating {

  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;

    &:hover {
      cursor: pointer;
    }
    
    &.is-selected {
      color: #FFD700;
    }
  }
    &__checkbox {
    @extend %visually-hidden;
  }
}


    
</style>