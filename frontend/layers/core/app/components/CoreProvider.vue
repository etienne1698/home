<template>
  <Toaster position="bottom-right" :toastOptions="{ class: '' }" />
  <ConfirmProvider>
    <slot />
  </ConfirmProvider>
</template>

<script setup lang="ts"></script>
