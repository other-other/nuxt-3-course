<template>
  <div>
    <h1>Course id</h1>
    <NuxtLink to="/">Go to home</NuxtLink>
    <button @click="fireError">Fire error</button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const titles = {
  name: "",
};
function fireError() {
  throw createError("This is an error 😂");
}

definePageMeta({
  // External middleware
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
