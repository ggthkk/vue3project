import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contantpage from '../views/Content-page.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/contantpage',
        name: 'contantpage',
        component: contantpage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
