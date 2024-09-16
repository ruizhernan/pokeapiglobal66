import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import createStore from "./store";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);

app.use(router);
app.use(createStore);
app.use(VueToast);
app.mount("#app");
