<template>
  <div class="min-h-screen">
    <!-- 联系信息弹窗 -->
    <div v-if="showContactDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="showContactDialog = false">
      <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4" @click.stop>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">联系方式</h3>
        <div class="space-y-3">
          <a href="tel:+8618252150827" class="flex items-center text-primary hover:text-primary/90">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            182-5215-0827
          </button>
          <a href="mailto:18252150827@163.com" class="flex items-center text-primary hover:text-primary/90">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            18252150827@163.com
          </button>
        </div>
        <button class="mt-6 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm" @click="showContactDialog = false">
          关闭
        </button>
      </div>
    </div>
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
            <button @click="showContactDialog = true" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
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
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const showContactDialog = ref(false)
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