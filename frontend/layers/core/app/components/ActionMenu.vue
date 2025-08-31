<script setup lang="ts">
import type { Action } from "./types";
import type { Placement } from "@floating-ui/vue";

interface ActionMenuProps {
  actions: Action[];
  placement: Placement;
  fullWidth?: boolean;
}

withDefaults(defineProps<ActionMenuProps>(), {});

const isOpen = defineModel<boolean>("open", { default: false });

const handleSelect = (action: Action) => {
  action.action();
  isOpen.value = false;
};
</script>

<template>
  <Menu :placement="placement" :full-width="fullWidth" v-model:open="isOpen">
    <template #trigger>
      <slot />
    </template>
    <template #content>
      <div class="flex flex-col text-sm p-1 text-black">
        <div
          v-for="action of actions"
          :key="action.title"
          class="selectable"
          @click="handleSelect(action)"
          :class="[{ 'text-red-700': action.destructive }, 'flex items-center gap-2 p-1 rounded-xs']"
        >
          <component :is="action.icon" class="w-4 h-4" />
          {{ action.title }}
        </div>
      </div>
    </template>
  </Menu>
</template>
