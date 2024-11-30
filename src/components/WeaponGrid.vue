<template>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="weapon in weapons"
        :key="weapon.name"
        class="bg-white shadow rounded-lg p-4"
      >
        <div class="flex items-center p-4">
          <img
            :src="weapon.image"
            class="w-32 h-32 object-cover rounded-lg"
          />
          <div class="ml-4">
            <h2 class="text-lg font-bold">{{ weapon.name }}</h2>
            <p class="text-sm text-gray-500">{{ weapon.description }}</p>
          </div>
        </div>
        <div class="p-4">
          <p class="font-bold mb-2">基础属性</p>
          <div class="flex gap-8 mb-2">
            <div>伤害: {{ weapon.damage }}</div>
            <div>攻速: {{ weapon.attackSpeed }}</div>
          </div>
          <div class="flex gap-8 mb-2">
            <div>充能速度: {{ weapon.chargeRate }}</div>
            <div>最大能量: {{ weapon.maxEnergy }}</div>
          </div>
          <p class="font-bold mb-2">制作材料</p>
          <ul class="list-disc list-inside">
            <li v-for="material in weapon.materials" :key="material">
              {{ material }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      weapons: Array, // 传入的武器列表
    },
  };
  </script>
  
  <style scoped></style>
  