<script setup lang="ts" generic="T">
const props = defineProps<{
  label: string;
  name: string;
  options: {
    label: string;
    value: T;
  }[];
}>();

defineModel<T>();

const { value } = useField(() => props.name, undefined, {
  syncVModel: true,
});

const resultText = computed<string>(() => {
  return props.options.find((option) => option.value === value.value)?.label ?? "";
});
</script>

<template>
  <div>
    <div class="flex items-center gap-2 justify-between mb-1">
      <Label>
        {{ label }}
      </Label>
      <slot name="label-right" />
    </div>
    <ActionMenu
      :actions="
        options.map((option) => ({
          title: option.label,
          action: () => (value = option.value),
        }))
      "
      placement="bottom-start"
      full-width
    >
      <Input :model-value="resultText" readonly />
    </ActionMenu>
  </div>
</template>
