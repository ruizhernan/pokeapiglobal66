import { createStore } from 'vuex';
import { getPokemonList } from '@/services/pokemonService';

export default createStore({
  state() {
    return {
      pokemons: [], 
      favorites: [],
      offset: 0,
      limit: 8,
    };
  },
  getters: {
    pokemons(state) {
      return state.pokemons;
    },
    favorites(state) {
      return state.favorites;
    },
    isFavorite: (state) => (pokemonName) => {
      return state.favorites.some(fav => fav.name === pokemonName);
    },
  },
  mutations: {
    // Establece la lista de Pokémon
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    // Establece los Pokémon favoritos
    setFavorites(state, favorites) {
      state.favorites = favorites;
    },
    // Agrega un Pokémon a la lista de favoritos
    addFavorite(state, pokemon) {
      if (!state.favorites.some(fav => fav.name === pokemon.name)) {
        state.favorites.push(pokemon);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        console.log('Added to favorites:', state.favorites);
      }
    },
    // Elimina un Pokémon de la lista de favoritos
    removeFavorite(state, pokemon) {
      state.favorites = state.favorites.filter(fav => fav.name !== pokemon.name);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      console.log('Removed from favorites:', state.favorites);
    },
    setOffset(state, offset) {
      state.offset = offset;
    },
  },
  actions: {
    // Obtiene la lista de Pokémon desde el servicio y actualiza el estado
    async fetchPokemons({ commit, state }) {
      try {
        const pokemons = await getPokemonList(state.limit, state.offset);
        commit('setPokemons', pokemons);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    },
    // Carga los Pokémon favoritos desde el almacenamiento local
    loadFavorites({ commit }) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      commit('setFavorites', favorites);
    },
    // Alterna el estado de favorito de un Pokémon
    toggleFavorite({ commit, state }, pokemon) {
      if (state.favorites.some(fav => fav.name === pokemon.name)) {
        commit('removeFavorite', pokemon);
      } else {
        commit('addFavorite', pokemon);
      }
    },
  },
});
