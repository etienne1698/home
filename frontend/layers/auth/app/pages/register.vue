<script setup lang="ts">
import * as z from "zod";
import { LoaderCircle } from "lucide-vue-next";

const { $toast } = useNuxtApp();
const { t } = useI18n();
const { register } = useAuth();
const router = useRouter();
const localePath = useLocalePath();

const formSchema = z.object({
  email: z.email(t("validation.invalidEmail")),
  password: z.string().min(6, t("validation.passwordRules")),
  name: z.string(),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(formSchema),
  validateOnMount: false,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await register(values);
    $toast.success(t("pages.register.registerSuccess"));
    router.push(localePath("/"));
  } catch (err) {
    // TODO: Handle error code (ex: PASSWORD_TOO_SHORT...)
    $toast.error(t("pages.register.registerError"));
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
        :title="t('pages.register.title')"
        :subtitle="t('pages.register.description')"
      />
      <CardContent>
        <form @submit.prevent="onSubmit" class="space-y-4">
          <FormTextField name="name" :label="t('pages.register.name')" type="text" />
          <FormTextField name="email" :label="t('pages.register.email')" type="email" />
          <FormTextField
            name="password"
            :label="t('pages.register.password')"
            type="password"
          />

          <Button variant="primary" type="submit" class="w-full mt-6">
            <LoaderCircle v-if="isSubmitting" class="h-4 w-4 animate-spin" />
            <span> {{ t("pages.register.signUp") }} </span>
          </Button>
        </form>

        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            {{ t("pages.register.alreadyHaveAccount") }}
            <NuxtLinkLocale to="/login">
              <ButtonText variant="link">
                {{ t("pages.register.signIn") }}
              </ButtonText>
            </NuxtLinkLocale>
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
