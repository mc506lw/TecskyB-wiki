<template>
    <div class="relative w-screen bg-black overflow-hidden h-[80vh]">
        <!-- 噪声层 -->
        <div class="absolute inset-0 pointer-events-none opacity-5 bg-no-repeat bg-cover noise"></div>

        <!-- 覆盖层 -->
        <div class="absolute inset-0 pointer-events-none overlay"></div>

        <!-- 终端内容 -->
        <div
            class="relative flex flex-col justify-center items-center h-full text-center text-blue-400 font-mono px-8 terminal">
            <h1 class="text-6xl uppercase mb-4">
                错误 <span class="text-white errorcode">404</span>
            </h1>
            <p class="output mb-2">
                未找到你访问的页面
            </p>
            <p class="output mb-2">
                请尝试 <a href="/" class="text-blue-300 hover:underline">回到主页</a>
            </p>
            <p class="output">感谢配合</p>
        </div>
    </div>
</template>

<script>
export default {
    name: '错误页面',
};
</script>

<style scoped>

.noise {
    background-image: url('');
}

.overlay {
    background: repeating-linear-gradient(180deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0) 100%);
    background-size: auto 4px;
}

.overlay::before {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0;
    display: block;
    background-image: linear-gradient(0deg,
            transparent 0%,
            rgba(0, 128, 255, 0.2) 2%,
            rgba(0, 128, 255, 0.8) 3%,
            rgba(0, 128, 255, 0.2) 3%,
            transparent 100%);
    background-repeat: no-repeat;
    animation: scan 7.5s linear infinite;
}

@keyframes scan {
    0% {
        background-position: 0 -100vh;
    }

    35%,
    100% {
        background-position: 0 100vh;
    }
}
</style>
