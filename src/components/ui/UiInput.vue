<script setup lang="ts">
  withDefaults(
    defineProps<{
      modelValue?: string;
      placeholder?: string;
      type?: string;
    }>(),
    {
      type: "text",
      modelValue: "",
      placeholder: "Введите ID документа",
    },
  );

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  function onInput(e: Event) {
    emit("update:modelValue", (e.target as HTMLInputElement).value);
  }
</script>

<template>
  <input
    class="ui-input"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>

<style scoped lang="scss">
  .ui-input {
    width: 100%;
    height: 40px;
    padding: 16px 24px;
    border: 1.5px solid var(--color-gray-300);
    border-radius: var(--rounded-base);
    outline: none;
    background: var(--color-white);
    font-size: var(--font-size-sm);
    transition: border-color 0.15s;

    &:focus {
      border-color: var(--color-blue);
    }
  }
</style>
