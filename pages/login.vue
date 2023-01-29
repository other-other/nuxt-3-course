<template>
  <div>
    <h1>Login with my website</h1>
    <button @click="login">Login with github</button>
  </div>
</template>

<script setup>
const { auth } = useSupabaseClient();
const { query } = useRoute();
const user = useSupabaseUser();
const token = useCookie("token");

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo, { replace: true });
  }
});

const login = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  await auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo },
  });
  var now = new Date();
  var time = now.getTime();
  token.value = "this is a token from login";
  token.expires = time + 30000;
  console.log(token.expires);
};
definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped></style>
