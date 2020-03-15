<template>
  <div id="app">
    <!-- {{getUserAccessToken}} -->
    <Head v-if="getUserAccessToken"></Head>
    <Header v-if="!getUserAccessToken"></Header>
    <div class='mainview'>
      <router-view/>
    </div>
    <!-- <Foot/> -->
    <Footer/>
  </div>
</template>
<style>
.mainview {
  min-height: 400px;
}
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
import Head from '@/components/merchantHeader.vue'
// import Head from '@/components/merchantHeader.vue';
// import Foot from '@/components/Foot.vue';
import Footer from '@/components/footer.vue';
import { mapGetters } from 'vuex';
// import Home from '@/components/merchanthome.vue'
export default
{
  components : {
     Head,
    //  Foot,
     Header,
     Footer
   },
   created(){
     this.$store.state.jwttoken = localStorage.getItem('jwtToken');
     this.$store.state.userAccessToken = localStorage.getItem('userAccessToken');
   },
   computed :{
     ...mapGetters(['getUserAccessToken','jwtToken'])
   }
}
</script>