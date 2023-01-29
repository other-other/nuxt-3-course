<template>
  <div v-if="getInfoUser">
    <hr />
    <div>
      <h1>Name: {{ user.name }}</h1>
      <h1>Email: {{ user.email }}</h1>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
const getInfoUser = useSupabaseUser();
const { auth } = useSupabaseClient();

const user = computed(() => {
  return {
    name: getInfoUser.value?.user_metadata.user_name,
    email: getInfoUser.value?.email,
  };
});

const logout = async () => {
  try {
    await auth.signOut();

    // This how fix remove session from server.
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
    getInfoUser.value = null;
    await navigateTo("/login");
  } catch {
    console.log("Error please try again.");
  }
};
</script>

<style lang="scss" scoped></style>
