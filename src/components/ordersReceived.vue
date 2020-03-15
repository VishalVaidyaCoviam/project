<template>
<div class="al-cn">
        <div v-for="value in merchantOrdersGetter" v-bind:key="value.orderId">
            <div class="flex-containerRow">
             <div class="image">   <img :src="value.productImage" height:50px width:50px> </div>
                <div class="row gflex-4">
                    <div class="gflex-1 details">
                        <div class="flex1">Order Id :</div>
                        <div class="flex1">Product Id : </div>
                        <div class="flex1">Product Name : </div>
                        <div class="flex1">Quantity : </div>
                        <div class="flex1">Date : </div>
                        <div class="flex1">Total Price : </div>
                    </div> 
                    <div class="gflex-1 details">
                        <div class="flex1">{{value.orderId}}</div>
                        <div class="flex1">{{value.productId}}</div>
                        <div class="flex1">{{value.productName}}</div>
                        <div class="flex1">{{value.quantity}}</div>
                        <div class="flex1">{{value.orderDate}}</div>
                        <div class="flex1">{{value.totalPrice}}</div>
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
            value:''
        }
    },
    mounted() {
        if(!localStorage.getItem('userAccessToken'))
      this.$router.push({path:'/popular'})
       this.$store.dispatch('getOrdersReceived');    
    },
    computed: {
        ...mapGetters (['merchantOrdersGetter'])
    }
}
</script>

<style scoped>
.details{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    height:300px;
    /* flex-grow:4; */
    margin-top: 20px;
    margin-left:20px;
}
.gflex-1 {
    flex-grow : 1;
}
.gflex-4 {
    flex-grow : 4;
    margin-bottom: 10px;
}
.al-cn{
    text-align: -webkit-center;
    display:flex;
    flex-direction:column;
    margin-left:20px;
    margin-right:20px;
}
.flex-containerRow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    margin-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height:300px;
    margin-bottom: 20px;
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
img{
    width:100%;
    height:100%;
    margin-top:10px;
    margin-bottom:10px;
    object-fit:contain;
}
.flex1{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>