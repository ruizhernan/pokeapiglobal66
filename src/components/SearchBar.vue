<template>
  <div class="search-container">
    <div class="search-icon-container">
      <img src="@/assets/search.png" alt="Search" class="search-icon" />
    </div>
    <input
      v-model="internalSearchTerm"
      placeholder="Search Pokémon"
      class="search-input"
      @input="updateSearch"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  data() {
    return {
      internalSearchTerm: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.internalSearchTerm = newValue;
    },
  },
  methods: {
    updateSearch() {
      this.$emit("update:modelValue", this.internalSearchTerm);
    },
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
  width: 95%;
  margin-bottom: 20px;
}

.search-icon-container {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.search-icon {
  width: 24px;
  height: 24px;
}

.search-input {
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 22px;
}
</style>
