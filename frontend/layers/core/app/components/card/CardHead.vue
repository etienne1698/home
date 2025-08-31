<script setup lang="ts">
export type CardHeadProps = {
  title: string;
  subtitle: string;
};

const props = defineProps<CardHeadProps>();
</script>

<template>
  <div class="pb-4">
    <h1 class="text-2xl font-bold">{{ props.title }}</h1>
    <p class="text-sm text-gray-500">{{ props.subtitle }}</p>
  </div>
</template>
