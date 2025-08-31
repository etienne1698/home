<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  autocomplete?: string;
  type?: string;
}>();
</script>

<template>
  <FormField v-slot="{ componentField }" :name>
    <div>
      <div class="flex items-center gap-2 justify-between mb-1">
        <Label>
          {{ label }}
        </Label>
        <slot name="label-right" />
      </div>
      <Input v-bind="componentField" :autocomplete :type />
    </div>
  </FormField>
</template>
