<script setup lang="ts">
type HeadingProps = {
  title: string;
  subtitle?: string;
};

defineProps<HeadingProps>();
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-sm text-gray-500">{{ subtitle }}</p>
  </div>
</template>
