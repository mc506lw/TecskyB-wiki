<template>
    <div class="min-h-[80vh] flex flex-col sm:flex-row dark:bg-black transition-colors duration-300 p-4 sm:p-6">
        <!-- 左侧 Wiki 目录 -->
        <div data-aos="fade-right" class="p-4 w-full sm:w-1/4 bg-gray-50 rounded shadow mb-4 sm:mb-0 dbg">
            <Transition name="slide-fade">
                <WikiSidebar :wikiList="wikiList" @select-wiki="loadWikiContent" />
            </Transition>
        </div>

        <!-- 右侧 Wiki 内容 -->
        <div data-aos="fade-left" class="p-4 w-full sm:w-3/4 rounded shadow dbg md:ml-4">
            <!-- 使用 MarkdownViewer 渲染 Markdown 文件内容 -->
            <MarkdownViewer :content="currentWikiContent" class="dw" />
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
        const markdownModules = import.meta.glob("../wiki/*.md", { query: '?raw', import: 'default' });

        const wikiList = [];
        for (const path in markdownModules) {
            const name = path.split("/").pop().replace(".md", "");
            const content = await markdownModules[path]();
            const firstH1 = this.extractFirstH1(content);
            wikiList.push({
                name: firstH1 || name.charAt(0).toUpperCase() + name.slice(1),
                path,
                loadContent: markdownModules[path],
            });
        }

        this.wikiList = wikiList;

        if (wikiList.length > 0) {
            this.loadWikiContent(wikiList[0]);
        }
    },
    methods: {
        async loadWikiContent(item) {
            this.currentWikiContent = await item.loadContent();
        },
        extractFirstH1(markdown) {
            const match = markdown.match(/^# (.+)\n/);
            return match ? match[1].trim() : null;
        },
    },
};
</script>

<style scoped>
/* 针对移动端优化一些基础样式 */
@media (max-width: 640px) {
    .wiki-sidebar {
        width: 100%;
        margin-bottom: 1rem;
    }
}
</style>
