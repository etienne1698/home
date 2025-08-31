<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const handleLocaleChange = (locale: (typeof locales.value)[number]["code"] | undefined) => {
  if (!locale) return;
  navigateTo(switchLocalePath(locale));
};


</script>

<template>
 <!--  <NuxtLink
    v-for="locale in locales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    :class="{ 'text-blue-500': isCurrentLocale(locale.code) }"
  >
    {{ locale.name }}
  </NuxtLink> -->
  <FormSelect
    :label="$t('components.langSwitcher.label')"
    name="language"
    :options="locales.map((locale) => ({ label: locale.name!, value: locale.code }))"
    @update:model-value="handleLocaleChange"
    :model-value="currentLocale"
  />
</template>
