<template>
  <div>
    <h1>Course id</h1>
    <NuxtLink to="/">Go to home</NuxtLink>
    <h1>{{ $route.params.id }}</h1>
    <button @click="fireError">Fire error</button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

definePageMeta({
  middleware: ["auth"],
});

const titles = {
  name: "",
};
function fireError() {
  throw createError("This is an error 😂");
}
</script>

<style lang="scss" scoped></style>
