<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import http from "@/utils/httpUtil";
import { useRoute } from 'vue-router';
import {MdPreview} from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

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
  <h1 class="title">{{ content.title }}</h1>
  <MdPreview editor-id="id" :model-value="content.body"/>
</template>

<style>
.title {
  font-size: 24px;
  font-weight: 500;
  width: fit-content;
  margin: 10px 20px;
  background: linear-gradient(to top, var(--highlight-color) 50%, transparent 50%);
  font-family: Maplestory, serif;
}
</style>