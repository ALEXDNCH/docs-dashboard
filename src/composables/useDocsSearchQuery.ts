import { ref, watch, computed, type Ref } from "vue";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { getDocs } from "@/services/getDocs";
import { debounce } from "@/utils/debounce";
import { wait } from "@/utils/wait";
import { DELAY_FOR_QUERY } from "@/app.config";
import { useDocsStore } from "@/stores/docs.store";
import type { Doc } from "@/types";

export function useDocsSearchQuery(search: Ref<string>, delay = 400) {
  const store = useDocsStore();
  const qc = useQueryClient();

  const debounced = ref("");

  const setDebounced = debounce((v: string) => {
    debounced.value = v;
  }, delay);

  watch(
    search,
    async (v) => {
      await qc.cancelQueries({ queryKey: ["docs"], exact: false });

      qc.removeQueries({ queryKey: ["docs"], exact: false });

      setDebounced(v ?? "");

      if (!v?.trim()) store.clear();
    },
    { immediate: true },
  );

  const queryKey = computed(() => ["docs", debounced.value]);
  const enabled = computed(() => debounced.value.trim().length > 0);

  const query = useQuery<Doc[]>({
    queryKey,
    enabled,
    retry: false,
    queryFn: async ({ signal }) => {
      if (DELAY_FOR_QUERY > 0) await wait(DELAY_FOR_QUERY);
      return getDocs(debounced.value, signal);
    },
  });

  watch(
    () => query.data.value,
    (docs) => {
      if (docs) store.setResults(docs);
    },
    { immediate: true },
  );

  return { debounced, ...query };
}
