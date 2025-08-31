<script setup lang="ts">
const { data, result, isOpen } = useConfirmData();

function handleConfirm() {
  result.value = true;
  isOpen.value = false;
}
function handleCancel() {
  result.value = false;
  isOpen.value = false;
}

function sanitizeContent(html?: string) {
  if (!html) return "";
  // TODO: sanitize content
  return html;
}
</script>

<template>
  <Modal v-model:open="isOpen" @close="handleCancel">
    <ModalHead :title="data?.title ?? ''" />
    <ModalContent>
      {{ sanitizeContent(data?.message) }}
    </ModalContent>
    <ModalFooter>
      <ButtonText @click="handleCancel">{{ $t("common.cancel") }}</ButtonText>
      <Button @click="handleConfirm" variant="primary">{{ $t("common.confirm") }}</Button>
    </ModalFooter>
  </Modal>
  <slot />
</template>
