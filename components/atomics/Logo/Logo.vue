<template>
  <img :src="props.src" :alt="props.alt" :width="props.width" :height="props.height" />
</template>
<script setup>
defineProps({
  props: {
    type: Object,
  },
});
</script>
