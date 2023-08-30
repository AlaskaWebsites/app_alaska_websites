<template>
  <button @click="click">{{ textButton }}</button>
</template>
<script setup>
defineProps({
  textButton: {
    type: String,
  },
});

const emit = defineEmits(["click"]);

const click = () => {
  emit("click");
};
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
