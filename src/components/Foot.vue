<template>
  <div class="flex-container footer">
    <div class="flex-1 al-cn">
      <p>
        CUSTOMER CARE
        <br />5758439399
        <br />customer.care@pikemast.com
      </p>
    </div>
    <div class="flex-1 al-cn">
      Subscribe
      <br />
      <form class="example">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          search
        </button>
      </form>
    </div>
    <div class="flex-1 al-cn">
      Foolow Us
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../css/style.css");
</style>
