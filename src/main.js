import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/main.css'
import '/dist/output.css'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

