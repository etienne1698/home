<script setup lang="ts">
import { X } from "lucide-vue-next";
import type { ModalInject } from "../types";

interface ModalHeadProps {
  title: string;
  subtitle?: string;
}

defineProps<ModalHeadProps>();

const modalInject = inject<ModalInject>("modal");

function close() {
  modalInject?.close?.();
}
</script>

<template>
  <div class="flex items-start justify-between p-4">
    <HeadingSmall :title="title" :subtitle="subtitle" />
    <ButtonIcon :icon="X" @click="close" shift="right-top" />
  </div>
</template>
