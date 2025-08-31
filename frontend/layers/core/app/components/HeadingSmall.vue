<script setup lang="ts">
type HeadingSmallProps = {
  title: string;
  subtitle?: string;
};

defineProps<HeadingSmallProps>();
</script>

<template>
  <div>
    <h1 class="text-lg font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-sm text-gray-500">{{ subtitle }}</p>
  </div>
</template>
