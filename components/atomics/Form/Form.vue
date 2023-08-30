<template>
  <form>
    <label
      ><b>{{ textLabel }}</b></label
    >
    <slot />
  </form>
</template>
<script setup>
defineProps({
  textLabel: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
