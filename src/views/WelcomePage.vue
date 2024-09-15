<template>
  <div class="welcome-page">
    <img src="@/assets/pikachu.png" alt="Pikachu" class="pokemon-image" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <CustomButton 
      text="Get Started"          
      @click="goToList"
    />
  </div>
</template>

<script>

import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "WelcomePage",
  components: {
    CustomButton,
  },
  methods: {
    goToList(){
      this.$router.push("/list")
    },
  },
};
</script>

<style scoped>
.pokemon-image {
  width: 325px;
  height: 288px;
  margin: 2.7em;
}
.welcome-page {
  display: flex;
  margin: auto;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
}
h1 {
  font-size: 26px;
  color: #353535;
  font-weight: 700;
}
p {
  width: 100%;
  font-size: 18px;
  color: #5E5E5E;
  max-width: 570px;
  margin: 0 auto;
  font-weight: 500;
}
</style>
