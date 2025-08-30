<script setup lang="ts">
  withDefaults(
    defineProps<{
      message?: string;
      size?: string;
    }>(),
    {
      message: "",
      size: "40px",
    },
  );
</script>

<template>
  <section class="ui-loader">
    <svg class="ui-loader__spinner" :width="size" :height="size" viewBox="0 0 50 50">
      <circle class="ui-loader__path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
    </svg>
    <p v-if="message" class="ui-loader__message">{{ message }}</p>
  </section>
</template>

<style scoped lang="scss">
  .ui-loader {
    text-align: center;

    &__spinner {
      animation: spin 1s linear infinite;
    }

    &__message {
      font-size: var(--font-size-sm);
      color: var(--color-gray-500);
    }

    &__path {
      stroke: var(--color-blue);
      stroke-linecap: round;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }
</style>
