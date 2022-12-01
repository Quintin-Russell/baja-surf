import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.createApp(App).use(store).use(router).mount("#app");
