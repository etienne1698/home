const publicRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  if (publicRoutes.includes(to.path) && isAuthenticated.value) {
    return navigateTo("/");
  }

  if (!publicRoutes.includes(to.path) && !isAuthenticated.value) {
    return navigateTo("/login");
  }
});
