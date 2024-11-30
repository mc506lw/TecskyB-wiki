<template>
    <div class="w-1/4 mr-4 bg-white p-4 rounded-lg shadow">
      <h2 class="font-bold mb-4">电压等级进度树</h2>
      <ul>
        <li
          v-for="item in voltages"
          :key="item.name"
          @click="selectVoltage(item)"
          class="mb-4 cursor-pointer p-2 shadow rounded font-bold hover:bg-blue-100"
          :class="{ 'bg-gray-200': item.name === selectedName }"
        >
          {{ item.name }}
          <li class="font-normal">{{ item.value }}</li>
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
      };
    },
    methods: {
      selectVoltage(item) {
        this.selectedName = item.name;
        this.$emit("selectVoltage", item); // 发送选中电压等级给父组件
      },
    },
  };
  </script>
  