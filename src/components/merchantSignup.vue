<template>
    <div>
        <div class="container">
          <div class="values">Name : <input type="text" v-model="name" placeholder="Seller"></div><br>
          <div>Mobile No : <input type="number" v-model="mobile" placeholder="Phone"></div><br>
          <div>Password : <input type="password" v-model="password" placeholder="xxxxx"></div><br>
          <div>E-mail : <input type="text" v-model="email" placeholder="Email"></div><br>
          <div>Address : <input type="text" v-model="address" placeholder="address"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            name: '',
            mobile: '',
            password: '',
            email: '',
            address:'',
            rating:''
        }
    }
}
</script>