//using bootstrap: https://stackoverflow.com/questions/65547199/using-bootstrap-5-with-vue-3
//using oh-vue-icons: https://oh-vue-icons.js.org/docs
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiMenuButtonWide, BiMenuButtonFill } from "oh-vue-icons/icons"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

addIcons(BiMenuButtonWide, BiMenuButtonFill)

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(store)
  .use(router)
  .mount("#app")
