<script setup lang="ts">
import { z } from "zod";
import { LoaderCircle } from "lucide-vue-next";

const { $toast } = useNuxtApp();
const { t } = useI18n();
const { login } = useAuth();
const router = useRouter();
const localePath = useLocalePath();

const formSchema = z.object({
  email: z.email(t("validation.invalidEmail")),
  password: z.string().min(6, t("validation.passwordRules")),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(formSchema),
  validateOnMount: false,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await login(values);
    $toast.success(t("pages.login.loginSuccess"));
    router.push(localePath("/"));
  } catch (err) {
    console.error(err);
    $toast.error(t("pages.login.loginError"));
  }
});

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <Card class="w-full max-w-md p-6 py-8">
      <CardHead
        :title="t('pages.login.title')"
        :subtitle="t('pages.login.description')"
      />
      <CardContent>
        <form @submit.prevent="onSubmit" class="space-y-4">
          <FormTextField name="email" :label="t('pages.login.email')" type="email" />

          <FormTextField
            name="password"
            :label="t('pages.login.password')"
            type="password"
          >
            <template #label-right>
              <NuxtLinkLocale to="/forgot-password">
                <ButtonText variant="link">
                  {{ t("pages.login.forgotPassword") }}
                </ButtonText>
              </NuxtLinkLocale>
            </template>
          </FormTextField>


          <Button variant="primary" type="submit" class="w-full mt-6">
            <LoaderCircle v-if="isSubmitting" class="h-4 w-4 animate-spin" />
            <span> {{ t("pages.login.signIn") }} </span>
          </Button>
        </form>

        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            {{ t("pages.login.dontHaveAccount") }}
            <NuxtLinkLocale to="/register">
              <ButtonText variant="link"> {{ t("pages.login.signUp") }} </ButtonText>
            </NuxtLinkLocale>
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
