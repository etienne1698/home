import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  devServer: {
    port: 3301,
  },

  i18n: {
    langDir: "../app/i18n/locales/",
    locales: [
      { code: "en", file: "en.json" },
      { code: "fr", file: "fr.json" },
    ],
  },

  runtimeConfig: {
    public: {
      apiURL: "http://localhost:3300",
      frontendURL: "http://localhost:3301",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
