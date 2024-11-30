<template>
  <div class="bg-white shadow rounded-lg p-4">
    <div class="text-xl font-bold mb-4">武器分类</div>
    <div class="space-y-4">
      <div
        v-for="category in categories"
        :key="category.name"
        class="border rounded-lg p-4 shadow-sm cursor-pointer"
        :class="{ 'bg-gray-200': selectedCategory === category.name }"
        @click="selectCategory(category.name)"
      >
        <div class="font-semibold">{{ category.name }}</div>
        <div class="text-gray-500">{{ category.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array, // 传入的武器分类列表
  },
  data() {
    return {
      selectedCategory: '全部武器', // 当前选中的分类
    };
  },
  methods: {
    selectCategory(name) {
      this.selectedCategory = name; // 更新选中的分类
      this.$emit("selectCategory", name); // 向父组件发送选中的分类
    },
  },
};
</script>

<style scoped></style>
