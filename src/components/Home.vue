<template>
  <div>
      <!-- <router-link></router-link> -->
      <PopularProduct/>
      
  </div>
</template>
import 
<script>
import PopularProduct from '@/components/PopularProduct.vue';

export default {

  name: 'home',
  props: {
  },
  components: {
      PopularProduct
  }
}
</script>
<style scoped>

</style>
