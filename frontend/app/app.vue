<script setup lang="ts">
const { refresh } = useAuth();

await refresh();
</script>

<template>
  <CoreProvider>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </CoreProvider>
</template>
