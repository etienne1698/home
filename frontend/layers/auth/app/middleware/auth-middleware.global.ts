export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return;

  
  const { isAuthenticated } = useAuth();
  const localePath = useLocalePath();

  const publicRoutes = [
    localePath("/login"),
    localePath("/register"),
    localePath("/forgot-password"),
    localePath("/reset-password"),
  ];

  if (publicRoutes.includes(to.path) && isAuthenticated.value) {
    return navigateTo(localePath("/"));
  } else if (!publicRoutes.includes(to.path) && !isAuthenticated.value) {
    return navigateTo(localePath("/login"));
  }
});
