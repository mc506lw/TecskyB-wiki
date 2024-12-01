<template>
  <div class="w-full md:w-1/4 md:min-h-[70vh] bg-white p-4 rounded-lg shadow">
    <h2 class="font-bold mb-4">电压等级进度树</h2>
    <!-- 移动端下拉菜单按钮 -->
    <button
      class="block w-full mb-4 bg-blue-500 text-white font-bold py-2 rounded-lg md:hidden lg:hidden xl:hidden"
      @click="toggleMobileMenu"
    >
      {{ mobileMenuOpen ? '收起' : '展开' }}
    </button>
    <!-- 移动端下拉菜单 -->
    <div v-if="mobileMenuOpen" class="space-y-4">
      <div
        v-for="item in voltages"
        :key="item.name"
        @click="selectVoltage(item)"
        class="cursor-pointer p-2 shadow rounded font-bold hover:bg-blue-100"
        :class="{ 'bg-gray-200': item.name === selectedName }"
      >
        <div>{{ item.name }}</div>
        <div class="font-normal">{{ item.value }}</div>
      </div>
    </div>
    <!-- 电脑端完整菜单 -->
    <ul v-if="!mobileMenuOpen">
      <li
        v-for="item in voltages"
        :key="item.name"
        @click="selectVoltage(item)"
        class="mb-4 cursor-pointer p-2 shadow rounded font-bold hover:bg-blue-100"
        :class="{ 'bg-gray-200': item.name === selectedName }"
      >
        {{ item.name }}
        <div class="font-normal">{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    voltages: Array,
  },
  data() {
    return {
      selectedName: 'LV - 低压', // 用来标记当前选中的电压等级
      mobileMenuOpen: false, // 是否展开移动端下拉菜单
    };
  },
  methods: {
    selectVoltage(item) {
      this.selectedName = item.name;
      this.$emit("selectVoltage", item); // 发送选中电压等级给父组件
      this.mobileMenuOpen = false; // 选择电压等级后收起下拉菜单
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
  ul {
    display: none;
  }
  /* 样式调整 */
  .bg-white {
    border-radius: 0;
  }
  .border {
    border: none;
  }
  .shadow {
    box-shadow: none;
  }
}
</style>