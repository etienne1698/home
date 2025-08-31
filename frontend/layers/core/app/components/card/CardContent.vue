<script setup lang="ts">
export type CardContentProps = {
};

const props = defineProps<CardContentProps>();
</script>

<template>
  <div>
    <slot />
  </div>
</template>
