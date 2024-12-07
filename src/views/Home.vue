<template>
    <!-- 首页模板 -->
    <div class="min-h-[80vh] p-4 sm:p-6 dark:bg-black transition-colors duration-300">

        <div data-aos="fade-down" class="relative">
            <!-- Banner 图片和欢迎信息 -->
            <img src="https://www.idcd.com/tool/placeholder/1200x400?text=Banner+Image"
                class="w-full object-cover h-[200px] sm:h-[400px] mb-6 rounded-md shadow">
            <div class="absolute bottom-4 left-4 sm:left-6">
                <h1 class="dw text-3xl sm:text-5xl font-bold">欢迎来到科技空岛子服</h1>
                <p class="dw text-sm sm:text-lg mt-2 sm:mt-4">一个高版本的格雷空岛服务器</p>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <!-- 三个主要优势介绍 -->
            <div data-aos="fade-up" data-aos-delay="0" class="bg-white p-4 rounded-md shadow flex items-center dbg">
                <i class="icon icon-white icon-huojianjiasu text-black text-3xl sm:text-5xl mx-2 sm:mx-4"></i>
                <div>
                    <div class="dw font-bold">沉浸式科技体验</div>
                    <div class="dw text-sm sm:text-base">独特的高版本格雷空岛</div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" class="bg-white p-4 rounded-md shadow flex items-center dbg">
                <i class="icon icon-white icon-shequn text-black text-3xl sm:text-5xl mx-2 sm:mx-4"></i>
                <div>
                    <div class="dw font-bold">强大的玩家社区</div>
                    <div class="dw text-sm sm:text-base">QQ群内的热心玩家会为你提供帮助</div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" class="bg-white p-4 rounded-md shadow flex items-center dbg">
                <i class="icon icon-white icon-pingtaijiaocheng text-black text-3xl sm:text-5xl mx-2 sm:mx-4"></i>
                <div>
                    <div class="dw font-bold">完整的任务系统</div>
                    <div class="dw text-sm sm:text-base">丰富的任务系统，引导你发展</div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div data-aos="fade-up" data-aos-delay="150" class="bg-white p-4 rounded-md shadow dbg">
                <h3 class="dw font-bold text-xl sm:text-2xl mb-2">新手指南</h3>
                <div>
                    <a class="dw icon icon-tiaozhuan mx-2 block text-sm sm:text-base">如何开始你的空岛之旅</a>
                    <a class="dw icon icon-tiaozhuan mx-2 block text-sm sm:text-base">基础机器搭建教程</a>
                    <a class="dw icon icon-tiaozhuan mx-2 block text-sm sm:text-base">电力系统入门指南</a>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="bg-white p-4 rounded-md shadow dbg">
                <h3 class="dw font-bold text-xl sm:text-2xl mb-2">服务器活动</h3>
                <div>
                    <div class="p-4 rounded-md shadow mb-4">
                        <div class="dw font-bold mb-2 dw">每日活跃奖励</div>
                        <div class="dw text-sm sm:text-base dw">每周末，服务器将会给予玩家双倍奖励！</div>
                    </div>
                    <div class="p-4 rounded-md shadow">
                        <div class="dw font-bold mb-2 dw">周末签到奖励</div>
                        <div class="dw text-sm sm:text-base dw">每周末，服务器将会给予玩家双倍奖励！</div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" class="bg-white p-4 rounded-md shadow dbg">
                <h3 class="dw font-bold text-xl sm:text-2xl mb-2">加入我们</h3>
                <p class="dw text-sm sm:text-base">加入我们群聊，获取帮助和最新资讯！</p>
                <a href="#" class="dw block bg-blue-500 hover:bg-blue-600 text-white text-center p-2 rounded-md mt-2 text-sm sm:text-base">QQ群</a>
            </div>
        </div>
    </div>
</template>
