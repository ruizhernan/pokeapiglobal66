<template>
  <div class="no-results">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <CustomButton text="Go back home" @click="goBackHome" />
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
  methods: {
    goBackHome() {
      this.$emit("go-back-home");
    },
  },
};
</script>

<style scoped>
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
}

.no-results h1 {
  font-size: 36px;
  color: #353535;
  font-weight: 700;
}

.no-results p {
  font-size: 20px;
  color: #5e5e5e;
  font-weight: 500;
}
</style>
