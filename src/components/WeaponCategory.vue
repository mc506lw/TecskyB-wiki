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
    <!-- 移动端下拉菜单按钮 -->
    <button
      class="block w-full mt-4 bg-blue-500 text-white font-bold py-2 rounded-lg md:hidden lg:hidden xl:hidden"
      @click="toggleMobileMenu"
    >
      {{ mobileMenuOpen ? '收起' : '展开' }}
    </button>
    <!-- 移动端下拉菜单 -->
    <div v-if="mobileMenuOpen" class="bg-white shadow rounded-lg p-4">
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
      mobileMenuOpen: false, // 是否展开移动端下拉菜单
    };
  },
  methods: {
    selectCategory(name) {
      this.selectedCategory = name; // 更新选中的分类
      this.$emit("selectCategory", name); // 向父组件发送选中的分类
      this.mobileMenuOpen = false; // 选择分类后收起下拉菜单
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen; // 切换移动端下拉菜单的展开状态
    },
  },
};
</script>

<style scoped>
/* 移动端样式 */
@media (max-width: 768px) {
  /* 隐藏电脑端的完整菜单 */
  .space-y-4 {
    display: none;
  }
  /* 样式调整 */
  .bg-white {
    border-radius: 0;
  }
  .border {
    border: none;
  }
  .shadow-sm {
    box-shadow: none;
  }
}
</style>