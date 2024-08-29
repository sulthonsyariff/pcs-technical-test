import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/Home.vue'
import NotificationView from './views/Notification.vue'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'notification', path: '/notification', component: NotificationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
