<script setup lang="ts">
import { watch } from 'vue';
import { Milkdown, useEditor } from '@milkdown/vue';
import { replaceAll } from '@milkdown/utils';
import { Editor, rootCtx, editorViewOptionsCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord'
import { commonmark } from '@milkdown/preset-commonmark'

const props = defineProps({
  content: { type: String, required: true }
})

const { get } = useEditor((root) => {
  return Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root)
        ctx.set(editorViewOptionsCtx, { editable: () => false })
      })
      .use(commonmark)
})

watch(() => props.content, (first, second) => {
  let editor = get();
  editor?.action(replaceAll(props.content));
});
</script>

<template>
  <Milkdown />
</template>
