import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { createAuthClient } from "better-auth/vue";

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig();

  const authClient = createAuthClient({
    baseURL: config.public.apiURL,
  });

  // Expose to useNuxtApp().$authClient
  return {
    provide: {
      authClient,
    },
  };
});
