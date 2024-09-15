<template>
    <button @click="toggleFavorite" class="favorite-button">
      <img :src="isFavorite ? activeIcon : inactiveIcon" :alt="isFavorite ? 'Favorite active' : 'Favorite inactive'" />
    </button>
  </template>
  
  <script>

import favActive from "@/assets/favActive.png";
import favDisable from "@/assets/favDisable.png";

  export default {
    name: 'FavoriteButton',
    props: {
      isFavorite: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite');
      },
    },
    computed: {
      activeIcon() {
        return favActive;
      },
      inactiveIcon() {
        return favDisable;
      },
    },
  };
  </script>
  
  <style scoped>
  .favorite-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .favorite-button img {
    width: 24px;
    height: 24px;
  }
  </style>
  