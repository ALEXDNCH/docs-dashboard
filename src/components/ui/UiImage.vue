<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import fallbackImg from "@/assets/images/thumb.svg";

  const props = withDefaults(
    defineProps<{
      src: string | null;
      alt?: string;
      width?: number | string;
      height?: number | string;
      loading?: "eager" | "lazy";
      decoding?: "sync" | "async" | "auto";
      fetchPriority?: "high" | "low" | "auto";
      aspectRatio?: string | number;
      objectFit?: "cover" | "contain";
    }>(),
    {
      src: "",
      alt: "image",
      width: "",
      height: "",
      loading: "lazy",
      decoding: "async",
      fetchPriority: "auto",
      aspectRatio: "",
      objectFit: "cover",
    },
  );

  const errored = ref(false);
  watch(
    () => props.src,
    () => (errored.value = false),
  );

  const isFallback = computed(() => !props.src || errored.value);
  const resolvedSrc = computed(() => (isFallback.value ? fallbackImg : props.src!));

  const toCss = (v?: number | string) =>
    v == null ? undefined : typeof v === "number" ? `${v}px` : v;

  const styleObj = computed(() => ({
    width: props.width != null ? toCss(props.width) : "100%",
    height: props.height != null ? toCss(props.height) : "100%",
    aspectRatio: props.aspectRatio ? String(props.aspectRatio) : undefined,
    objectFit: props.objectFit,
  }));

  function onError() {
    if (!errored.value) errored.value = true;
  }
</script>

<template>
  <img
    :src="resolvedSrc"
    :alt="alt"
    :loading="loading"
    :decoding="decoding"
    :fetchpriority="fetchPriority"
    :style="styleObj"
    @error="onError"
  />
</template>

<style scoped>
  img {
    display: block;
    background-color: var(--color-gray-200);
    object-fit: contain;
  }
</style>
