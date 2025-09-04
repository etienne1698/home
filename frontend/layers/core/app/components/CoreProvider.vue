<script setup lang="ts"></script>

<template>
  <Toaster position="bottom-right" :toastOptions="{ class: '' }" />
  <ConfirmProvider>
    <slot />
  </ConfirmProvider>
</template>
