<template>
    <!-- 导航栏 -->
    <nav :class="{ 'shadow': isOpen }" class="relative bg-white dark:bg-gray-800 transition-colors duration-300">
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <RouterLink to="/">
                    <img class="w-auto h-6 sm:h-7" src="https://www.idcd.com/tool/placeholder/600x300?text=Mist"
                        alt="Server Logo">
                </RouterLink>

                <!-- 手机菜单按钮 -->
                <div class="flex lg:hidden">
                    <button @click="isOpen = !isOpen" type="button"
                        class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                        aria-label="toggle menu">
                        <svg v-if="!isOpen" xmlns="" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg v-if="isOpen" xmlns="" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- 手机菜单 -->
            <div :class="isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'"
                class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                <!-- 导航链接 -->
                <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                    <RouterLink v-for="link in links" :key="link.name" :to="link.to" :class="[
                        'px-2.5 py-2 transition-colors duration-300 transform rounded-lg md:mx-2',
                        isActive(link.to)
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                    ]">
                        {{ link.name }}
                    </RouterLink>
                </div>

                <!-- 搜索框 -->
                <!-- <div class="relative mt-4 md:mt-0">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>

                    <input type="text"
                        class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                        placeholder="搜索">
                </div> -->
                <div class="flex items-center justify-between mt-4 md:mt-0">
                    <!-- 跳转到官网 -->
                    <a
                        class="relative mt-4 md:mt-0 rounded-lg duration-300 transition-colors px-2.5 py-2 dark:hover:bg-slate-900 hover:bg-slate-100 border-2 border-gray-200" href="https://www.mistmc.top" target="_blank">
                        <i class="icon icon-tiaozhuan text-md icon-white"></i>
                        <span class="w-full text-md dark:text-white transition-colors duration-300">跳转到官网</span>
                    </a>
                    <!-- 切换黑暗模式 -->
                    <div class="mt-4 md:mt-0 md:ml-8">
                        <label class="relative flex flex-wrap items-center gap-2 cursor-pointer text-slate-500">
                            <input
                                class="relative w-12 h-6 transition-colors appearance-none cursor-pointer peer rounded-xl bg-slate-300 after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-6 checked:after:bg-emerald-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                                type="checkbox" id="theme-toggle" v-model="isDarkMode" />
                            <div
                                class="flex absolute left-[1.625rem] top-0.5 h-5 w-5 items-center justify-center text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <i class="icon icon-yueliang text-xl"></i>
                            </div>
                            <div
                                class="flex absolute left-0.5 top-0.5 h-5 w-5 items-center justify-center text-white opacity-100 transition-opacity peer-checked:opacity-0">
                                <i class="icon icon-ai250 text-xl"></i>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export default {
    setup() {
        // 当前路由
        const route = useRoute();

        /**
         * 判断当前路径是否匹配指定路径（包括明确的子路径匹配）
         * @param {string} path - 导航链接的路径
         * @returns {boolean} 是否匹配
         */
        const isActive = (path) => {
            return route.path === path || route.path.startsWith(`${path}/`);
        };

        // 监听暗黑模式的开关状态
        const isDarkMode = ref(false);

        // 从 localStorage 获取用户的主题设置
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            isDarkMode.value = true;
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // 监听暗黑模式开关状态变化
        watch(isDarkMode, (newValue) => {
            if (newValue) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });

        return {
            isActive,
            isDarkMode,
            links: [
                { name: '首页', to: '/home' },
                { name: '入服先看', to: '/join' },
                { name: '萌新攻略', to: '/help' },
                { name: '格雷进度', to: '/gregtech' },
                { name: 'TACZ图鉴', to: '/tacz' },
            ],
        };
    },
};
</script>