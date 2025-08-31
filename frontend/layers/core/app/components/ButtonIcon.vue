<script lang="ts">
const shiftClass = {
  left: "translate-x-[-8px]",
  "left-top": "translate-x-[-8px] translate-y-[-8px]",
  "left-bottom": "translate-x-[-8px] translate-y-[8px]",
  right: "translate-x-[8px]",
  "right-top": "translate-x-[8px] translate-y-[-8px]",
  "right-bottom": "translate-x-[8px] translate-y-[8px]",
  all: "translate-x-[-8px] translate-y-[-8px] translate-x-[8px] translate-y-[8px]",
  none: "",
};
</script>

<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next";

interface ButtonIconProps {
  icon: LucideIcon;
  shift?:
    | "none"
    | "all"
    | "left"
    | "right"
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom";
}

withDefaults(defineProps<ButtonIconProps>(), {
  shift: "none",
});
</script>

<template>
  <button
    class="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-background-color duration-150"
    :class="[shiftClass[shift]]"
  >
    <component :is="icon" class="w-4 h-4" />
  </button>
</template>
