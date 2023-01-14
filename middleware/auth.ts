export default defineNuxtRouteMiddleware(({ params }, from) => {
  if (params.id === "1") return;
  return navigateTo("/login");
});
