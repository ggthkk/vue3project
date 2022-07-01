import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '/src/assets/index.css'
import 'flowbite'
import naive from 'naive-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResizeText from 'vue3-resize-text'
import VueSafeHTML from 'vue-safe-html'

createApp(App)
    .use(store)
    .use(router)
    .use(naive)
    .use(VueAxios, axios)
    .use(VueResizeText)
    .use(VueSafeHTML, {
        allowedTags: ['marquee', 'blockquote'],
    })
    .mount('#app')
