<template>
    <div id="live2d-container" class="relative">
        <!-- 提供占位符容器，供 Live2D 模型挂载 -->
    </div>
</template>

<script setup>
import { loadOml2d } from 'oh-my-live2d';

// 直接初始化 Live2D 模型
const oml2d = loadOml2d({
    mobileDisplay: true,
    models: [
        {
            path: '/mc506lw/L2DMCVT.model3.json',
            position: [-80, 20],
            mobilePosition: [80, 80],
            scale: 0.08,
            mobileScale: 0.06,
            stageStyle: {
                height: 350,
                width: 200,
            },
            mobileStageStyle: {
                height: 370,
                width: 400,
            },
        },
    ],
    menus: {
        items: [
            {
                id: 'Rest',
                icon: 'icon-rest',
                title: '休息',
                onClick() {
                    oml2d.tipsMessage('刷新我就回来了', 2000, 10);
                    setTimeout(() => {
                        oml2d.stageSlideOut();
                    }, 1500);
                }

            },
            {
                id: 'About',
                icon: 'icon-about',
                title: '关于',
                onClick() {
                    oml2d.tipsMessage('我是老万', 2000, 10);
                },
            },
        ],
    },
    statusBar: {
        restMessage: '老万睡了',
    },
    tips: {
        copyTips:
        {
            message: ['复制成功'],
        }
    },
});

// 设置舞台滑入后的提示消息
oml2d.onStageSlideIn(() => {
    oml2d.tipsMessage('岚域    启动！', 4000, 10);
});
</script>