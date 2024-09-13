import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import PokemonList from "../views/PokemonList.vue";
const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomePage,
      },
      {
        path: '/list',
        name: 'PokemonList',
        component: PokemonList,
      },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
