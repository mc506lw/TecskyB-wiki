import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import AOS from 'aos'; // 引入 AOS.js
import 'aos/dist/aos.css'; // 引入 AOS 样式文件
import router from './router'; // 只需要导入静态路由配置

// 创建 Vue 应用实例
const app = createApp(App);

// 初始化 AOS.js
AOS.init();

// 启动应用
app.use(router).mount('#app');
