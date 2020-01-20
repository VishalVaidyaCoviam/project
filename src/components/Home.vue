<template>
  <div>
      <PopularProduct></PopularProduct>
      <Homef></Homef>
  </div>
</template>
import 
<script>
import PopularProduct from '@/components/PopularProduct.vue';
import Homef from '@/components/Foot.vue';
export default {

  name: 'home',
  props: {
    msg: String
  },
  components: {
      Homef,
      PopularProduct
  }
}
</script>
<style scoped>

</style>
