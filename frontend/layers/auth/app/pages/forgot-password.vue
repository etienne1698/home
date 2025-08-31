<script setup lang="ts">
import * as z from "zod";
import { LoaderCircle } from "lucide-vue-next";
import { toast } from "vue-sonner";

definePageMeta({
  layout: false,
});

const { t } = useI18n();
const { forgotPassword } = useAuth();
const router = useRouter();
const localePath = useLocalePath();

const formSchema = z.object({
  email: z.email(t("validation.invalidEmail")),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(formSchema),
  validateOnMount: false,
  initialValues: {
    email: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await forgotPassword(values);
    toast.success(t("pages.forgot-password.success"));
    router.push(localePath({ name: "login" }));
  } catch (err) {
    console.error(err);
    toast.error(t("pages.forgot-password.error"));
  }
});
</script>

<template>
  <form class="min-h-screen flex items-center justify-center p-4" @submit="onSubmit">
    <Card class="w-full max-w-sm p-6 py-8">
      <CardHead
        :title="$t('pages.forgot-password.title')"
        :subtitle="$t('pages.forgot-password.description')"
      >
      </CardHead>

      <CardContent>
        <FormTextField
          id="email"
          :label="$t('pages.forgot-password.email')"
          name="email"
          autocomplete="email"
        />

        <Button variant="primary" type="submit" class="w-full mt-6 mb-4">
          <LoaderCircle v-if="isSubmitting" class="h-4 w-4 animate-spin" />
          {{ $t("pages.forgot-password.send") }}
        </Button>
        <div class="text-center text-sm flex justify-center">
          <NuxtLinkLocale to="/login">
            <ButtonText variant="link">
              {{ $t("pages.forgot-password.back") }}
            </ButtonText>
          </NuxtLinkLocale>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
