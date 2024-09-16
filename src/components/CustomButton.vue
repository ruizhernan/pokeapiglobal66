<template>
  <button
    :style="{ backgroundColor: backgroundColor }"
    class="custom-button"
  >
    <img v-if="icon" :src="icon" alt="Icon" class="button-icon" />
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    backgroundColor: {
      type: String,
      default: "#F22539",
    },
  },
};
</script>

<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  padding: 11px 20px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 21.6px;
  color: #fff;
}

.button-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.button-text {
  flex-grow: 1;
  text-align: left;
}

.custom-button:hover {
  background-color: rgb(192, 14, 32);
}
</style>
