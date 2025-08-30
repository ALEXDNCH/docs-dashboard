<script setup lang="ts">
  import type { TDashboardAppName } from "@/types";

  withDefaults(defineProps<{ appName?: TDashboardAppName }>(), {
    appName: "MyApp",
  });
</script>

<template>
  <h2 class="dash-title">{{ appName }}</h2>
</template>

<style scoped>
  .dash-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
  }
</style>
