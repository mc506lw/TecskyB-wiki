import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import GregTec from './views/GregTec.vue';
import TACZ from './views/TACZ.vue';
import Join from './views/Join.vue';
import Help from './views/Help.vue';
import NotFound from './views/404.vue'; // 404 页面组件

// 静态路由
const staticRoutes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/gregtech', component: GregTec },
  { path: '/tacz', component: TACZ },
  { path: '/join', component: Join },
  { path: '/help', component: Help },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes, // 初始静态路由
});

// 添加 404 路由（动态添加）
const catchAllRoute = { path: '/:catchAll(.*)', component: NotFound };

/**
 * 初始化动态路由
 */
export async function initDynamicRoutes() {
  // 仅动态添加 404 路由
  router.addRoute(catchAllRoute);
  console.log('动态路由已加载:', router.getRoutes());
}

export default router;
