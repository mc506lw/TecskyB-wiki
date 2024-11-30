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
  
  <style>
  /* Markdown 渲染样式 */
  .markdown-body {
    @apply prose prose-base max-w-none;
  }
  </style>
  