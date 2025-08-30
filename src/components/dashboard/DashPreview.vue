<script setup lang="ts">
  import UiImage from "@/components/ui/UiImage.vue";
  import UiButton from "@/components/ui/UiButton.vue";
  import { useDocsStore } from "@/stores/docs.store.ts";
  import { downloadDoc } from "@/utils/file.ts";
  import { unsplash } from "@/utils/unsplash.ts";
  import { computed } from "vue";

  const docsStore = useDocsStore();

  const props = defineProps<{
    image: string | null;
    id: number;
    name: string;
    description: string;
  }>();

  const handleDownload = () => docsStore.selectedDoc && downloadDoc(docsStore.selectedDoc);
  const handleRemove = (id: number) => docsStore.removeById(id);

  const previewSrc = computed(() => (props.image ? unsplash(props.image, 900, 700, 80) : null));
</script>

<template>
  <div class="doc-preview">
    <div class="doc-preview__image">
      <UiImage :src="previewSrc" alt="preview" width="100%" height="100%" />
    </div>

    <div class="doc-preview__info">
      <div class="doc-preview__header">
        <h2 class="doc-preview__title">{{ name }}</h2>

        <div class="doc-preview__actions">
          <UiButton variant="primary" type="button" @click="handleDownload">Скачать</UiButton>
          <UiButton variant="danger" type="button" :disabled="!image" @click="handleRemove(id)"
            >Удалить</UiButton
          >
        </div>
      </div>

      <div class="doc-preview__description">
        <h3>Описание:</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .doc-preview {
    display: flex;
    gap: 30px;
    align-items: flex-start;

    &__image {
      flex: 1;
      width: 100%;
      border: 1px solid var(--color-gray-400);
      border-radius: var(--rounded-base);
      overflow: hidden;
    }

    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__header {
      display: grid;
      gap: 14px;
    }

    &__title {
      font-weight: 600;
      font-size: var(--font-size-base);
    }

    &__actions {
      display: flex;
      gap: 12px;
    }

    &__description {
      display: grid;
      gap: 14px;

      h3 {
        font-weight: 600;
        font-size: var(--font-size-base);
      }

      p {
        color: var(--color-gray-500);
        font-size: var(--font-size-sm);
      }
    }

    @media (max-width: 901px) {
      gap: 30px;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;

      &__info {
        gap: 25px;
      }

      &__image {
        width: 100%;
      }
    }
  }
</style>
