# 项目部署文档

## 环境要求

- Node.js 16.0.0 或更高版本
- npm 7.0.0 或更高版本（通常随Node.js一起安装）
- 现代浏览器（支持ES6+特性）

## 依赖版本和安全性

### 版本要求
- Vite: 6.2.2 或更高版本
- @vitejs/plugin-vue: 5.2.3 或更高版本

### 依赖安全检查
1. 运行安全审计：
   ```bash
   npm audit
   ```

2. 修复安全漏洞：
   ```bash
   npm audit fix
   ```
   对于需要进行破坏性更改的修复：
   ```bash
   npm audit fix --force
   ```
   注意：使用--force可能导致破坏性更改，请在更新后全面测试应用功能。

3. 定期更新依赖：
   ```bash
   npm update
   ```
   更新到最新主版本（可能包含破坏性更改）：
   ```bash
   npm update --force
   ```

## 本地开发环境搭建

1. 安装Node.js
   - 访问 [Node.js官网](https://nodejs.org/)
   - 下载并安装适合您操作系统的LTS版本
   - 安装完成后，打开终端运行以下命令验证安装：
     ```bash
     node --version
     npm --version
     ```

2. 克隆项目代码
   ```bash
   git clone <项目仓库地址>
   cd cloud-sa
   ```

3. 安装项目依赖
   ```bash
   npm install
   ```

4. 启动开发服务器
   ```bash
   npm run dev
   ```

## 生产环境部署

### 构建项目

1. 在项目根目录下运行构建命令：
   ```bash
   npm run build
   ```
   构建完成后，将在 `dist` 目录生成生产环境所需的静态文件。

### 部署到Web服务器

#### 方案1：静态文件服务器（推荐）

1. 将 `dist` 目录下的所有文件复制到Web服务器的静态文件目录
2. 配置Web服务器（以Nginx为例）：

```nginx
server {
    listen 7000;
    listen [::]:7000;
    server_name your-domain.com;

    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

#### 方案2：使用Node.js服务器

1. 安装服务器依赖：
   ```bash
   npm install -g serve
   ```

2. 运行服务器：
   ```bash
   serve -s dist -l 7000 --host 0.0.0.0
   ```

## 环境变量配置

如果项目中使用了环境变量，请确保在生产环境中正确配置以下文件：

- `.env.production`：生产环境配置文件

## 部署检查清单

- [ ] Node.js和npm版本符合要求
- [ ] 所有依赖已正确安装
- [ ] 依赖安全审计已完成（npm audit）
- [ ] 关键依赖版本符合要求（Vite, @vitejs/plugin-vue等）
- [ ] 生产环境构建成功
- [ ] 环境变量配置正确
- [ ] Web服务器配置正确
- [ ] HTTPS证书配置（如需要）
- [ ] 域名解析正确（如需要）

## 常见问题

1. **404错误**
   - 确保Web服务器配置了正确的重写规则
   - 检查部署目录结构是否正确

2. **白屏问题**
   - 检查浏览器控制台是否有错误信息
   - 验证所有静态资源是否正确加载

3. **性能问题**
   - 确保启用了gzip压缩
   - 检查是否配置了适当的缓存策略

## 更新部署

1. 拉取最新代码
   ```bash
   git pull
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 重新构建
   ```bash
   npm run build
   ```

4. 替换服务器上的文件

## 回滚策略

1. 保留每次部署的备份
2. 记录版本号和部署时间
3. 出现问题时可快速切换到上一个稳定版本

## 技术支持

如遇到部署问题，请参考：
- Vue.js官方文档：https://vuejs.org/
- Vite官方文档：https://vitejs.dev/
- TailwindCSS文档：https://tailwindcss.com/