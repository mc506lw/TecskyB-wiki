<template>
    <!-- 首页模板 -->
    <div class="min-h-[80vh] p-6 mx-8">

        <div data-aos="fade-down" class="relative ">
            <!-- Banner 图片和欢迎信息 -->
            <img src="https://www.idcd.com/tool/placeholder/1200x400?text=Banner+Image"
                class="w-full object-cover h-[400px] mb-6 rounded-md shadow">
            <div class="absolute bottom-4 left-6">
                <h1 class="text-5xl font-bold">欢迎来到科技空岛服务器</h1>
                <p class="text-lg mt-4">一个注重于高科技机器的Minecraft服务器</p>
            </div>
        </div>


        <div class="grid grid-cols-3 gap-4 mb-6">
            <!-- 三个主要优势介绍 -->
            <div data-aos="fade-up" data-aos-delay="0" class="bg-white p-4 rounded-md shadow flex">
                <i class="icon icon-huojianjiasu text-black text-5xl mx-4"></i>
                <div>
                    <div class="font-bold">沉浸式科技体验</div>
                    <div>独特的高版本格雷空岛</div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" class="bg-white p-4 rounded-md shadow flex">
                <i class="icon icon-shequn text-black text-5xl mx-4"></i>
                <div>
                    <div class="font-bold">活跃的玩家社群</div>
                    <div>互帮互助，共同探讨</div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" class="bg-white p-4 rounded-md shadow flex">
                <i class="icon icon-pingtaijiaocheng text-black text-5xl mx-4"></i>
                <div>
                    <div class="font-bold">完善的手册教程</div>
                    <div>详尽的定制化WIKI文档</div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div data-aos="fade-up" data-aos-delay="150" class="bg-white p-4 rounded-md shadow">
                <h3 class="font-bold text-2xl mb-2">新手指南</h3>
                <div>
                    <a class="icon icon-tiaozhuan mx-2 block">如何开始你的空岛之旅</a>
                    <a class="icon icon-tiaozhuan mx-2 block">基础机器搭建教程</a>
                    <a class="icon icon-tiaozhuan mx-2 block">电力系统入门指南</a>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="bg-white p-4 rounded-md shadow">
                <h3 class="font-bold text-2xl mb-2">服务器活动</h3>
                <div>
                    <div class=" p-4 rounded-md shadow">
                        <div class="font-bold mb-2">周末双倍奖励</div>
                        <div>每周末，服务器将会给予玩家双倍奖励！</div>
                    </div>
                    <div class=" p-4 rounded-md shadow">
                        <div class="font-bold mb-2">周末双倍奖励</div>
                        <div>每周末，服务器将会给予玩家双倍奖励！</div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" class="bg-white p-4 rounded-md shadow">
                <h3 class="font-bold text-2xl mb-2">加入我们</h3>
                <p>加入我们的社区，获取最新资讯！</p>
                <a href="#" class="block bg-black text-white text-center p-2 rounded-md mt-2">QQ群</a>
                <a href="#" class="block bg-blue-600 text-white text-center p-2 rounded-md mt-2">Discord</a>
            </div>
        </div>
    </div>
</template>