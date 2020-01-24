<template>
  <div>
    <button class="btn-number" @click="decreaseNumber">-</button>
    <input type="number" class="txt-number" min="0" v-bind:value="numericValue" step="1" />
    <button class="btn-number" @click="increaseNumber">+</button>
  </div>
</template>
<script>
export default {
  name: "numbertype",
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 1000000000,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    inputClass: {
      default: 'vnis__input',
      type: String
    },
    buttonClass: {
      default: 'vnis__button',
      type: String
    }
  },
  data: () => {
    return {
      numericValue: this.value
    };
  },
  methods: {
    minusNumber() {
      this.numericValue -= 1;
    },
    increaseNumber() {
      this.numericValue += 1;
    }
  },
    watch: {
    numericValue: function(val, oldVal) {
      if (val <= this.min) {
        this.numericValue = parseInt(this.min);
      }
      if (val >= this.max) {
        this.numericValue = parseInt(this.max);
      }
      if (val <= this.max && val >= this.min) {
        this.$emit('input', val, oldVal);
      }
    }
  }
};
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.txt-number {
  height: 30px;
  float: left;
  -webkit-appearance: none;
  outline: none;
  margin: 0;
  text-align: center;
  /* width: auto; */
}
.txt-number:focus {
  /* border: 1px solid black; */
  -webkit-appearance: none;
}
.btn-number {
  /* margin-top: 10px; */
  background: #2196f3;
  height: 35px;
  float: left;
  font-size: 85%;
  /* transition: background 0.5s ease; */
  border: 0;
  /* border: 1px solid black; */
}
.btn-number:hover {
  background-color: #166ea8;
}
</style>