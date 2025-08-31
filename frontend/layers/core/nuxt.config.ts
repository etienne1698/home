import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "vue-sonner/nuxt", "@vee-validate/nuxt"],

  css: [join(currentDir, "./app/assets/css/main.css")],

  veeValidate: {
    autoImports: true,
    typedSchemaPackage: "zod",
    componentNames: {
      Form: "Form",
      Field: "FormField",
      FieldArray: "FormFieldArray",
      ErrorMessage: "FormErrorMessage",
    },
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    langDir: "../app/i18n/locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr.json",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
 
});
