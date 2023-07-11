<script setup lang="ts">
import {ref} from "vue";
import type { Ref } from 'vue'
import http from "@/utils/httpUtil";

const greeting = '안녕하세요. 비비입니다 :)';
const activeName = ref('');

let categoryGroup: Ref<string[]> = ref([]);
let categories = ref([]);

function getCategoryGroup(labels: [{description: string}]) {
  let labelSet = new Set<string>();

  labels.forEach(label => {
    const regex = /^\[.*\]/g;
    const description = label.description.match(regex);
    if (description)
      labelSet.add(description[0].slice(1, -1));
  })
  return Array.from(labelSet).sort((a: string, b: string) => { return a === 'ETC' ? 1 : -1 });
}

http.get('/labels').then(result => {
  categories.value = result.data;
  categoryGroup.value = getCategoryGroup(result.data);
})
</script>

<template>
  <div class="content">
    <div>
      <!-- profile -->
      <div style="text-align: center; margin-top: 50px">
        <img src="@/assets/image/profile.png" alt="profile" class="profile"/>
      </div>

      <!-- name & greeting -->
      <div style="text-align: center; margin-top: 10px">
        <div style="font-size: 16px">
          <img src="@/assets/image/foot.png" alt="foot-icon" class="foot-icon"/>
          BiBi
          <img src="@/assets/image/foot.png" alt="foot-icon" class="foot-icon"/>
        </div>
        <div style="color: var(--sub-content)">{{ greeting }}</div>
      </div>

      <!-- category -->
      <div v-for="group in categoryGroup" style="text-align: center; margin-top: 20px">
        <el-tag type="danger" effect="plain" round>{{ group }}</el-tag>
        <div v-for="category in categories.filter(el => el.description.startsWith('[' + group + ']'))">
          <div :class="['category', { 'active': activeName === category.name }]" @click="activeName = category.name">
            {{ category.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <div style="text-align: center; color: #a1a1a1; margin-bottom: 20px">
      Copyright 2023. bibi
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Maplestory,serif;
  height: 100%
}

.profile {
  height: 100px;
  width: 100px;
  border-radius: 100%;
}

.foot-icon {
  height: 10px;
  width: 10px;
  filter: opacity(0.6);
}

.category {
  margin-top: 5px;
  font-size: 13px;
  color: var(--sub-content);
  cursor: pointer;
}

.active, .category:hover {
  color: var(--main-content);
}
</style>
