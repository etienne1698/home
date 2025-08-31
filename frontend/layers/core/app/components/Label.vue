<script setup lang="ts">
defineProps<{
  for?: string;
  class?: string;
}>();
</script>

<template>
  <label :for="for" class="block text-sm font-medium text-gray-700" :class>
    <slot />
  </label>
</template>