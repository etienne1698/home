type Auth = any;

export const AUTH_STATE_KEY = "auth";

export default function useAuth() {
  const auth = useState<Auth | undefined>(AUTH_STATE_KEY);
  const frontendURL = useNuxtApp().$config.public.frontendURL;
  const authClient = useNuxtApp().$authClient;

  const isAuthenticated = computed(() => !!auth.value);

  async function refreshFn() {
    const { data, error } = await authClient.getSession({
      fetchOptions: {
        headers: useRequestHeaders(),
      },
    });
    if (error) throw error;
    auth.value = data!.user;
    return data;
  }

  async function refresh() {
    return useAsyncData(refreshFn);
  }

  async function login(body: { email: string; password: string }) {
    const { data, error } = await authClient.signIn.email(body);
    if (error) throw error;

    auth.value = data.user;
    await refreshFn();
    return data;
  }

  async function loginOrRegisterWithGoogle() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: frontendURL,
    });
  }

  async function register(body: {
    email: string;
    password: string;
    name: string;
  }) {
    const { data, error } = await authClient.signUp.email({
      ...body,
      callbackURL: frontendURL,
    });

    if (error) throw error;

    auth.value = data.user;
    return data;
  }

  async function logout() {
    const { error } = await authClient.signOut();
    if (error) throw error;
    auth.value = undefined;
  }

  async function forgotPassword({ email }: { email: string }) {
    const { data, error } = await authClient.forgetPassword({
      email,
      redirectTo: `${frontendURL}/auth/reset-password`,
    });
    if (error) throw error;
    return data;
  }

  async function resetPassword(body: { token: string; newPassword: string }) {
    const { data, error } = await authClient.resetPassword(body);
    if (error) throw error;
    return data;
  }

  async function updateMe(body: Partial<Auth>) {
    const { data, error } = await authClient.updateUser(body);
    if (error) throw error;
    auth.value = { ...auth.value, ...body };
    return data.status;
  }

  return {
    auth,
    isAuthenticated,
    login,
    logout,
    refresh,
    register,
    forgotPassword,
    resetPassword,
    updateMe,
    loginOrRegisterWithGoogle,
  };
}
