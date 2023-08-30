<template>
  <input @input="input($event)" />
</template>
<script setup>
const emit = defineEmits(["input"]);
const input = (e) => {
  emit("input", e.target.value);
};
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
