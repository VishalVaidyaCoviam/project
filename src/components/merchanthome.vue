<template>
<div class="merchant">
    <h1 > Merchant </h1>
    <body>
    <div class="outside">
        <div class="links"> <router-link to="/addProducts"> Add Product</router-link> </div>
        <div class="links"> <router-link to="/listOfProduct"> List of Product</router-link> </div>
        <div class="links"> <router-link to="/ordersReceived"> Orders Received</router-link> </div>
        <div class="links"> <router-link to="/merchantProfile">My Profile</router-link> </div>
        <div class="links"> <router-link to="/merchantSignup">SignUp</router-link></div>
        <router-view/>
    </div>
    </body>
</div>
</template>

<style>
h1{
    background-color: rgb(166, 212, 233);
    align-self: center;
    font-style: italic;
    font-size: 50px;
}
.outside{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-style: double;
    border-radius: 10px;
    align-items: center;
    background-color: rosybrown;
    height: 150px;

}

.links{
    background-color: rgb(166, 212, 233);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-shadow: 3px 2px red;
    font-style: italic;
    text-align: center;
    height: 50px;
}


</style>