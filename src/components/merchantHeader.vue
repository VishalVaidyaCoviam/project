<template>
  <div class="flex-container">
    <div>
      <img :src="beer" alt="" style="height:50px;margin-left:40px;">
      <label for="" class="Name" @click="goHome()">BarleyKart</label>
    </div>
    <div class="right">
      <div class="dropdown">
        <img :src="profilePic" class="dropbtn" />
        <div class="dropdown-content">
            <button @click="goProfile">Profile</button>
            <a @click="logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Beer from "../image/beer.svg";
import ProfilePic from "../assets/user.svg";
import { mapGetters } from 'vuex';
export default {
  data: function() {
    return {
      profilePic: ProfilePic,
      beer: Beer
    };
  },
  methods: {
    logout(){
      localStorage.removeItem('userAccessToken')
      this.$store.state.userAccessToken = '';
      this.$router.push({ path: `/login` });
    },
    login() {
      this.$router.push({ path: `/login` });
    },
    goHome(){
        this.$router.push({name: 'merchanthome'})
    },
    goProfile(){
        this.$router.push({name: 'merchantProfile'})
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
  font-family:  fantasy;
  margin-bottom: 15px;
  
}
.name:hover {
  cursor: pointer;
}
.dropbtn {
  color: white;
  font-size: 16px;
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
  background-color: #F9F9F9;
  min-width: 160px;
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
  background-color: #F1F1F1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.flex-container {
  display: flex;
  border-bottom: 1px solid grey;
  flex-direction: row;
  flex-wrap: wrap;
  height: 70px;
  justify-content: space-between;
}
.right {
  /* flex: 1 0 auto; */
  align-content: right;
  margin-right:100px;
}

.flex-container > div {
  padding-top: 10px;
}

button {
  padding: 10px;
  color: white;
  border: 1px solid grey;
  border:none;
  cursor: pointer;
  color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  height: 45px;
  background-color: #F9F9F9;
  font-size: 15px;
} 
button:hover {
  background-color: #F1F1F1;
  display: block;
}
</style>