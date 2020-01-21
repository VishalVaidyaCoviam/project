<template>
  <div class="flex-container">
    <!-- <div style="flex-basis: 10% align-content: flex-start"><img src="#" alt="abc not" onclick=""></div> -->
    <div class="flex-1 al-cn">
      <img src="#" />
    </div>
    <div class="flex-3 al-cn">
      <input type="text" v-model="search" name="Search" placeholder="Search.." />
      <button name="Submit" @click="callSearch()" value="Search">SUbmit</button>
    </div>
    <div class="flex-1 al-cn">
      <img :src="cart_image" class="head_cart" />
    </div>
    <div class="flex-1 al-cn">
      <div class="dropdown">
          <img :src="profilePic" class="dropbtn" />
        <!-- <button class="dropbtn">Dropdown</button> -->
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Alcohol from "../image/beer-mug.svg";
import ProfilePic from "../image/user.svg";
export default {
  data: function() {
    return {
      cart_image: Alcohol,
      profilePic : ProfilePic
    };
  }
};
</script>
<style scoped>
.dropbtn {
  /* background-color: #2196f3; */
  color: white;
  /* padding: 16px; */
  font-size: 16px;
  /* width: 100%; */
  height:50px; 
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

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
  height: 37px;
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
