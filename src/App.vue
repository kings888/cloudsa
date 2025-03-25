<template>
  <div class="min-h-screen">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-primary">云计算专家服务</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link to="/" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2" :class="[$route.path === '/' ? 'border-primary' : 'border-transparent']">首页</router-link>
              <router-link to="/services" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2" :class="[$route.path === '/services' ? 'border-primary' : 'border-transparent']">服务</router-link>
              <router-link to="/news" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2" :class="[$route.path === '/news' ? 'border-primary' : 'border-transparent']">行业动态</router-link>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="contactDialog.open()" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              联系咨询
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="bg-secondary text-white py-12 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">关于我们</h3>
            <p class="text-gray-300">10年云计算从业经验，为企业提供专业的云计算解决方案。</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">联系方式</h3>
            <p class="text-gray-300">电话：182-5215-0827</p>
            <p class="text-gray-300">邮箱：18252150827@163.com</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">服务范围</h3>
            <ul class="text-gray-300 space-y-2">
              <li>云计算咨询</li>
              <li>云计算迁移</li>
              <li>云计算运维</li>
              <li>云安全合规</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2023 云计算专家服务. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute, ref } from 'vue-router'
import ContactDialog from './components/ContactDialog.vue'

const route = useRoute()
const contactDialog = ref(null)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>