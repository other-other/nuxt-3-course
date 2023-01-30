<template>
  <main>
    <h1>Welcome</h1>
    <UserCard />
    <NuxtLink to="/courses/course/1">Go to course 1</NuxtLink>
    <br />
    <NuxtLink to="/courses/course/2">Go to course 2</NuxtLink>
    <br />
    <NuxtLink to="/courses/course/3">Go to course 3</NuxtLink>
    <br />
    <NuxtLink to="/courses/course/4">Go to course 4</NuxtLink>
    <hr />
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <button @click="getData">Get data</button>
  </main>
</template>

<script setup lang="ts">
let title = ref("s");
async function getData() {
  const course: any = await useCourse(title.value);
  title.value = course.title;
}
</script>
<style lang="scss" scoped>
.style {
  background-color: red;
}
</style>
