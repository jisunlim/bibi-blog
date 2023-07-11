<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import type { Ref, ComputedRef } from 'vue'
import http from "@/utils/httpUtil";
import {useRoute} from "vue-router";

const route = useRoute();
const category: ComputedRef<string | string[]> = computed(() => route.params.name);

let contentList: Ref<{ id: number, title: string }[]> = ref([]);
const getContentList = (category: string | string[]) => {
  http.get('/issues?labels=' + category).then(result => {
    contentList.value = []
    result.data.forEach((el: { number: number, title: string }) => {
      contentList.value.push({id: el.number, title: el.title})
    })
  })
}

watch(category, async (category) => getContentList(category));
onMounted(() => getContentList(category.value));
</script>

<template>
<!-- TODO: UI 개발 -->
<!-- TODO: title 클릭 시 content로 이동 -->
<div v-for="content in contentList">
  {{ content.title }}
</div>
</template>

<style scoped>

</style>