<script setup lang="ts">
  import DashTitle from "@/components/dashboard/DashTitle.vue";
  import DashUsername from "@/components/dashboard/DashUsername.vue";
  import UiContainer from "@/components/ui/UiContainer.vue";
</script>

<template>
  <header class="dash-header">
    <UiContainer>
      <div class="dash-header__inner">
        <DashTitle />
        <DashUsername />
      </div>
    </UiContainer>
  </header>
</template>

<style scoped>
  .dash-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
