<template>
  <div class="nav-bar">
    <CustomButton
      text="All"
      :icon="listIcon"
      :backgroundColor="'#BFBFBF'"
      @click="showAllPokemons"
    />
    <CustomButton
      text="Favorites"
      :icon="favIcon"
      @click="showFavorites"
    />
  </div>
</template>

<script>
import listIcon from '@/assets/list.png';
import favIcon from '@/assets/seeFavs.png';
import CustomButton from "@/components/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      listIcon,
      favIcon,
    };
  },
  methods: {
    showFavorites() {
      this.$emit("show-favorites");
    },
    showAllPokemons() {
      this.$emit("show-all");
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  margin-top: auto;
}
</style>
