<template>
<div class="al-cn">
        <div v-for="value in merchantOrdersGetter" v-bind:key="value.orderId">
            <div class="flex-containerRow">
             <div class="image">   <img :src="value.productImage" height:50px width:50px> </div>
                <div class="details">
                    <div class="row">
                        <div class="flex1">Order Id : </div>
                        <div class="flex2">{{value.orderId}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">User Id : </div>
                        <div class="flex2">{{value.userId}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Product Id : </div>
                        <div class="flex2">{{value.productId}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Product Name : </div>
                        <div class="flex2">{{value.productName}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Quantity : </div>
                        <div class="flex2">{{value.quantity}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Date : </div>
                        <div class="flex2">{{value.orderDate}}</div>
                    </div>
                    <div class="row">
                        <div class="flex1">Total Price : </div>
                        <div class="flex2">{{value.totalPrice}}</div>
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
    flex-grow:4;
    margin-top: 20px;
    margin-left:20px;
}
.al-cn{
    text-align: -webkit-center;
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
    /* justify-content: space-evenly; */
    /* font-size: 25px; */
    /* border: 1px solid grey; */
    /* padding: 16px; */
    margin-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height:300px;
    /* height:300px; */
}
.flex-containerRow > div{
    display:flex;
}
.image{
    display:flex;
    flex-grow:1;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
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
    /* justify-content:space-between; */
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