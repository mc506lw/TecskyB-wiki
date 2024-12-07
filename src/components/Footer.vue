<template>
  <footer class="bg-gray-100 p-6 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto">
      <!-- 使用 Tailwind CSS 的 grid 布局来适配手机端 -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div>
          <h3 class="font-bold dw">服务器信息</h3>
          <p class="dw">IP: mc.mistmc.top</p>
          <p class="dw">版本: 请去“入服先看”页面下载客户端</p>
        </div>
        <div>
          <h3 class="font-bold dw">联系方式</h3>
          <p class="dw">QQ群: 807505406</p>
        </div>
        <div>
          <h3 class="font-bold dw">相关宣传</h3>
          <p class="dw">Bilibili</p>
          <p class="dw">MCBBS</p>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-bold dw">赞助支持</h3>
          <button class="dw icon icon-shixintaoxin my-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500">
            爱发电
          </button>
        </div>
      </div>
      <div class="text-center mt-6 dw">
        © 2024 MistMC 禁止盗用 制作者: mc506lw
      </div>
    </div>
  </footer>
</template>