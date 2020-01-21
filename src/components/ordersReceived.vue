<template>
    <div class="flex-containerColumn">
        <div class="flex-containerRow">
                <div><b><u>OrderId</u></b></div>
                <div><b><u>UserId</u></b></div>
                <div><b><u>ProductId</u></b></div>
                <div><b><u>Quantity</u></b></div>
                <div><b><u>OrderDate</u></b></div>
                <div><b><u>TotalPrice</u></b></div>
        </div>
        <div v-for="value in merchantOrdersGetter.data" v-bind:key="value.orderId">
            <div class="flex-containerRow">
                <div>{{value.orderId}}</div>
                <div>{{value.userId}}</div>
                <div>{{value.productId}}</div>
                <div>{{value.quantity}}</div>
                <div>{{value.orderDate}}</div>
                <div>{{value.totalPrice}}</div>
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

<style>
.flex-containercolumn{
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: gray;
    justify-content: center;
    align-items: stretch;
}
.flex-containerRow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: whitesmoke;
    justify-content: space-evenly;
    font-size: 17px;
}
</style>