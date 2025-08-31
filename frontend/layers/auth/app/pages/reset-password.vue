<script setup lang="ts">
import * as z from "zod";
import { LoaderCircle } from "lucide-vue-next";
import { toast } from "vue-sonner";

definePageMeta({
  layout: false,
});

const token = useRoute().query.token as string;

const { t } = useI18n();
const { resetPassword } = useAuth();
const router = useRouter();
const localePath = useLocalePath();

const formSchema = z.object({
  newPassword: z.string().min(1).min(8),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(formSchema),
  validateOnMount: false,
  initialValues: {
    newPassword: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await resetPassword({ token, newPassword: values.newPassword });
    toast.success(t("pages.reset-password.success"));
    router.push(localePath({ name: "auth-login" }));
  } catch (err) {
    console.error(err);
    toast.error(t("pages.forgot-password.error"));
  }
});
</script>

<template>
  <form
    class="min-h-screen flex items-center justify-center p-4"
    @submit="onSubmit"
  >
    <Card class="w-full max-w-sm p-6 py-8">
      <CardHead
        :title="$t('pages.reset-password.title')"
        :subtitle="$t('pages.reset-password.description')"
      />

      <CardContent>
        <div class="grid gap-6">
          <FormTextField
            id="newPassword"
            :label="$t('pages.reset-password.newPassword')"
            name="newPassword"
            autocomplete="new-password"
            type="password"
          />

          <Button variant="primary" type="submit" class="w-full">
            <LoaderCircle v-if="isSubmitting" class="h-4 w-4 animate-spin" />
            {{ $t("pages.reset-password.send") }}
          </Button>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
