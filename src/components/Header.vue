<template>
  <div class="flex-container">
      <div style="flex-basis: 10% align-content: flex-start"><img src="#" alt="abc not" onclick=""></div>
      <div class="row"><input type="text" v-model="search" size="100%" name="Search" placeholder="Search..">
      <button name="Submit" @click=callSearch() value="Search">SUbmit</button></div>
      <div style="margin-right: 40px"><img src="#"></div>
      <div><button type="button" @click=alert()><img src="" alt=""></button></div>
  </div>
</template>

<script>
export default{
    // data : () => {
    //     return  { search } 
    // }
}
</script>

<style>
.flex-container{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    background-color: rgb(221, 181, 158);
    justify-content: space-between;
    height: 70px;
    /* align-items: stretch; */
}
.flex-container > div {
    margin-bottom: 5px;
    margin-top: 5px;
}
input[type=text]{
    margin-top: 10px;
    padding: 5px;
    font-size:17px;
    float:left;
    width: 100;
    background: #F1F1F1;
    height: 17px;
    border: 1px solid grey;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
button {
    width: 8%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 15px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  button:hover {
    background: #0B7DDA;
  }

  after {
    content: "";
    clear: both;
    display: table;
  }
</style>