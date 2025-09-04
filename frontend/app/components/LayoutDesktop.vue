<script setup lang="ts">
import { Home, List, LogOut, Menu as MenuIcon, Settings } from "lucide-vue-next";

const { t } = useI18n();
const auth = useAuth();
const localePath = useLocalePath();
const confirm = useConfirm();
const route = useRoute();

async function logout() {
  try {
    const confirmed = await confirm({
      title: t("nav.logout"),
      message: t("nav.logoutMessage"),
    });
    if (!confirmed) return;
    await auth.logout();
    await navigateTo(localePath("/login"));
  } catch (error) {
    console.error(error);
  }
}

const isOpen = ref(true);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const links = computed(() => [
  {
    to: "/",
    label: t("nav.home"),
    icon: Home,
  },
  {
    to: "/recipes",
    label: t("nav.recipes"),
    icon: List,
  },
]);

function isSelected(to: string) {
  return route.path === localePath(to);
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <header
      class="w-full z-20 sticky top-0 items-center justify-between px-6 flex gap-4 bg-[#2d2d2f] text-white h-12"
    >
      <button
        @click="toggleOpen"
        class="cursor-pointer hover:bg-gray-700 active:bg-gray-600 transition-colors duration-150 rounded-md p-2 -ml-2"
      >
        <MenuIcon class="w-4 h-4" color="white" />
      </button>
      <ActionMenu
        placement="bottom-end"
        :actions="[
          {
            title: $t('nav.settings'),
            icon: Settings,
            action: () => navigateTo(localePath('/settings')),
          },
          {
            title: $t('nav.logout'),
            icon: LogOut,
            action: logout,
            destructive: true,
          },
        ]"
      >
        <Avatar selectable src="https://github.com/shadcn.png" />
      </ActionMenu>
    </header>
    <div class="flex flex-1">
      <nav
        :class="{ 'w-56': isOpen, 'w-0': !isOpen }"
        class="bg-white transition-all duration-300 overflow-hidden"
      >
        <div class="p-4 flex flex-col gap-0">
          <NuxtLinkLocale
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="hover:bg-gray-100 rounded-md p-2 flex items-center gap-4 whitespace-nowrap"
            :class="{ 'bg-gray-100': isSelected(link.to) }"
          >
            <component :is="link.icon" class="w-4 h-4" />
            {{ link.label }}
          </NuxtLinkLocale>
        </div>
      </nav>
      <slot />
    </div>
  </div>
</template>
