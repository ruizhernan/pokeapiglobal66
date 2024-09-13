import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      pokemons: [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      offset: 0,
      limit: 15,
    };
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setFavorites(state, favorites) {
      state.favorites = favorites;
      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    addFavorite(state, pokemon) {
      if (!state.favorites.find(fav => fav.name === pokemon.name)) {
        state.favorites.push(pokemon);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, pokemonName) {
      state.favorites = state.favorites.filter(fav => fav.name !== pokemonName);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setOffset(state, offset) {
      state.offset = offset;
    },
  },
  actions: {
    async fetchPokemons({ commit, state }) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${state.offset}&limit=${state.limit}`);
        const data = await response.json();
        commit('setPokemons', data.results);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    },
    loadMorePokemons({ commit, dispatch, state }) {
      const newOffset = state.offset + state.limit;
      commit('setOffset', newOffset);
      dispatch('fetchPokemons');
    },
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
});
