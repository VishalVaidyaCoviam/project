<template>
    <div class="container">
        {{getAllProducts.data}}
        <!-- <div>Select Product <dropdown :options='getAllProducts.data.productName' :selected='getAllProducts.data.productId' v-on:updateOption="methodToRunOnSelect"></dropdown></div> -->
        <div>Select Product<select v-model="selected">
            <option v-for="value in getAllProducts.data" v-bind:key="value.productId" v-bind:value="value.productId"> {{getAllProducts.data.productName}}</option>
        </select></div>
        <div><br></div>
        <div><input type="text" v-model="quantity" placeholder="Quantity"></div>
        <div><br></div>
        <div><input type="text" v-model="price" placeholder="Price"></div>
        <div><br></div>
        <div><button type="submit" @click="sendProducts()">Submit</button></div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
//import dropdown from 'vue-dropdowns'
    export default {
        data() {
              return {
                selected:'',
                quantity:'',
                price:''
            }
            
            },

        mounted() {
                this.$store.dispatch('getListOfProducts');    
            },
        computed: {
                ...mapGetters (['getAllProducts']),
                },
        // components: {
        //         'dropdown':dropdown
         //   },
        methods:{ 
    
                sendProducts(){
                    var newProduct={'productId' :this.selected, 'quantity': this.quantity , 'price':this.price }
                    var obj= JSON.stringify(newProduct)
                    this.$store.dispatch('addProducts',obj)
                }
            }
        }
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: bisque;
    justify-content: space-between;
}
.container > div {
  text-align: center;
  float:unset;
} 
input[type=text]{
    padding: 10px;
    font-size:20px;
    float:none;
    width: 70%;
    background: rgb(243, 224, 224);
}
</style>