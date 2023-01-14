<template>
  <h1>Page courses</h1>
  <h1>Title: {{ title.name }}</h1>
  <div style="border: 1px solid black">
    <h1>Wrapper pages</h1>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <h1>This is an {{ error }}</h1>
        <button @click="resetError(error)">Reset error</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const title = ref(useTest());
async function resetError(error) {
  throw createError({
    fatal: true,
    message: "Error 😃",
  });
}
</script>

<style lang="scss" scoped></style>
