<template>
  <div class="bg-white">
    <!-- 页面标题 -->
    <div class="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          云计算行业动态
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-xl text-white opacity-90">
          实时掌握云计算行业最新动态，助力您的技术决策
        </p>
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8">
          <!-- 新闻项 -->
          <article v-for="(news, index) in newsData" :key="index" class="card hover:shadow-xl transition-shadow">
            <div class="flex items-start space-x-6">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
                  <a :href="news.url" target="_blank" rel="noopener noreferrer">
                    {{ news.title }}
                  </a>
                </h3>
                <p class="mt-2 text-gray-600">{{ news.summary }}</p>
                <div class="mt-4 flex items-center text-sm text-gray-500">
                  <span>{{ news.source }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ news.date }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 新闻数据
const newsData = ref([
  {
    title: 'AWS发布新一代云服务器实例，性能提升40%',
    summary: 'Amazon Web Services (AWS) 今日宣布推出新一代EC2实例，采用最新的处理器架构，相比上一代性能提升40%，更适合运行高性能计算工作负载。',
    source: 'AWS News',
    date: '2023-08-15',
    url: 'https://aws.amazon.com/news'
  },
  {
    title: '微软Azure在中国市场份额持续增长',
    summary: '根据最新市场研究报告，微软Azure在中国公有云市场的份额持续增长，年增长率超过50%，成为增长最快的国际云服务提供商之一。',
    source: 'Azure Blog',
    date: '2023-08-14',
    url: 'https://azure.microsoft.com/blog'
  },
  {
    title: '阿里云发布新一代云原生数据库产品',
    summary: '阿里云今日发布新一代云原生数据库产品，提供更高的性能和可靠性，支持自动扩展和智能运维，帮助企业更好地管理和使用数据。',
    source: '阿里云新闻',
    date: '2023-08-13',
    url: 'https://www.aliyun.com/news'
  },
  {
    title: '全球云计算市场规模预计2024年突破5000亿美元',
    summary: '最新研究报告显示，受数字化转型加速和远程办公需求推动，全球云计算市场规模持续扩大，预计2024年将突破5000亿美元。',
    source: 'Cloud Market Research',
    date: '2023-08-12',
    url: 'https://example.com/cloud-market'
  },
  {
    title: '云原生技术在金融行业应用案例分享',
    summary: '某大型银行成功采用云原生技术重构核心系统，显著提升了系统性能和可靠性，部署效率提高300%，运维成本降低40%。',
    source: 'Cloud Native News',
    date: '2023-08-11',
    url: 'https://example.com/cloud-native'
  },
  {
    title: '多云管理平台成为企业数字化转型新趋势',
    summary: '随着企业采用多个云服务提供商的趋势增强，多云管理平台的需求快速增长，预计未来三年市场规模将翻倍。',
    source: 'Multi-Cloud Report',
    date: '2023-08-10',
    url: 'https://example.com/multi-cloud'
  },
  {
    title: '云安全投资持续增长，AI成为新焦点',
    summary: '企业对云安全的投资持续增长，特别是在AI驱动的安全解决方案方面，预计2023年相关投资将增长60%。',
    source: 'Cloud Security News',
    date: '2023-08-09',
    url: 'https://example.com/cloud-security'
  },
  {
    title: '边缘计算与云计算融合发展趋势明显',
    summary: '随着5G技术的普及和IoT设备的增多，边缘计算与云计算的融合成为新趋势，多家云服务商推出相关解决方案。',
    source: 'Edge Computing News',
    date: '2023-08-08',
    url: 'https://example.com/edge-computing'
  },
  {
    title: '云计算人才需求激增，薪资水平创新高',
    summary: '全球范围内云计算相关人才需求持续增长，特别是在云原生、DevOps等领域，平均薪资水平比去年提升15%。',
    source: 'Cloud Career Report',
    date: '2023-08-07',
    url: 'https://example.com/cloud-career'
  },
  {
    title: '绿色计算成为云数据中心发展新方向',
    summary: '主流云服务提供商纷纷投资绿色能源和节能技术，承诺到2030年实现碳中和，推动云计算产业可持续发展。',
    source: 'Green Computing News',
    date: '2023-08-06',
    url: 'https://example.com/green-computing'
  }
])

// 后续可以添加从实际API获取新闻数据的功能
// const fetchNews = async () => {
//   try {
//     const response = await axios.get('your-news-api-endpoint')
//     newsData.value = response.data
//   } catch (error) {
//     console.error('Error fetching news:', error)
//   }
// }

// onMounted(() => {
//   fetchNews()
// })
</script>