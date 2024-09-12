<template>
  <div class="welcome-page">
    <img src="@/assets/pikachu.png" alt="Pikachu" class="pokemon-image" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <StartButton />
  </div>
</template>

<script>
import StartButton from "@/components/StartButton.vue";

export default {
  name: "WelcomePage",
  components: {
    StartButton,
  },
  methods: {},
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
  justify-content: center;
  align-items: center;
  width: 80%;
}
h1 {
  font-size: 1.5em;
  color: rgb(94, 94, 94);
  font-weight: bold;
}
p {
  width: 100%;
  color: rgb(94, 94, 94);
  max-width: 570px;
  margin: 0 auto;
  word-break: break-word;
  font-weight: 500;
}
</style>
