<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">X</button>
      <div class="pokemon-image-container">
        <img v-if="pokemonImage" :src="pokemonImage" alt="Pokemon Image" class="pokemon-img" />
        <div v-else>Loading image</div>
      </div>
      <div class="pokemon-details">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Types:</strong> {{ pokemon.types }}</p>
      </div>
      <div class="modal-footer">
        <CustomButton 
          text="Share to my friends"
          @click="copyToClipboard"
        />
        <FavoriteButton
          :isFavorite="isFavoriteStatus"
          @toggle-favorite="toggleFavorite(pokemon.name)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import favDisable from "@/assets/favDisable.png";
import favActive from "@/assets/favActive.png";
import background from "@/assets/background.png";
import CustomButton from "./CustomButton.vue";
import FavoriteButton from "./FavoriteButton.vue";
import { getPokemonDetails } from "@/services/pokemonService";

export default {
  components: {
    FavoriteButton,
    CustomButton
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pokemonImage: null,
      background,
      favActive,
      favDisable,
    };
  },
  computed: {

    isFavoriteStatus() {
      return this.$store.getters.isFavorite(this.pokemon.name);
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal && this.pokemon && this.pokemon.name) {
        this.fetchPokemonDetails();
      }
    },
    'pokemon.name': function(newVal) {
      if (this.isVisible && newVal) {
        this.fetchPokemonDetails();
      }
    }
  },
  methods: {
    closeModal() {
        this.$emit('close');
    },
    async fetchPokemonDetails() {
        try {
            const data = await getPokemonDetails(this.pokemon.name);
            this.pokemonImage = data.imageUrl;
            this.pokemon.weight = data.weight;
            this.pokemon.height = data.height;
            this.pokemon.types = data.types;
        } catch (error) {
            console.error('Error fetching Pokémon details: ', error);
        }
    },
    toggleFavorite(pokemonName) {
      this.$store.dispatch('toggleFavorite', { name: pokemonName });
    },
    copyToClipboard() {
      const pokemonData = `Name: ${this.pokemon.name}, Weight: ${this.pokemon.weight}, Height: ${this.pokemon.height}, Types: ${this.pokemon.types}`;
      
      navigator.clipboard.writeText(pokemonData).then(() => {
        alert('Copied to clipboard!');
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    }
  }
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-footer {
  display: flex;
  justify-content: space-around;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 570px;
  position: relative;
  text-transform: capitalize;
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: none;
  font-size: 16px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pokemon-details {
  margin-top: 10px;
  text-align: left;
}

.share-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
}

.favorite-btn {
  background: none;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}

.favorite-btn img {
  width: 24px;
  height: 24px;
}

.pokemon-image-container {
  position: relative;
  width: 120%;
  height: 40vh;
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-position: center;
  margin:-20px;
  margin-bottom: 10px;
  padding: 0 0; 
}
</style>
