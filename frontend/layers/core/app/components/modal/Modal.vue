<script setup lang="ts">
interface ModalProps {}

defineProps<ModalProps>();

const open = defineModel<boolean>("open", { default: false });
const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => {
  emit("close");
  open.value = false;
};

provide("modal", {
  close,
});
</script>

<template>
  <Teleport to="body" v-if="open">
    <div
      class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center overflow-hidden h-screen w-screen top-0 left-0"
      @click="close"
    />
    <div
      class="bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-md:w-11/12 md:min-w-[300px]"
    >
      <slot />
    </div>
  </Teleport>
</template>
