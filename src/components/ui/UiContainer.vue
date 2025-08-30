<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string;
    }>(),
    {
      tag: "div",
    },
  );
</script>

<template>
  <component :is="tag" class="app-container">
    <slot />
  </component>
</template>

<style>
  .app-container {
    width: 100%;
    max-width: 1260px;
    margin-inline: auto;
    padding-inline: 20px;
  }

  @media (max-width: 567px) {
    .app-container {
      padding-inline: 10px;
    }
  }
</style>
