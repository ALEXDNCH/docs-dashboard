<script setup lang="ts">
  import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
  import DashHeader from "@/components/dashboard/DashHeader.vue";
</script>

<template>
  <main class="super-wrapper">
    <DashHeader />
    <DashboardLayout />
  </main>
</template>

<style scoped>
  .super-wrapper {
    padding-block: 40px;
    min-height: 100dvh;
  }
</style>
