<script setup lang="ts">
import {ref} from "vue";
import http from "@/utils/httpUtil";

let categories = ref([])
http.get('/labels').then(result => {
  categories.value = result.data
})
</script>

<template>

</template>

<style scoped>

</style>