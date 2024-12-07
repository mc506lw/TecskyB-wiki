import { createRouter, createWebHashHistory } from 'vue-router';
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
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
});


export default router;
