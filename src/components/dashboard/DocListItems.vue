<script setup lang="ts">
  import DocListItem from "@/components/dashboard/DocListItem.vue";
  import type { Doc } from "@/types";
  import { useDocsStore } from "@/stores/docs.store.ts";

  const docsStore = useDocsStore();
  defineProps<{
    data: Doc[];
  }>();

  const handleClick = (id: number) => {
    docsStore.selectById(id);
  };
</script>
<template>
  <section class="doc-list">
    <DocListItem
      v-for="doc in data"
      :id="doc.id"
      :key="doc.id"
      v-memo="[docsStore.selectedId === doc.id]"
      :image="doc.image"
      :size="doc.sizeLabel"
      :name="doc.name"
      :active="docsStore.selectedId === doc.id"
      @select="handleClick(doc.id)"
    />
  </section>
</template>

<style scoped>
  .doc-list {
    display: grid;
    gap: 18px;
  }
</style>
