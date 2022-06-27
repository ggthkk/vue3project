import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '/src/assets/index.css'
import naive from 'naive-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(naive).use(VueAxios, axios).mount('#app')
