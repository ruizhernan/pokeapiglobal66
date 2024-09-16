import { createStore } from "vuex";
import { getPokemonList } from "@/services/pokemonService";

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
      return state.favorites.some((fav) => fav.name === pokemonName);
    },
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },

    setFavorites(state, favorites) {
      state.favorites = favorites;
    },
    //Agregar / Quitar favoritos usando el localstorage
    addFavorite(state, pokemon) {
      if (!state.favorites.some((fav) => fav.name === pokemon.name)) {
        state.favorites.push(pokemon);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
        // console.log("Added to favorites:", state.favorites);
      }
    },
    removeFavorite(state, pokemon) {
      state.favorites = state.favorites.filter(
        (fav) => fav.name !== pokemon.name
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      // console.log("Removed from favorites:", state.favorites);
    },
    setOffset(state, offset) {
      state.offset = offset;
    },
  },
  actions: {
    //Consumo del servicio que hace fetch a la API
    async fetchPokemons({ commit, state }) {
      try {
        const pokemons = await getPokemonList(state.limit, state.offset);
        commit("setPokemons", pokemons);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    },
    //Carga de los favoritos desde localstorage
    loadFavorites({ commit }) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      commit("setFavorites", favorites);
    },
    //Manejo de favoritos
    toggleFavorite({ commit, state }, pokemon) {
      if (state.favorites.some((fav) => fav.name === pokemon.name)) {
        commit("removeFavorite", pokemon);
      } else {
        commit("addFavorite", pokemon);
      }
    },
  },
});
