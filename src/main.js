import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/order',
      component: () => import('./views/Order.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')