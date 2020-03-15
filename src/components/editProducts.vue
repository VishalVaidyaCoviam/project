<template>
<div class="al-cn">
    <div class="container">
        <h1 class="id"> Product Id : {{this.$route.params.id }} </h1><br>
        <div><input type="number" v-model="quantity" placeholder="Enter new Quantity"></div><br>
        <div><input type="number" v-model="price" placeholder="Enter new Price"></div><br>
        <div><button type="button" @click="editProducts()">Submit</button></div>
    </div>
</div>
</template>
<script scoped>
import {mapGetters} from 'vuex'
export default {
        data() {
            return {
                object: this.$route.params.id,
                quantity:'',
                price:''
            }
        },
        methods:{
            editProducts(){
            var data = {
                'token': this.getuserAccessToken,
                'productId' : this.$route.params.id,
                'quantity': this.quantity,
                'price' : this.price
            }
            this.$store.dispatch('merchantEdit', data);
            this.$router.push({name: 'listOfProduct'})            
        }
    },
            computed: {
                ...mapGetters (['getuserAccessToken'])
                },
                mounted(){
        if(localStorage.getItem('userAccessToken') == null )
            this.$router.push({path : '/login'})
    }
}
</script>
<style scoped>
    .al-cn{
        text-align: -webkit-center;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        width: 60%;
        border: 2px solid black;
    }
    input[type=number]{
        padding: 10px;
        margin-top: 10px;
        font-size:20px;
        float:none;
        width: 70%;
        border: 2px solid grey;
        border-radius: 5px;
        background-color: gainsboro;
    }
    button {
        padding: 10px;
        background: dodgerblue;
        color: white;
        font-size: 10px;
        border: 1px solid grey;
        cursor: pointer;
        border-radius: 5px;
        opacity: 0.8;
    }
    button:hover {
        opacity:1;
    }
    /* .id{
        font-size: 30px;
    } */

</style>