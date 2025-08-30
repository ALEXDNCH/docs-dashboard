<script setup lang="ts">
  import UiImage from "@/components/ui/UiImage.vue";
  import { unsplash } from "@/utils/unsplash.ts";

  defineProps<{
    name: string;
    id: number;
    size: string;
    active?: boolean;
    image: string | null;
  }>();

  const emit = defineEmits<{
    (e: "select", id: number): void;
  }>();
</script>

<template>
  <button
    class="doc-item"
    :class="{ 'doc-item--active': active }"
    type="button"
    @click="emit('select', id)"
  >
    <UiImage :src="unsplash(image, 500, 500, 80)" width="70px" height="70px" alt="preview" />

    <span class="doc-item__about">
      <span class="doc-item__title">{{ name }}</span>
      <span v-if="size" class="doc-item__size">{{ size }}</span>
    </span>
  </button>
</template>

<style scoped lang="scss">
  .doc-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    border-radius: var(--rounded-md);
    background: var(--color-white);
    box-shadow: var(--box-shadow-base);
    cursor: pointer;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      background-color 0.3s linear;
    will-change: transform;

    &__about {
      position: relative;
      padding-inline: 15px;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      justify-content: center;
      height: 100%;
      gap: 6px;
      font-size: var(--font-size-sm);

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background: var(--color-gray-400);
        opacity: 1;
        transition: opacity 0.15s linear;
      }
    }

    &:hover {
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid color-mix(in oklab, var(--color-blue) 50%, transparent);
      outline-offset: 2px;
      background-color: var(--color-blue-hover);

      .doc-item__about::before {
        opacity: 0;
      }
      .doc-item__title {
        color: #f8f9fa;
      }
      .doc-item__size {
        color: #dee2e6;
      }
    }

    &--active {
      background-color: var(--color-blue);

      .doc-item__about::before {
        opacity: 0;
      }
      .doc-item__title {
        color: #f8f9fa;
      }
      .doc-item__size {
        color: #dee2e6;
      }
    }

    &__title {
      font-weight: 600;
      color: var(--color-dark-100);
      transition: color 0.15s linear;
    }

    &__size {
      color: var(--color-gray-500);
      text-transform: uppercase;
      transition: color 0.15s linear;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .doc-item {
      transition: none;
      transform: none !important;

      &__about::before,
      &__title,
      &__size {
        transition: none;
      }
    }
  }
</style>
