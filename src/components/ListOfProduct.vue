<template>
    <div class="main">
        <!-- {{merchantProductsGetter.data}} -->
        <!-- <div>gghcdghc</div> -->
        <div class="container">
            <div v-for="value in merchantProductsGetter" v-bind:key="value.productId.data">
                <div class="card">
                    <div class="image"><img :src="value.productImage" alt="value.productName" style="width:100%"></div>
                    <div class="values"><h1>{{value.productName}}</h1></div>
                    <div class="values"><p>Id:{{value.productId}}</p></div>
                    <div class="values"><p>Quantity : {{value.quantity}}</p></div>
                    <div class="values"><p>Price : Rs.{{value.price}}</p></div>
                    <div class="values"><button type="button" @click="editProducts(value.productId)">Edit</button></div>
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
        if(localStorage.getItem('userAccessToken') == null )
            this.$router.push({path : '/login'})
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
    .main{
        text-align: -webkit-center;
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-around;
        align-content: center;
        padding: 16px;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        /* max-height: 400px; */
        margin: auto;
        text-align: center;
        font-family: arial;
        margin-top: 20px;
        margin-right: 20px;
        margin-left:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .card>div{
        display:flex;
    }
    .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    .card button:hover {
        opacity: 0.7;
    }
    .image{
        display:flex;
        flex-grow:10;
        justify-content:center;
    }
    .values{
        display:flex;
        flex-grow:1;
        justify-content:center;
    }
    img{
        height:200px;
        width:200px;
        object-fit:contain;
        display:flex;
    }
</style>