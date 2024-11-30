import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import GregTec from './views/GregTec.vue';
import TACZ from './views/TACZ.vue';
import Join from './views/Join.vue';
import Help from './views/Help.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/gregtech', component: GregTec},
  { path: '/tacz', component: TACZ},
  { path: '/join', component: Join},
  { path: '/help', component: Help},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
