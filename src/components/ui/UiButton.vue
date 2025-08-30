<script setup lang="ts">
  type TVariant = "primary" | "danger";

  withDefaults(
    defineProps<{
      variant?: TVariant;
    }>(),
    {
      variant: "primary",
    },
  );
</script>

<template>
  <button class="ui-btn" :class="`ui-btn--${variant}`">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .ui-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 14px;
    border-radius: var(--rounded-base);
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition:
      color,
      background-color,
      border-color 0.3s;
    border: 1px solid transparent;
    background: transparent;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &--primary {
      border-color: var(--color-blue);
      color: var(--color-blue);

      &:not(:disabled) {
        &:hover,
        &:focus-visible {
          background-color: var(--color-blue);
          color: var(--color-white);
        }
      }
    }

    &--danger {
      border-color: var(--color-danger);
      color: var(--color-danger);

      &:not(:disabled) {
        &:hover,
        &:focus-visible {
          background-color: var(--color-danger);
          color: var(--color-white);
        }
      }
    }
  }
</style>
