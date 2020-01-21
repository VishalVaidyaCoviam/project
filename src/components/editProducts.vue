<template>
    <div class="container">
        <div> Product Id : {{this.$route.params.id }} </div><br>
        <div><input type="text" v-model="quantity" placeholder="Enter new Quantity"></div><br>
        <div><input type="text" v-model="price" placeholder="Enter new Price"></div><br>
        <div><button type="button" @click="editProducts()">Submit</button></div>
    </div>
</template>
<script>
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
                var object = {
                    'productId' : this.$route.params.id,
                    'quantity': this.quantity,
                    'price' : this.price
            }
            var json = JSON.stringify(object);
            this.$store.dispatch('merchantEdit',json);
        }
    },
    created () {
        window.console.log('This is route param', this.$route.params.id)
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
    }
    input[type=text]{
        padding: 10px;
        font-size:20px;
        float:none;
        width: 70%;
        background: rgb(243, 224, 224);
    }
</style>