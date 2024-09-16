<template>
  <li class="pokemon-item">
    <span class="pokemon-name" @click="emitSelect">{{ pokemon.name }}</span>
    <FavoriteButton
      :isFavorite="$store.getters.isFavorite(pokemon.name)"
      @toggle-favorite="toggleFavorite"
    />
  </li>
</template>

<script>
import FavoriteButton from "./FavoriteButton.vue";
import favDisable from "@/assets/favDisable.png";
import favActive from "@/assets/favActive.png";

export default {
  name: "PokemonItem",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  components: {
    FavoriteButton,
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch("toggleFavorite", this.pokemon);
    },
    emitSelect() {
      this.$emit("select", this.pokemon);
    },
  },
};
</script>

<style scoped>
.pokemon-item {
  max-width: 570px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: white;
}

.pokemon-name {
  font-size: 22px;
  font-weight: 500;
  color: #353535;
  line-height: 26.4px;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
}

.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.favorite-icon {
  width: 24px;
  height: 24px;
}
</style>
