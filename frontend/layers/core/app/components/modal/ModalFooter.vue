<script setup lang="ts">
interface ModalFooterProps {
}

defineProps<ModalFooterProps>();
</script>

<template>
  <div class="flex items-center justify-end gap-2 p-4">
    <slot />
  </div>
</template>