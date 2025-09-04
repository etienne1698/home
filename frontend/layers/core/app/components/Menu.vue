<script setup lang="ts">
import {ref} from 'vue';
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  type Placement,
  type Strategy,
  autoUpdate
} from '@floating-ui/vue';
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<{
  placement?: Placement & string,
  strategy?: Strategy,
  offset?: number,
  fullWidth?: boolean
}>(), {
  placement: 'bottom-start',
  offset: 6
});

const isOpen = defineModel<boolean>("open", { default: false });

const reference = ref(null);
const floating = ref(null);

const middleware = [offset(props.offset), flip(), shift()]
if (props.fullWidth) {
  middleware.push(size({
    apply({ rects, elements }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`
      });
    }
  }))
}

const { floatingStyles } = useFloating(reference, floating, {
  placement: props.placement,
  strategy: props.strategy,
  middleware,
  open: isOpen,
  whileElementsMounted: autoUpdate,
});

onClickOutside(floating, () => isOpen.value = false, {
  ignore: [reference],
});
</script>

<template>
  <!-- keep class "is-open", used in .selectable class -->
  <div ref="reference" @click="isOpen = !isOpen" :class="{ 'is-open': isOpen }">
    <slot name="trigger" />
  </div>
  <div
    v-if="isOpen"
    ref="floating"
    :style="floatingStyles"
    class="bg-white rounded-md shadow-md overflow-hidden"
  >
    <slot name="content" />
  </div>
</template>
