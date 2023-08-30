<template>
  <Layout>
    <template #header>
      <Banner>
        <Logo :props="propsImage" />
      </Banner>
    </template>
    <template #main>
      <Card v-for="cont in content" :key="cont">
        <div class="container-flex">
          <div
            :class="
              width > 900
                ? scrollY >= cont.scrollYmin && scrollY <= cont.scrollYmax
                  ? 'animate__animated animate__flipInX'
                  : ''
                : ''
            "
          >
            <h2>{{ cont.title }}</h2>
            <p v-if="!cont.list">{{ cont.text }}</p>
            <ul v-else>
              <li v-for="list in cont.list" :key="list">{{ list.text }}</li>
            </ul>
          </div>
          <div
            :class="
              width > 900
                ? scrollY >= cont.scrollYmin && scrollY <= cont.scrollYmax
                  ? 'animate__animated animate__flipInX'
                  : ''
                : ''
            "
          >
            <img :src="cont.img" :alt="cont.alt" />
          </div>
        </div>
      </Card>
      <Card class="cardForm">
        <Form v-for="f in form" :key="f" :textLabel="f.label">
          <Input @input="f.event" />
        </Form>
        <NuxtLink
          :href="`mailto:alaskawebsites94@gmail.com?subject=Duvida ou interesse no serviço de desenvolvimento web`"
        >
          <Button :textButton="'Enviar'" />
        </NuxtLink>
      </Card>
    </template>
    <template #footer>
      <ul v-for="f in footer" :key="f">
        <li>
          <i :class="f.icon"></i>
          {{ f.text
          }}<a v-if="!f.contactEmail" :href="f.link" target="_blank">{{ f.contact }}</a>
          <a
            v-else
            :href="`mailto:${f.contactEmail}?subject=Duvida ou interesse no serviço de desenvolvimento web`"
            >{{ f.contactEmail }}</a
          >
        </li>
      </ul>
    </template>
  </Layout>
  <SnowBackground />
</template>
<script setup>
import Banner from "@/components/atomics/Banner/Banner.vue";
import Logo from "@/components/atomics/Logo/Logo.vue";
import Card from "@/components/atomics/Card/Card.vue";
import SnowBackground from "@/components/atomics/SnowBackground/SnowBackground.vue";
import Input from "@/components/atomics/Input/Input.vue";
import Form from "@/components/atomics/Form/Form.vue";
import Button from "@/components/atomics/Button/Button.vue";
import Layout from "@/layout/Layout.vue";
import logoImg from "@/assets/img/logo.png";
import "animate.css";
import { footerMock, contentMock } from "@/mock/index";

useSeoMeta({
  title: "Alaska Websites",
  ogTitle: "Alaska Websites",
  description:
    "Empresa de Engenharia de Software, prestação de serviços como Desenvolvimento de Plataformas, Dashboard, Lading Pages, Aplicativos Web, Sistemas Web.",
  ogDescription:
    "Empresa de Engenharia de Software, prestação de serviços como Desenvolvimento de Plataformas, Dashboard, Lading Pages, Aplicativos Web, Sistemas Web.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

const content = reactive(contentMock);
const footer = reactive(footerMock);

const message = ref({
  company: "",
  contact: "",
  description: "",
});

const scrollY = ref(0);
const width = ref(0);

const propsImage = reactive({
  alt: "Logo",
  src: logoImg,
  width: 200,
});

const form = reactive([
  {
    label: "Nome da empresa",
    event: (e) => {
      message.company = e;
    },
  },
  {
    label: "Contato",
    event: (e) => {
      message.contact = e;
    },
  },
  {
    label: "Descrição do projeto",
    event: (e) => {
      message.description = e;
    },
  },
]);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  width.value = window.innerWidth;
};
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
