<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">确认订单</h2>
      
      <!-- 订单信息 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-900 mb-4">订单信息</h3>
        <div class="bg-gray-50 p-4 rounded-md space-y-2">
          <p class="text-gray-600">订单号：{{ orderId }}</p>
          <p class="text-gray-600">服务类型：{{ serviceName }}</p>
          <p class="text-gray-600">价格：¥{{ price }}</p>
          <p class="text-gray-600">创建时间：{{ orderTime }}</p>
        </div>
      </div>

      <!-- 联系信息 -->
      <div class="mb-8 space-y-4">
        <h3 class="text-lg font-medium text-gray-900 mb-4">联系信息</h3>
        
        <!-- 邮箱输入 -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱地址 <span class="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="请输入您的邮箱地址"
            required
          >
          <p class="mt-1 text-sm text-gray-500">支付成功后，我们将通过此邮箱与您联系</p>
        </div>

        <!-- 手机号码 -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">手机号码 <span class="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="请输入您的手机号码"
            required
          >
        </div>

        <!-- 备注信息 -->
        <div>
          <label for="remark" class="block text-sm font-medium text-gray-700 mb-2">备注信息</label>
          <textarea
            id="remark"
            v-model="remark"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            placeholder="如有特殊需求，请在此说明"
          ></textarea>
        </div>
      </div>

      <!-- 微信支付 -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-gray-900 mb-4">支付方式</h3>
        <div class="bg-gray-50 p-4 rounded-md text-center">
          <img
            src="/images/pay.jpg"
            alt="微信支付二维码"
            class="mx-auto w-48 h-48 mb-4"
          >
          <p class="text-gray-600 font-medium">请使用微信扫码支付</p>
          <p class="text-sm text-gray-500 mt-2">扫码后请备注订单号：{{ orderId }}</p>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button
        @click="handlePayment"
        :disabled="!isFormValid"
        class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        确认支付 ¥{{ price }}
      </button>

      <!-- 温馨提示 -->
      <div class="mt-4 text-sm text-gray-500">
        <p>温馨提示：</p>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li>付款成功后，我们会通过邮件发送服务详情</li>
          <li>如有疑问，请添加客服微信咨询</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 从路由参数获取服务信息
const serviceName = route.query.service || '云计算咨询服务'
const price = route.query.price || '待定'

// 生成订单号和订单时间
const orderId = 'ORDER' + Date.now().toString(36).toUpperCase()
const orderTime = new Date().toLocaleString('zh-CN')

// 表单数据
const email = ref('')
const phone = ref('')
const remark = ref('')

// 表单验证
const isFormValid = computed(() => {
  return email.value && phone.value && /^1[3-9]\d{9}$/.test(phone.value)
})

// 处理支付
const handlePayment = async () => {
  if (!isFormValid.value) return

  try {
    // 这里模拟支付成功
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 显示成功消息
    alert(`订单提交成功！\n订单号：${orderId}\n请添加客服微信完成付款，并备注订单号，谢谢！`)

    // 跳转回服务页面
    router.push('/services')
  } catch (error) {
    console.error('订单提交失败:', error)
    alert('订单提交失败，请重试')
  }
}
</script>
</script>