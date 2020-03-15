<template>
<div class="merchant">
    <div class="card">
    <div class="container">
        <router-link to="/addProducts" tag="h1">Add Product</router-link>
        <p>Click to add products</p> 
    </div>
    </div>
    <div class="card">
    <div class="container">
        <router-link to="/listOfProduct" tag="h1">My Stock</router-link>
        <p>Click to view stock</p> 
    </div>
    </div>
    <div class="card">
    <div class="container">
        <router-link to="/ordersReceived" tag="h1">Orders Received</router-link>
        <p>View received orders</p> 
    </div>
    </div>
</div>
</template>
<script>
export default {
    mounted(){
        if(localStorage.getItem('userAccessToken') == null )
            this.$router.push({path : '/login'})
    }
}
</script>
<style scoped>

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.5s;
    width: 40%;
    margin-left: 20px;
    margin-right: 20px;
    background-color: whitesmoke;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}
.merchant{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
}

</style>