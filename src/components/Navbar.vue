<template>
    <!-- 导航栏 -->
    <nav :class="{ 'shadow': isOpen }" class="relative bg-white dark:bg-gray-800">
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
                        <svg v-if="!isOpen" xmlns="" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg v-if="isOpen" xmlns="" class="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                    <RouterLink
                        v-for="link in links"
                        :key="link.name"
                        :to="link.to"
                        :class="[
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
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterView } from 'vue-router';
import { RouterLink, useRoute } from 'vue-router';

export default {
    setup() {
        // 当前路由
        const route = useRoute();

        /**
         * 判断当前路径是否匹配指定路径（包括子路径匹配）
         * @param {string} path - 导航链接的路径
         * @returns {boolean} 是否匹配
         */
        const isActive = (path) => {
            // 判断当前路径是否匹配导航路径，支持前缀匹配
            return route.path === path || route.path.startsWith(path);
        };

        return {
            isActive,
            links: [
                { name: '首页', to: '/home' },
                { name: '格雷科技进度', to: '/gregtech' },
                { name: 'TACZ武器图鉴', to: '/tacz' },
                { name: '如何进入', to: '/join' },
                { name: '帮助', to: '/help' }, // 帮助页面及其子页面
            ],
        };
    },
    data() {
        return {
            isOpen: false,
        };
    },
};
</script>
