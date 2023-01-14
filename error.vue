<template>
  <NuxtLayout>
    <h1>Error 😂</h1>
    <div v-if="error">
      <h1>Status code: {{ error.statusCode }}</h1>
      <h1>Message: {{ error.message }}</h1>
    </div>
    <a @click="clearErrors">clear error</a>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const clearErrors = () => clearError({ redirect: "/courses" });
</script>

<style lang="scss" scoped></style>
