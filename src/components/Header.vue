<template>
  <div class="flex-container">
    <!-- <div style="flex-basis: 10% align-content: flex-start"><img src="#" alt="abc not" onclick=""></div> -->
    <div class="flex-1 al-cn">
      <!-- <img src="#" /> -->
      <!-- {{jwttokenGetter}} -->
      <label for="" class="Name" @click="popular">BarleyKart</label>
    </div>
    <div class="flex-3 al-cn">
      <input type="text" v-model="search" name="Search" placeholder="Search.." />
      <button name="button" @click="callSearch()" value="Search">SEARCH</button>
    </div>
    <div class="flex-1 al-cn">
      <img :src="cart_image" class="head_cart" @click="cart()"/>
    </div>
    <div class="flex-1">
      <div class="dropdown">
        <img :src="profilePic" class="dropbtn" />
        <!-- <button class="dropbtn">Dropdown</button> -->
        <div class="dropdown-content">
          <div v-if="jwttokenGetter === ''">
          <a @click="login">Login</a>
          <a @click="signup">Signup</a>
          </div>
          <div v-else>
            <a >Profile</a>
            <a >Login History</a>
            <a >Order History</a>
          <a >Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Alcohol from "../image/beer-mug.svg";
import ProfilePic from "../image/user.svg";
import { mapGetters } from 'vuex';
export default {
  data: function() {
    return {
      search: "",
      cart_image: Alcohol,
      profilePic: ProfilePic
    };
  },
  methods: {
    cart(){
      this.$router.push({path:'/cart'})
    },
    popular(){
      this.$router.push({path : '/popular'})
    },
    callSearch() {
      window.console.log(this.search);
      this.$store.dispatch("setSearchStringAction", this.search);
      this.$route.name != 'Search' ? this.$router.push({ path: `/search` }) : '';
    },
    login() {
      this.$route.name != 'login' ? this.$router.push({ path: `/login` }) : '';
    },
    signup() {
      this.$route.name != 'CustomerSignup' ? this.$router.push({ path: `/SignUp` }) : '';
    }
  },
  computed :{
    ...mapGetters(['jwttokenGetter'])
  }
};
</script>
<style scoped>
.Name {
  font-size: 40px;
  /* font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; */
  font-family:  fantasy;	
  margin-bottom: 15px;
  /* font-weight: 600; */
}
.dropbtn {
  /* background-color: #2196f3; */
  color: white;
  /* padding: 16px; */
  font-size: 16px;
  /* width: 100%; */
  height: 50px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  /* margin-right: 200px;  */

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .dropdown:hover .dropbtn { */
/* background-color: #2196f3; */
/* } */
.head_cart {
  height: 50px;
}
.al-cn {
  align-content: center;
}
.flex-container {
  display: flex;
  border-bottom: 1px solid grey;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* background-color: rgb(221, 181, 158); */
  /* background-color: #dcdcdc; */
  /* justify-content: space-between; */
  height: 70px;
  /* align-content: center; */
  /* align-items: stretch; */
}
.flex-1 {
  flex: 1 0 auto;
  /* align-content: center; */
}
.flex-3 {
  flex: 3 0 auto;
  /* align-content: center; */
}
.flex-container > div {
  /* border: 1px solid black; */
  /* margin-bottom: 5px;
  margin-top: 5px; */
  padding-top: 10px;
}
input[type="text"] {
  /* margin-top: 10px; */
  /* padding: 5px; */
  /* align-items: center; */
  font-size: 17px;
  /* float: left; */
  width: 70%;
  background: #f1f1f1;
  height: 35px;
  border: 1px solid grey;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
button {
  width: 15%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 15px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
button:hover {
  background: #0b7dda;
}
</style>
