<template>
  <button
    class="relative overflow-hidden items-center gap-2 text-sm cursor-pointer flex justify-center py-2 px-4 rounded-2xl transition-colors duration-200"
    :class="{
      'hover:bg-blue-700 bg-blue-600 active:bg-blue-600 text-white':
        variant === 'primary',
      'hover:bg-gray-400': !variant,
    }"
    :type
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  type?: "submit" | "button" | "reset";
  variant?: "primary";
};

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
});
</script>

<style>
/* .btn-ripple {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
} */
</style>
