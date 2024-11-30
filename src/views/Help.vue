<template>
    <div class="min-h-[80vh] flex mx-8 p-6">
        <!-- 左侧 Wiki 目录 -->
        <div data-aos="fade-right" class="p-4 w-1/6 bg-gray-50 rounded shadow">
            <Transition name="slide-fade">
                <WikiSidebar :wikiList="wikiList" @select-wiki="loadWikiContent" />
            </Transition>
        </div>

        <!-- 右侧 Wiki 内容 -->
        <div data-aos="fade-left" class="p-4 w-5/6 rounded shadow ml-4">
            <Transition name="slide-fade">
                <!-- 使用 MarkdownViewer 渲染 Markdown 文件内容 -->
                <MarkdownViewer :content="currentWikiContent" />
            </Transition>
        </div>
    </div>
</template>

<script>
import WikiSidebar from "../components/WikiSidebar.vue";
import MarkdownViewer from "../components/MarkdownViewer.vue";

export default {
    name: "Wiki",
    components: {
        WikiSidebar,
        MarkdownViewer,
    },
    data() {
        return {
            wikiList: [], // 动态生成的目录列表
            currentWikiContent: "", // 当前选中的 Markdown 内容
        };
    },
    async created() {
        // 使用 import.meta.glob 动态加载 Markdown 文件
        const markdownModules = import.meta.glob("../wiki/*.md", { query: '?raw', import: 'default' });

        // 生成目录列表
        const wikiList = [];
        for (const path in markdownModules) {
            const name = path.split("/").pop().replace(".md", "");
            const content = await markdownModules[path]();
            const firstH1 = this.extractFirstH1(content);
            wikiList.push({
                name: firstH1 || name.charAt(0).toUpperCase() + name.slice(1), // 使用第一个 h1 标题或文件名
                path,
                loadContent: markdownModules[path],
            });
        }

        this.wikiList = wikiList;

        // 加载第一个文件的内容
        if (wikiList.length > 0) {
            this.loadWikiContent(wikiList[0]);
        }
    },
    methods: {
        async loadWikiContent(item) {
            // 加载选中文件的内容
            this.currentWikiContent = await item.loadContent();
        },
        extractFirstH1(markdown) {
            const match = markdown.match(/^# (.+)\n/);
            return match ? match[1].trim() : null;
        },
    },
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}

.slide-fade-enter-to,
.slide-fade-leave {
  transform: translateX(100%);
}


</style>