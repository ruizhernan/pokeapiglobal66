<template>
    <div class="pokemon-list">
      <div class="search-container">
        <div class="search-icon-container">
          <img src="@/assets/search.png" alt="Search" class="search-icon" />
        </div>
        <input 
          v-model="searchTerm" 
          placeholder="Search Pokémon"
          class="search-input"
        />
      </div>
  
      <div v-if="filteredPokemons.length === 0 && searchTerm" class="no-results">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <CustomButton 
          text="Go back home"
          @click="goBackHome"
        />
      </div>
  
      <ul v-else class="list">
        <PokemonItem 
          v-for="pokemon in filteredPokemons" 
          :key="pokemon.name" 
          :pokemon="pokemon" 
        />
      </ul>
  
      <!-- <button v-if="pokemons.length > 0" @click="loadMore" class="load-more-btn">Load More</button> -->
      <div class="nav-bar">
        <CustomButton
          text="All"
          icon="src/assets/list.png"
          :backgroundColor="'#BFBFBF'"
          @click="showAllPokemons"
        />
        <CustomButton
          text="Favorites"
          icon="src/assets/seeFavs.png"
          @click="showFavorites"
        />
      </div>
    </div>
  </template>
  
  <script>
  import PokemonItem from "@/components/PokemonItem.vue";
  import CustomButton from "@/components/CustomButton.vue";
  import { mapState, mapActions } from 'vuex';
  
  export default {
  name: "PokemonList",
  components: {
    PokemonItem,
    CustomButton
  },
  data() {
    return {
      searchTerm: "",
      showFavoritesOnly: false,
    };
  },
  computed: {
    ...mapState(['pokemons', 'favorites']),
    filteredPokemons() {
      let pokemonsToFilter = this.showFavoritesOnly ? this.favorites : this.pokemons;

      return pokemonsToFilter.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(['fetchPokemons', 'loadMorePokemons']),
    goBackHome() {
      this.searchTerm = "";
    },
    showAllPokemons() {
      this.showFavoritesOnly = false;
    },
    showFavorites() {
      this.showFavoritesOnly = true;
    },
    loadMore() {
      this.loadMorePokemons();
    },
  },
  mounted() {
    this.fetchPokemons();
  },
};
</script>
  
  <style scoped>
  /* .load-more-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
} */
  .nav-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
    margin-top: auto; 
  }
  
  .pokemon-list {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
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
    width: 90%;
    max-width: 570px;
    padding: 10px 10px 10px 40px;
    border: 1px solid #ffff;
    box-shadow: 0px 2px 10px 0px #0000000A;
    border-radius: 8px;
    font-size: 22px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
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
    color: #5E5E5E;
    font-weight: 500;
  }
  
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  </style>
  