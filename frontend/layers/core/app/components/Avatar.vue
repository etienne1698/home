<template>
  <div
    class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
    :class="{ selectable }"
    :tabindex="selectable ? 0 : undefined"
    @keypress.enter="handlePressEnter"
  >
    <img v-if="src" :src="src" alt="avatar" class="w-full h-full rounded-full" />
    <slot />
  </div>
</template>

<script setup lang="ts">
type AvatarProps = {
  src?: string;
  selectable?: boolean;
};

defineProps<AvatarProps>();

const handlePressEnter = (event: KeyboardEvent) => {
  (event.target as HTMLElement).click();
};
</script>
