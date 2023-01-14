<template>
  <h2>{{ title }}</h2>
  <button @click="changeTitle">Change title</button>
</template>

<script setup lang="ts">
const title = ref("main screen");
const test: Number = 12;

const changeTitle = () => {
  title.value = "changed";
};
</script>

<style lang="scss" scoped></style>
