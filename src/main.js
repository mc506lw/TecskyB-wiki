import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import AOS from 'aos'; // 引入 AOS.js
import 'aos/dist/aos.css'; // 引入 AOS 样式文件
import router, { initDynamicRoutes } from './router'; // 引入路由和动态路由初始化方法

// 创建 Vue 应用实例
const app = createApp(App);

// 初始化 AOS.js
AOS.init();

async function bootstrap() {
  await initDynamicRoutes(); // 初始化动态路由
  app.use(router).mount('#app'); // 挂载应用
}

bootstrap();
