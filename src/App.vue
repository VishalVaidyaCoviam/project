<template>
  <div id="app">
    <!-- <Head></Head> -->
      <router-link to="/merchant">Merchant</router-link>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
// import Head from '@/components/Header.vue';
export default
{
  // components : {
  //   Head
  // }
}
</script>