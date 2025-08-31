export default defineNuxtConfig({
  i18n: {
    langDir: "../app/i18n/locales/",
    locales: [
      { code: "en", file: "en.json" },
      { code: "fr", file: "fr.json" },
    ],
  },
});
