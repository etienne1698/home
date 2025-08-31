<template>
  <button
    class="relative overflow-hidden items-center gap-2 text-sm cursor-pointer inline-flex font-semibold transition-colors duration-150 rounded-md"
    :class="{
      'text-blue-500 hover:bg-blue-500/10': variant === 'primary',
      'text-gray-500 hover:bg-gray-500/10': !variant,
      'text-blue-500 hover:text-blue-600 hover:underline': variant === 'link',
      'px-2 py-1': variant !== 'link',
    }"
    :type
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "link";
};

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
});
</script>
