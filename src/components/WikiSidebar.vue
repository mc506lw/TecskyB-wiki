<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Wiki 目录</h2>
      <ul class="space-y-2">
        <li
          v-for="(item, index) in wikiList"
          :key="index"
          class="text-gray-500 hover:underline cursor-pointer icon icon-dian"
          @click="selectWiki(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "WikiSidebar",
  props: {
    wikiList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectWiki(item) {
      this.$emit("select-wiki", item);
    },
  },
};
</script>