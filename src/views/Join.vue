<template>
    <div class="min-h-[80vh] flex flex-col sm:flex-row sm:space-x-4 mx-4 sm:mx-8 mb-8 p-4 sm:p-6">
        <!-- 下载部分 -->
        <div data-aos="fade-left" class="w-full sm:w-1/2">
            <div class="bg-white p-4 rounded shadow-md">
                <h2 class="text-base sm:text-lg font-semibold mb-4">下载与安装</h2>
                <div class="mb-4 p-4 bg-gray-50 rounded">
                    <h3 class="font-semibold text-sm sm:text-base">1. 整合包下载</h3>
                    <button
                        class="icon icon-baiduwangpan mt-2 w-full bg-blue-500 text-white py-2 sm:py-4 rounded-md shadow hover:bg-blue-600 text-sm sm:text-base">
                        百度网盘下载
                    </button>
                    <button
                        class="icon icon-congyunpanxiazai mt-2 w-full bg-gray-800 text-white py-2 sm:py-4 rounded-md shadow hover:bg-gray-900 text-sm sm:text-base">
                        123网盘 下载
                    </button>
                    <p class="mt-2 text-gray-500 text-sm sm:text-base">整合包大小：约2.5GB</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h2 class="text-base sm:text-xl font-semibold mb-4">2. 安装步骤</h2>

                    <div class="space-y-3">
                        <div class="p-3 rounded-md shadow">
                            <p class="font-semibold text-sm sm:text-base">步骤1: 安装Java</p>
                            <p class="text-sm sm:text-base">要求Java 8 或以上版本</p>
                        </div>
                        <div class="p-3 rounded-md shadow">
                            <p class="font-semibold text-sm sm:text-base">步骤2: 解压整合包</p>
                            <p class="text-sm sm:text-base">解压到任意位置</p>
                        </div>
                        <div class="p-3 rounded-md shadow">
                            <p class="font-semibold text-sm sm:text-base">步骤3: 启动游戏</p>
                            <p class="text-sm sm:text-base">运行HMCL启动器</p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h2 class="text-base sm:text-xl font-semibold mb-4">3. 常见问题</h2>

                    <div class="space-y-3">
                        <div class="p-3 rounded-md shadow">
                            <p class="font-semibold text-sm sm:text-base">内存分配</p>
                            <p class="text-sm sm:text-base">建议分配6-8GB内存</p>
                        </div>
                        <div class="p-3 rounded-md shadow">
                            <p class="font-semibold text-sm sm:text-base">显卡要求</p>
                            <p class="text-sm sm:text-base">需独立显卡2GB以上</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 规则部分 -->
        <div data-aos="fade-right" class="w-full sm:w-1/2 mb-4 sm:mb-0">
            <div class="bg-white p-4 rounded shadow-md">
                <h2 class="text-base sm:text-lg font-semibold mb-4">服务器规则</h2>
                <div class="mb-4 p-4 bg-gray-50 rounded">
                    <h3 class="font-semibold text-sm sm:text-base">1. 基本行为准则</h3>
                    <ul class="list-disc pl-5 text-sm sm:text-base">
                        <li>禁止使用任何形式的外挂器、外挂</li>
                        <li>禁止恶意破坏他人建筑和设备</li>
                        <li>禁止发布政治、广告内容</li>
                        <li>尊重其他玩家，维护良好游戏环境</li>
                    </ul>
                </div>
                <div class="mb-4 p-4 bg-gray-50 rounded">
                    <h3 class="font-semibold text-sm sm:text-base">2. 游戏机制规则</h3>
                    <ul class="list-disc pl-5 text-sm sm:text-base">
                        <li>每个玩家只能创建1个岛屿</li>
                        <li>禁止使用任何游戏漏洞</li>
                        <li>禁止使用违规卡法越过系统限制</li>
                        <li>遵守能源使用和机器摆放规范</li>
                    </ul>
                </div>
                <div class="p-4 bg-gray-50 rounded">
                    <h3 class="font-semibold text-sm sm:text-base">3. 处罚制度</h3>
                    <ul class="list-disc pl-5 text-sm sm:text-base">
                        <li>首次违规：警告</li>
                        <li>第二次违规：禁言24小时</li>
                        <li>第三次违规：封禁7天</li>
                        <li>严重违规直接永久封禁</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RulesAndDownload'
}
</script>

<style scoped>
/* 添加一些自定义样式（如果需要） */
</style>
