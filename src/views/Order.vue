<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">确认订单</h2>
      
      <!-- 订单信息 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-900 mb-4">订单信息</h3>
        <div class="bg-gray-50 p-4 rounded-md">
          <p class="text-gray-600">服务类型：{{ serviceName }}</p>
          <p class="text-gray-600 mt-2">价格：¥{{ price }}</p>
        </div>
      </div>

      <!-- 邮箱输入 -->
      <div class="mb-8">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder="请输入您的邮箱地址"
          required
        >
        <p class="mt-2 text-sm text-gray-500">支付成功后，我们将通过此邮箱与您联系</p>
      </div>

      <!-- 微信支付 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-900 mb-4">支付方式</h3>
        <div class="bg-gray-50 p-4 rounded-md text-center">
          <img
            src="/images/wechat-qr.svg"
            alt="微信支付二维码"
            class="mx-auto w-48 h-48 mb-4"
          >
          <p class="text-gray-600">请使用微信扫码支付</p>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button
        @click="handlePayment"
        :disabled="!email"
        class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        确认支付
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 从路由参数获取服务信息
const serviceName = route.query.service || '云计算咨询服务'
const price = route.query.price || '待定'

// 邮箱地址
const email = ref('')

// 处理支付
const handlePayment = async () => {
  if (!email.value) return

  try {
    // 这里模拟支付成功
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 显示成功消息
    alert('请联系SkySeaSelf,微信详聊，谢谢')

    // 跳转回服务页面
    router.push('/services')
  } catch (error) {
    console.error('支付失败:', error)
    alert('支付失败，请重试')
  }
}
</script>