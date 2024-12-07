<template>
  <div class="min-h-[80vh] flex flex-col md:flex-row items-center p-4 sm:p-6 dark:bg-black transition-colors duration-300">
    <!-- 左侧列表 -->
    <VoltageProgressTree data-aos="fade-right" :voltages="voltages" @selectVoltage="selectedVoltage = $event"
      class="w-full md:w-1/2 md:h-[80vh] p-2" />

    <!-- 右侧内容 -->
    <div data-aos="fade-left" class="flex-1 bg-white p-2 rounded-lg shadow w-full md:h-[80vh] ml-4 overflow-x-auto dbg">
      <h2 class="font-bold text-4xl mb-4 dw">{{ selectedVoltage.name }} 阶段攻略</h2>
      <div v-if="selectedVoltage">
        <!-- 所需材料 -->
        <h3 class="font-bold mb-2 dw">主要技术</h3>
        <ul class="list-disc pl-5 mb-4 dw">
          <li v-for="item in selectedVoltage.materials" :key="item">{{ item }}</li>
        </ul>

        <!-- 关键配方 -->
        <h3 class="font-bold mb-2 dw">关键科技</h3>
        <div class="flex flex-wrap my-2 space-x-4" v-for="recipe in selectedVoltage.recipes" :key="recipe.name">
          <div class="w-full md:w-1/2 p-4 border rounded-lg shadow-sm bg-white dbg1">
            <div class="flex items-center space-x-4">
              <img :src="recipe.image" class="object-cover h-16 w-16">
              <div>
                <h2 class="font-bold dw">{{ recipe.name }}</h2>
                <p class="text-gray-600 dw">{{ recipe.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TACZ武器 -->
        <h3 class="font-bold mb-2 dw">可制作的TACZ武器</h3>
        <div class="flex flex-wrap my-2 space-x-4" v-for="weapon in selectedVoltage.weapons" :key="weapon.name">
          <div class="w-full md:w-1/2 p-4 border rounded-lg shadow-sm bg-white dbg1">
            <div class="flex items-center space-x-4">
              <img :src="weapon.image" class="object-cover h-16 w-16">
              <div>
                <h2 class="font-bold dw">{{ weapon.name }}</h2>
                <p class="text-gray-600 dw">{{ weapon.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoltageProgressTree from "../components/VoltageProgressTree.vue";

export default {
  components: { VoltageProgressTree },
  data() {
    return {
      selectedVoltage: {
        name: '蒸汽时代',
        materials: ['熟铁电路板 x8', '钢锭 x4', '锡合金线 x16', '蒸汽动力锯', '基础压缩机'],
        recipes: [
          {
            name: '紫砂电路板',
            description: '铜板 + 红石 + 电路板',
            image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
          },
        ],
        weapons: [
          {
            name: 'AK-47',
            description: 'AK-47枪身 + 弹夹 + ？',
            image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
          },
          {
            name: 'RPG-7',
            description: 'RPG-7枪身 + 炮弹 + ？',
            image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
          },
        ],
      },
      voltages: [
        {
          name: '蒸汽时代',
          value: '没电',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'LV - 低压',
          value: '32 EU/t',
          materials: ['熟铁电路板 x8', '钢锭 x4', '锡合金线 x16', '蒸汽动力锯', '基础压缩机'],
          recipes: [
            {
              name: '紫砂电路板',
              description: '铜板 + 红石 + 电路板',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: 'AK-47',
              description: 'AK-47枪身 + 弹夹 + ？',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
            {
              name: 'RPG-7',
              description: 'RPG-7枪身 + 炮弹 + ？',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
            {
              name: 'AK-47',
              description: 'AK-47枪身 + 弹夹 + ？',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
            {
              name: 'RPG-7',
              description: 'RPG-7枪身 + 炮弹 + ？',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'MV - 中压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
            {
              name: '狙击枪',
              description: '狙击枪身 + 瞄准镜 + 枪托',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'HV - 高压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'EV - 超高压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'IV - 超导压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'LUV - 剧差压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'ZPM - 零点压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
        {
          name: 'UV - 极限压',
          value: '128 EU/t',
          materials: ['钢电路板 x10', '高压线缆 x5', '锂电池'],
          recipes: [
            {
              name: '高压电池',
              description: '钢板 + 锂电芯',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
          weapons: [
            {
              name: '手枪',
              description: '手枪零件 + 枪膛',
              image: 'https://www.idcd.com/tool/placeholder/300x300?text=300x300',
            },
          ],
        },
      ],
    };
  },
};
</script>