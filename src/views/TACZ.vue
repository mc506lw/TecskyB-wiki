<template>
    <div class="min-h-[80vh] flex mx-8 p-6">
      <!-- 左侧菜单 -->
      <div data-aos="fade-right" class="p-4 w-1/4">
        <WeaponCategory
          :categories="categories"
          @selectCategory="handleCategorySelect"
        />
      </div>
  
      <!-- 右侧内容 -->
      <div data-aos="fade-left" class="p-4 w-3/4">
        <WeaponGrid :weapons="filteredWeapons" />
      </div>
    </div>
</template>
  
<script>
import WeaponCategory from "../components/WeaponCategory.vue";
import WeaponGrid from "../components/WeaponGrid.vue";

export default {
    components: {
        WeaponCategory,
        WeaponGrid,
    },
    data() {
        return {
            selectedCategory: "全部武器", // 默认选中的分类
            categories: [
                { name: "全部武器", description: "显示所有武器" },
                { name: "近战武器", description: "能量剑、等离子剑等" },
                { name: "远程武器", description: "电击枪、激光枪等" },
                { name: "重型武器", description: "导弹发射器、能量炮等" },
                { name: "特殊武器", description: "重力枪、传送枪等" },
            ],
            weapons: [
                {
                    name: "基础能量剑",
                    description: "LV阶段近战武器",
                    image: "https://www.idcd.com/tool/placeholder/600x300?text=600x300",
                    category: "近战武器",
                    damage: 8,
                    attackSpeed: 1.6,
                    chargeRate: "2EU/t",
                    maxEnergy: "10000EU",
                    materials: ["基础电路板 x2", "铁剑", "铜线圈 x1", "电池 x1"],
                },
                {
                    name: "激光枪",
                    description: "MV阶段远程武器",
                    image: "https://www.idcd.com/tool/placeholder/600x300?text=600x300",
                    category: "远程武器",
                    damage: 12,
                    attackSpeed: 1.2,
                    chargeRate: "5EU/t",
                    maxEnergy: "20000EU",
                    materials: ["高级电路板 x1", "光学镜头 x2", "能量管 x1"],
                },
                // 更多武器...
            ],
        };
    },
    computed: {
        filteredWeapons() {
            // 根据选中的分类过滤武器
            if (this.selectedCategory === "全部武器") {
                return this.weapons; // 如果选中“全部武器”，返回所有武器
            }
            return this.weapons.filter(
                (weapon) => weapon.category === this.selectedCategory
            );
        },
    },
    methods: {
        handleCategorySelect(category) {
            this.selectedCategory = category; // 更新选中的分类
        },
    },
};
</script>
  
<style scoped></style>
