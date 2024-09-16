import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
//Traer la lista de pokemons
export const getPokemonList = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(
      `${API_URL}?limit=${limit}&offset=${offset}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
};
//Traer detalles de un pokemon
export const getPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    const data = response.data;
    return {
      imageUrl: data.sprites.other["official-artwork"].front_default,
      weight: data.weight,
      height: data.height,
      types: data.types.map((type) => type.type.name).join(", "),
    };
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};
