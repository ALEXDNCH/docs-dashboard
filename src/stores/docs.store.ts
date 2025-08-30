import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Doc } from "@/types";

export const useDocsStore = defineStore("docs", () => {
  const inputSearchValue = ref("");
  const results = ref<Doc[]>([]);
  const selectedId = ref<number | null>(null);

  function setResults(list: Doc[]) {
    results.value = list;
  }

  function clear() {
    results.value = [];
    selectedId.value = null;
  }

  function selectById(id: number | null) {
    selectedId.value = id;
  }
  function select(doc: Doc | null) {
    selectedId.value = doc?.id ?? null;
  }

  function removeById(id: number) {
    results.value = results.value.filter((d) => d.id !== id);
    if (selectedId.value === id) selectedId.value = null;
    if (results.value.length === 0) {
      inputSearchValue.value = "";
    }
  }

  const selectedDoc = computed<Doc | null>(
    () => results.value.find((d) => d.id === selectedId.value) ?? null,
  );

  return {
    inputSearchValue,
    results,
    selectedId,
    selectedDoc,
    setResults,
    clear,
    selectById,
    select,
    removeById,
  };
});
