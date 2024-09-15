<template>
  <div class="pokemon-list">
    <SearchBar v-model="searchTerm" />
    <NoResults 
      v-if="filteredPokemons.length === 0 && searchTerm" 
      @go-back-home="goBackHome"
    />
    
    <ul v-else class="list">
      <PokemonItem 
        v-for="pokemon in filteredPokemons" 
        :key="pokemon.name" 
        :pokemon="pokemon" 
        @select="selectPokemon(pokemon)"
      />
    </ul>

    <PokemonModal 
      v-if="selectedPokemon" 
      :pokemon="selectedPokemon" 
      :isVisible="isModalVisible"
      @close="closeModal"
    />

    <NavBar 
      @show-favorites="showFavorites" 
      @show-all="showAllPokemons"
    />
  </div>
</template>

<script>
import PokemonModal from "../components/PokemonModal.vue";
import PokemonItem from "@/components/PokemonItem.vue";
import SearchBar from "@/components/SearchBar.vue";
import NoResults from "@/components/NoResults.vue";
import NavBar from "@/components/NavBar.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "PokemonList",
  components: {
    PokemonItem,
    PokemonModal,
    SearchBar,
    NoResults,
    NavBar
  },
  data() {
    return {
      searchTerm: "",
      showFavoritesOnly: false,
      selectedPokemon: null,
      isModalVisible: false,
    };
  },
  computed: {
    ...mapState(['pokemons', 'favorites']),
    filteredPokemons() {
      let pokemonsToFilter = this.showFavoritesOnly ? this.pokemons.filter(pokemon => this.$store.getters.isFavorite(pokemon.name)) : this.pokemons;
      return pokemonsToFilter.filter(pokemon =>
        (pokemon.name || "").toLowerCase().includes((this.searchTerm || "").toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(['fetchPokemons', 'loadMorePokemons']),
    updateSearchTerm(newSearchTerm) {
      this.searchTerm = newSearchTerm;
    },
    goBackHome() {
      this.searchTerm = "";
    },
    showFavorites() {
      this.showFavoritesOnly = true;
    },
    showAllPokemons() {
      this.showFavoritesOnly = false;
    },
    loadMore() {
      this.loadMorePokemons();
    },
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false; 
    }
  },
  mounted() {
    this.fetchPokemons();
  },
};
</script>

<style scoped>
.pokemon-list {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
