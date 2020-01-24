<template>
<div class="al-cn">
    <br><div class="header">Add Stock</div>
    <div class="container">
        <div><br>
        <table>
            <br>
            <tr>
                <td>Category</td>
                <td><select v-model="selectedcategory">
                    <option v-for="valueCategory in getAllCategories.data" v-bind:key="valueCategory.categoryId" v-bind:value="valueCategory.categoryId" @select="findProducts()"> {{valueCategory.categoryName}}</option>
                    </select>
                </td>
            </tr><br>
            <tr>
                <td>Product</td>
                <td><select v-model="selectedproduct">
                    <option v-for="valueProduct in getAllProducts.data" v-bind:key="valueProduct.productId" v-bind:value="valueProduct.productId" > {{valueProduct.productName}}</option>
                    </select>
                </td>
            </tr>
        </table>
        </div>
        <div><br></div>
        <div><input type="number" v-model="quantity" placeholder="Quantity"></div>
        <div><br></div>
        <div><input type="number" v-model="price" placeholder="Price"></div>
        <div><br></div>
        <div><button type="submit" @click="sendProducts()">Submit</button></div><br>
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default {
        data() {
              return {
                selectedcategory:'',
                selectedproduct:'',
                quantity:'',
                price:''
            }
            
            },

        mounted() {
                // this.$store.dispatch('getListOfProducts');   
                this.$store.dispatch('getListOfCategories');
            },
        computed: {
                ...mapGetters (['getAllProducts']),
                ...mapGetters (['getuserAccessToken']),
                ...mapGetters (['getAllCategories'])
                },
        methods:{ 
                findProducts(){
                    this.$store.dispatch('getListOfProducts',this.selectedcategory);
                },
    
                sendProducts(){
                    var newProduct={'token':this.getuserAccessToken,'productId' :this.selected, 'quantity': this.quantity , 'price':this.price }
                    this.$store.dispatch('addProducts',newProduct)
                    this.$router.push({name: 'listOfProduct'})
                }
            }
        }
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: white;
        justify-content: center;
        width: 60%;
        border: 2px solid grey;
        border-radius: 20px;
        margin-top: 30px;
        
    }
    .al-cn{
        text-align: -webkit-center;
    }
    .container > div {
        text-align: center;
        float:unset;
        font-size:20px;
        margin-left: 50px;
    } 
    input[type=number]{
        padding: 10px;
        font-size:20px;
        float:none;
        width: 70%;
        background-color: rgb(214, 214, 214);
    }
    select{
        width: 520px;
        height: 40px; 
        background-color: rgb(214, 214, 214);

    }
    after {
        content: "";
        clear: both;
        display: table;
    }
    button {
        padding: 10px;
        background: dodgerblue;
        color: white;
        font-size:20px;
        border: 1px solid grey;
        cursor: pointer;
        border-radius: 5px;
        opacity: 0.8;
    }
    button:hover {
        opacity:1;
    }
    .header{
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-size: 40px;
    }
</style>