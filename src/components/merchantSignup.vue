<template>
    <div class="al-cn">
        <h1>Sign Up</h1>
        <p>Please Fill in This Form To Signup</p>
        <div class="container" >
          <div class="values">Name :</div>
          <div><input type="text" v-model="name" placeholder="Seller"></div>
          <div>Mobile No :</div>
          <div><input type="text" v-model="mobile" placeholder="Phone"></div>
          <div>Password : </div>
          <div><input type="password" v-model="password" placeholder="xxxxx"></div>
          <div>E-mail : </div>
          <div><input type="text" v-model="email" placeholder="Email"></div>
          <div>Address : </div>
          <div><input type="text" v-model="address" placeholder="address"></div>
          <div><button type="button" @click="signup()">SignUp</button></div>
          <div><button type="button" @click="this.$store.dispatch('GoogleLogin')">Google SignUp</button></div>
        </div>
    </div>
</template>
<script>
// import ImageUploader from 'vue-image-upload-resize'
// Vue.use(ImageUploader);
// import Vue from 'Vuex'
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
    },
    methods: {
        signup(){
            var details = {'merchantName':this.name , 'mobileNo':this.mobileNo , 'merchantRating':'0' , 'merchantEmail':this.email , 'merchantAddress':this.address , 'merchantPassword':this.password }
            var obj= JSON.stringify(details)
            this.$store.dispatch('merchantSignup',obj)
        }
    }
}
</script>
<style scoped>
.al-cn {
    text-align: -webkit-center;
}
.container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        padding: 16px;
        border: 1px solid grey;
        width: 50%;
        text-align: center;
}
.container > div{
        text-align: center;
        line-height: 50px;
        font-size: 20px;
}
input[type=text], input[type=password] {
  width: 80%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
button {
  background-color: rgb(92, 156, 94);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
  opacity: 0.9;
}
button:hover {
  opacity:1;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
h1 {
    font-weight: bold;
    font-style: italic;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 5px;
    font-size: 50px;
}
p{
    font-style: italic;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

</style>