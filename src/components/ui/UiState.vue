<script setup lang="ts">
  type TVariant = "empty" | "error";

  withDefaults(
    defineProps<{
      title: string | Error;
      description?: string | null;
      variant?: TVariant;
    }>(),
    {
      description: null,
      variant: "empty",
    },
  );
</script>

<template>
  <div class="ui-state" :class="variant">
    <p class="ui-state__title">{{ typeof title === "string" ? title : title.message }}</p>
    <p v-if="description" class="ui-state__desc">{{ description }}</p>
    <slot />
  </div>
</template>

<style scoped>
  .ui-state.empty {
    color: var(--color-gray-500);
  }
  .ui-state.error {
    color: var(--color-danger);
  }
  .ui-state__title {
    font-weight: 400;
    font-size: var(--font-size-sm);
  }
  .ui-state__desc {
    margin-top: var(--rounded-md);
  }
</style>
