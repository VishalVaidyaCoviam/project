<template>
    <div>
        <div class="containerRow">
            <div><b><i>Product Id</i></b></div>
            <div><b><i>Product Name</i></b></div>
            <div><b><i>Quantity</i></b></div>
            <div><b><i>Price</i></b></div>                
            <div><b><i>Button</i></b></div>
        </div>
        <!-- {{merchantProductsGetter.data}} -->
        <div class="containerColumn">
            <div v-for="value in merchantProductsGetter.data" v-bind:key="value.productId.data">
                <div class="containerRow">
                    <div>{{value.productId}}</div>
                    <div>{{value.productName}}</div>
                    <div>{{value.quantity}}</div>
                    <div>{{value.price}}</div>
                    <div><button type="button" @click="editProducts(value.productId)">Edit</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data:() =>{
        return {
            info: null
        }
    },
    mounted() {
        this.$store.dispatch('getMerchantListOfProducts');    
    },
    computed: {
        ...mapGetters (['merchantProductsGetter'])
    },
    methods: {
        editProducts(productId){
            this.$router.push({name: 'editProducts', params: { id:productId }})
        }
    }
};
</script>
<style scoped>
    .containerColumn{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center
    }
    .containerRow{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }
</style>