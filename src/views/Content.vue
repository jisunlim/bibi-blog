<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import http from "@/utils/httpUtil";
import { useRoute } from 'vue-router';
import Milkdown from '../components/MilkdownEditor.vue';
import { MilkdownProvider } from '@milkdown/vue';

const route = useRoute();
const id = computed(() => route.params.id);

let content = ref({ title: '', body: '', label: '' });

const getContent = (id: string | string[]) => {
  http.get('/issues/' + id).then(result => {
    content.value.title = result.data['title']
    content.value.body = result.data['body']
    content.value.label = result.data['labels'][0]['name']
  });
}

watch(id, async (id) => getContent(id));

onMounted(() => getContent(id.value));
</script>

<template>
  <h1>{{ content.title }}</h1>

  <MilkdownProvider>
    <Milkdown :content="content.body"/>
  </MilkdownProvider>

  <div>{{ content.label }}</div>
</template>

<style scoped>

</style>