<template>
  <div class="bg-white">
    <!-- 服务介绍 -->
    <div class="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          专业的云计算服务
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-xl text-white opacity-90">
          为您提供全方位的云计算解决方案，助力企业数字化转型
        </p>
      </div>
    </div>

    <!-- 服务类型 -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="section-title">我们的服务</h2>
          <p class="mt-4 text-xl text-gray-600">专业的云计算服务，统一优惠价 ¥99</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- 云计算咨询 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">云计算咨询</h3>
            <p class="mt-4 text-gray-600">提供专业的云计算规划和架构设计咨询服务</p>
            <div class="mt-6">
              <button @click="handleBuyService('云计算咨询')" class="btn-primary block text-center w-full">
                立即购买 ¥99
              </button>
            </div>
          </div>

          <!-- 云计算迁移 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">云计算迁移</h3>
            <p class="mt-4 text-gray-600">专业的云迁移服务，确保业务平稳过渡</p>
            <div class="mt-6">
              <button @click="handleBuyService('云计算迁移')" class="btn-primary block text-center w-full">
                立即购买 ¥99
              </button>
            </div>
          </div>

          <!-- 云计算运维 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">云计算运维</h3>
            <p class="mt-4 text-gray-600">专业的云环境运维和优化服务</p>
            <div class="mt-6">
              <button @click="handleBuyService('云计算运维')" class="btn-primary block text-center w-full">
                立即购买 ¥99
              </button>
            </div>
          </div>

          <!-- 云安全合规 -->
          <div class="card hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">云安全合规</h3>
            <p class="mt-4 text-gray-600">确保云环境的安全性和合规性</p>
            <div class="mt-6">
              <button @click="handleBuyService('云安全合规')" class="btn-primary block text-center w-full">
                立即购买 ¥99
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 云平台支持 -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="section-title">支持的云平台</h2>
          <p class="mt-4 text-xl text-gray-600">我们支持主流的公有云平台</p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <!-- AWS -->
          <div class="card hover:shadow-xl transition-shadow text-center">
            <img src="/images/aws-logo.svg" alt="AWS" class="h-16 mx-auto mb-4">
            <h3 class="text-xl font-semibold text-gray-900">Amazon Web Services</h3>
            <p class="mt-4 text-gray-600">全球最大的公有云平台，提供全面的云服务</p>
          </div>

          <!-- Azure -->
          <div class="card hover:shadow-xl transition-shadow text-center">
            <img src="/images/azure-logo.svg" alt="Azure" class="h-16 mx-auto mb-4">
            <h3 class="text-xl font-semibold text-gray-900">Microsoft Azure</h3>
            <p class="mt-4 text-gray-600">微软的企业级云计算平台，深度整合微软生态</p>
          </div>

          <!-- 阿里云 -->
          <div class="card hover:shadow-xl transition-shadow text-center">
            <img src="/images/aliyun-logo.svg" alt="阿里云" class="h-16 mx-auto mb-4">
            <h3 class="text-xl font-semibold text-gray-900">阿里云</h3>
            <p class="mt-4 text-gray-600">中国最大的公有云平台，服务本土化优势明显</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleBuyService = (serviceName) => {
  router.push({
    path: '/order',
    query: {
      service: serviceName,
      price: 99
    }
  });
};
</script>