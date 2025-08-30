<script setup lang="ts">
  import UiInput from "@/components/ui/UiInput.vue";
  import UiContainer from "@/components/ui/UiContainer.vue";
  import { useDocsStore } from "@/stores/docs.store.ts";
  import { useDocsSearchQuery } from "@/composables/useDocsSearchQuery";
  import UiLoader from "@/components/ui/UiLoader.vue";
  import UiState from "@/components/ui/UiState.vue";
  import DocListItems from "@/components/dashboard/DocListItems.vue";
  import { storeToRefs } from "pinia";
  import { computed } from "vue";
  import DashPreview from "@/components/dashboard/DashPreview.vue";

  const docsStore = useDocsStore();
  const { inputSearchValue, selectedDoc } = storeToRefs(docsStore);

  const { data, isLoading, isError, error } = useDocsSearchQuery(inputSearchValue, 400);

  const errorTitle = computed(() => (error.value as Error)?.message ?? "Неизвестная ошибка");
</script>

<template>
  <UiContainer class="mt-35">
    <section class="dash">
      <div class="dash__inner">
        <aside class="dash__sidebar">
          <section class="dash__group dash__group--search">
            <h3 class="dash__title">Поиск документа</h3>
            <UiInput v-model="inputSearchValue" placeholder="Введите ID документа" />
          </section>

          <section class="dash__group dash__group--results">
            <h3 class="dash__title sticky">Результаты</h3>
            <UiLoader v-if="isLoading" size="20px" message="Загружаем документы..." />

            <UiState v-else-if="isError" :title="errorTitle" variant="error" />
            <UiState v-else-if="!data?.length" title="Ничего не найдено" />
            <DocListItems v-else :data="docsStore.results" />
          </section>
        </aside>

        <div class="dash__divider" />

        <section class="dash__preview">
          <div v-if="!selectedDoc" class="empty">
            <UiState title="Выберите документ, чтобы посмотреть его содержимое" />
          </div>
          <DashPreview
            v-else
            :id="selectedDoc.id"
            :image="selectedDoc.image"
            :name="selectedDoc.name"
            :description="selectedDoc.description"
          />
        </section>
      </div>
    </section>
  </UiContainer>
</template>

<style scoped lang="scss">
  .dash {
    background: var(--color-gray-100);
    border-radius: var(--rounded-md);
    box-shadow: var(--box-shadow-base);

    &__inner {
      min-height: var(--height-dashboard);
      display: flex;
      align-items: stretch;
    }

    &__sidebar {
      display: flex;
      flex: 0 0 280px;
      flex-direction: column;
    }

    &__divider {
      width: 1px;
      background: var(--color-gray-400);
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: 14px;

      &--search {
        padding-inline: 20px;
        margin-top: 27px;
      }

      &--results {
        padding-inline: 20px;
        padding-bottom: 27px;
        margin-top: 27px;
        max-height: var(--height-dashboard);
        overflow-y: auto;
      }
    }

    &__preview {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex: 1;
      padding: 30px;

      .empty {
        margin: auto;
        text-align: center;
      }
    }

    &__title {
      font-weight: 600;
      background: var(--color-gray-100);
      z-index: 1;
      padding-block: 6px;

      &.sticky {
        position: sticky;
        top: 0;
      }
    }

    @media (max-width: 991px) {
      &__sidebar {
        flex: initial;
      }

      &__inner {
        display: flex;
        flex-direction: column;
      }

      &__divider {
        height: 1px;
        width: initial;
      }

      &__preview {
        place-items: start;
        padding: 20px;
        flex: auto;
      }
    }
  }
</style>
