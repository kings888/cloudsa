<template>
  <div class="bg-white">
    <!-- 英雄区域 -->
    <div class="relative overflow-hidden bg-gradient-to-r from-primary to-accent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          专业的云计算技术专家服务
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-xl text-white opacity-90">
          10年云计算从业经验，为您提供全方位的云计算解决方案
        </p>
        <div class="mt-10">
          <router-link to="/services" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
            了解我们的服务
          </router-link>
        </div>
      </div>
    </div>

    <!-- 专业背景 -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="section-title">专业背景</h2>
          <p class="mt-4 text-xl text-gray-600">10年云计算从业经验，大厂技术专家背景</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- 工作经验 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">丰富的工作经验</h3>
            <p class="mt-4 text-gray-600">10年云计算从业经验，参与过多个大型企业的云迁移和架构优化项目</p>
          </div>

          <!-- 技术认证 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">权威技术认证</h3>
            <p class="mt-4 text-gray-600">获得AWS、Azure、阿里云等多个云平台的高级认证</p>
          </div>

          <!-- 项目经验 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">丰富项目经验</h3>
            <p class="mt-4 text-gray-600">服务过多家大型企业，成功完成数十个云迁移和优化项目</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务优势 -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="section-title">服务优势</h2>
          <p class="mt-4 text-xl text-gray-600">专业的技术团队，为您提供最优质的服务</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <!-- 技术优势 -->
          <div class="card hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">技术优势</h3>
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>精通AWS、Azure、阿里云等主流云平台</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>深入理解云原生架构和微服务设计</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>丰富的DevOps实践经验</span>
              </li>
            </ul>
          </div>

          <!-- 服务保障 -->
          <div class="card hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">服务保障</h3>
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>7*24小时技术支持</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>专业的项目交付流程</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>完善的售后服务体系</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="section-title">开始您的云计算之旅</h2>
        <p class="mt-4 text-xl text-gray-600">让我们一起打造安全、高效、可扩展的云计算解决方案</p>
        <div class="mt-8">
          <router-link to="/services" class="btn-primary text-lg">
            立即咨询
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>