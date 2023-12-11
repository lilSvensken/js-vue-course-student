import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../pages/main-page/MainPage.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('../pages/news-page/NewsPage.vue')
        }
    ]
})

export default router