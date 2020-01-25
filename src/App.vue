<template>
  <div id="app">
    <!-- <Head></Head> -->
    <Header/>
      <router-view/>
    <Foot/>
  </div>
</template>
<style>
/* #app {  */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
/* } */
</style>
<script>
import Header from '@/components/Header.vue';
// import Head from '@/components/merchantHeader.vue';
import Foot from '@/components/Foot.vue';
// import Home from '@/components/merchanthome.vue'
export default
{
  components : {
    //  Head,
     Foot,
     Header
   }
}
</script>