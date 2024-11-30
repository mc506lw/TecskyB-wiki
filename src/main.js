   // 创建 Vue 应用程序的入口文件
   import { createApp } from 'vue';
   import App from './App.vue';
   import './style.css';
   import router from './router'; // 引入路由
   import AOS from 'aos'; // 引入 aos.js
   import 'aos/dist/aos.css'; // 引入 aos.js 的样式文件

   // 创建 Vue 应用实例
   const app = createApp(App);

   // 引入 aos.js
   AOS.init();

   // 使用路由
   app.use(router);

   // 挂载 Vue 应用到指定的 DOM 元素上
   app.mount('#app');
   