<script setup lang="ts">
import {ref} from "vue";
import http from "@/utils/httpUtil";

const greeting = '안녕하세요. 비비입니다 :)'
const activeName = ref('')

const categoryGroup = [
  { type: 'danger', name: 'Security' },
  { type: '', name: 'Develop' },
  { type: 'warning', name: 'ETC' }
]

let categories = ref([])
http.get('/labels').then(result => {
  categories.value = result.data
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
        <el-tag :type="group.type" effect="plain" round>{{ group.name }}</el-tag>
        <div v-for="category in categories.filter(el => el.description.startsWith('[' + group.name + ']'))">
          <div :class="['category', { 'active': activeName === category.name }]" @click="activeName = category.name">
            {{ category.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <div style="text-align: center; color: #a1a1a1; margin-bottom: 20px">
      © bibi 2023
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
