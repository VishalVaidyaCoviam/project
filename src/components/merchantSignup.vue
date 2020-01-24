<template>
    <div class="al-cn">
        <div class="container" >
          <div class="values"><img :src="profilePic" alt="" class="image" ></div>
          <div class="values">Name :</div>
          <div><input type="text" v-model="name" placeholder="Seller"></div>
          <div>Mobile No :</div>
          <div><input type="number" v-model="mobile" placeholder="Phone"></div>
          <div>Password : </div>
          <div><input type="password" v-model="password" placeholder="xxxxx"></div>
          <div>E-mail : </div>
          <div><input type="text" v-model="email" placeholder="Email"></div>
          <div>Address : </div>
          <div><input type="text" v-model="address" placeholder="address"></div>
          <div><button type="button" @click="signup()">SignUp</button></div>
          </div>
    </div>
</template>
<script>
import user from "../assets/user.svg";
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
            rating:'0',
            profilePic: user
        }
    },
    methods: {
        signup(){
            var details = {
                'merchantName':this.name , 
                'mobileNo':this.mobile , 
                'merchantRating':this.rating , 
                'merchantEmail':this.email , 
                'merchantAddress':this.address , 
                'merchantPassword':this.password
                 }
            window.console.log('At signup',details)
            this.$store.dispatch('merchantSignup',details)
            this.$router.push({name: 'login'})
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
        border: 2px solid grey;
        border-radius: 20px;
        width: 50%;
        text-align: center;
        margin-top: 10px; 
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color:whitesmoke;
    }
.container > div{
        text-align: center;
        line-height: 15px;
        font-size: 10px;
}
input[type=text] {
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type=text]:focus, input[type=password]:focus ,input[type=number]:focus {
  background-color: #ddd;
  outline: none;
}
input[type=number], input[type=password] {
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type=number]:focus, input[type=password]:focus {
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
  opacity: 0.8;
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
  .signupbtn {
     width: 100%;
  }
}
/* h1 {
    font-weight: bold;
    font-style: italic;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 5px;
    font-size: 30px;
} */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.image{
    height: 100px;
    width: 100px;
    margin-right: 20px;
    justify-content: space-around;
    cursor: pointer;
}

</style>