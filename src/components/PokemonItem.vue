<template>
    <li class="pokemon-item">
      <span class="pokemon-name">{{ pokemon.name }}</span>
      <button class="favorite-btn" @click="toggleFavorite">
        <img :src="isFavorite ? favActive : favDisable" alt="Favorite" class="favorite-icon" />
      </button>
    </li>
  </template>
  
  <script>
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
    data() {
      return {
        favActive,
        favDisable,
      };
    },
    computed: {
      isFavorite() {
        return this.$store.getters.isFavorite(this.pokemon.name);
      },
    },
    methods: {
      toggleFavorite() {
        if (this.isFavorite) {
          this.$store.commit('removeFavorite', this.pokemon.name);
        } else {
          this.$store.commit('addFavorite', this.pokemon);
        }
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
    font-family: 'Montserrat', sans-serif;
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
  