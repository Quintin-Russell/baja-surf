import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

VueGoogleMaps.use(VueGoogleMaps, {
    load: {
        key: ''
    },
    installComponents: false
})

createApp(App).use(store).use(router).mount('#app')
