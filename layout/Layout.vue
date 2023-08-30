<template>
  <NuxtLayout>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </NuxtLayout>
</template>
<script setup>
useHead([
  {
    title: "Alaska Web Sites",
    description:
      "Empresa de Engenharia de Software, prestação de serviços como Desenvolvimento de Plataformas, Dashboard, Lading Pages, Aplicativos Web, Sistemas Web.",
  },
]);
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
