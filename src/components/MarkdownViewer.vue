<template>
  <div class="markdown-body" v-html="renderedMarkdown"></div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "MarkdownViewer",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    renderedMarkdown() {
      // 使用 marked 渲染 Markdown 为 HTML
      return marked(this.content);
    },
  },
};
</script>

<style scoped>
/* Tailwind 风格的 Markdown 渲染样式 */
.markdown-body {
  @apply prose prose-base max-w-none;

  /* 定义明暗模式的背景和文字色 */
  @apply bg-white text-gray-900 dark:bg-[#222] dark:text-white;

  /* 进一步自定义样式 */
  @apply dark:prose-invert; /* 在暗色模式下使用反转样式 */
}
</style>
