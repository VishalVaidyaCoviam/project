<template>
  <div class="flex-container flex-column">
    <div class="flex-container">
      <div class="flex-1">
        <h2 style="margin-left:20px;">Cart Details</h2>
      </div>
    </div>
    <div class="cart">
    <div class="flex-container flex-row">
      <div class="gflex-1 flex-column">
        <img :src="profilePic" class="cart-image" alt />
        <div class="qunt-div">
        <label for="Quantity">Quantity</label>
            <input type="number" placeholder="Default" inline controls>
        </div>
      </div>
      <div class="gflex-2">
          <div class="flex-row">
          <div class="gflex-1 flex-column">
            <label class="label-prod">Product Name:</label>
            <label class="label-prod">Product Name:</label>
            <label class="label-prod">Product Name:</label>
          </div>
          <div class="gflex-2 flex-column">
            <label for>Product Dummy</label>
            <label for>Product Dummy</label>
            <label for>Product Dummy</label>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProfilePic from "../image/user.svg";
export default {
  name: "cart",
  props: {},
  data: () => {
    return {
      profilePic: ProfilePic
    };
  },
  methods: {
    productDetails(prodcutId) {
      window.console.log(prodcutId);
      // router.push({ path: `/user/${userId}` }) // -> /user/123

      this.$router.push({ path: `/product/${prodcutId}` });
    }
  },
  computed: {
    ...mapGetters(["popularProductsGetter"])
  },
  mounted() {
    this.$store.dispatch("PopularProductAction");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qunt-div {
    padding-left: 10%;
}
.cart {
    width: 97%;
    height: 250px;
    margin-left:25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding-top: 10px;
}
.cart:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.cart-image {
    height: 70%;
}
.flex-container {
  display: flex;
}
.flex-row {
    display: flex;
  flex-direction: row;
}
.flex-column {
    display: flex;
  flex-direction: column;
}
.flex-1 {
  flex: 1 0 auto;
}
.flex-2 {
  flex: 2 0 auto;
}
.flex-3 {
  flex: 3 0 auto;
}
.gflex-1 {
  flex-grow: 1;
}
.gflex-2 {
  flex-grow: 2;
}
.gflex-3 {
  flex-grow: 3;
}
.bd {
  /* border-bottom: 0.5px solid grey;
  border-right: 0.5px outset grey; */
  /* .card { */
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 5px;
}
.bd:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* border-style: groove; */

.label-rating {
  float: left;
  margin-left: 5px;
}
</style>
