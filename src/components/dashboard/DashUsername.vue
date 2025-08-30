<script setup lang="ts">
  import type { TDashboardUsername } from "@/types";

  withDefaults(defineProps<{ userName?: TDashboardUsername }>(), {
    userName: "Username",
  });
</script>

<template>
  <h2 class="dash-username">{{ userName }}</h2>
</template>

<style scoped>
  .dash-username {
    font-size: var(--font-size-base);
    font-weight: 400;
    color: var(--color-black);
  }
</style>
