import imgAbout from "@/assets/img/about.png";
import imgVision from "@/assets/img/vision.png";
import imgMission from "@/assets/img/mission.png";
import imgDashboard from "@/assets/img/dashboard.png";
import imgLading from "@/assets/img/lading.png";
import imgPlatform from "@/assets/img/platform.png";
import imgMentor from "@/assets/img/mentor.png";
import imgCore from "@/assets/img/core.png";
import imgEngine from "@/assets/img/engine.png";
import imgApp from "@/assets/img/app.png";

const footerMock = [
  {
    contactEmail: "alaskawebsites94@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    contact: "(11)96912-4940",
    link: "https://wa.me/5511969124940?text=Ol%C3%A1%21+Venho+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.",
    icon: "fa-brands fa-whatsapp",
  },
  {
    contact: "@alaskawebsites",
    link: "https://www.tiktok.com/@alaskawebsites",
    icon: "fa-brands fa-tiktok",
  },
  {
    contact: "alaskawebsites94",
    link: "https://www.instagram.com/alaskawebsites94/",
    icon: "fa-brands fa-instagram",
  },
];

const contentMock = [
  {
    title: "Quem somos",
    text: "Somos uma empresa de desenvolvimento web dedicada a fornecer soluções de alta qualidade para nossos clientes. Com experiência sólida e um compromisso com a excelência, buscamos entregar projetos que superem as expectativas e impulsionem o sucesso de nossos clientes.",
    img: imgAbout,
    alt: "Quem somos",
    scrollYmin: 0,
    scrollYmax: 200,
  },
  {
    title: "Visão",
    text: "Nossa visão é trabalhar para oferecer as melhores tecnologias em desenvolvimento web, fornecendo soluções inovadoras que impulsionam o crescimento dos negócios de nossos clientes. Buscamos constantemente explorar novas tecnologias e tendências para entregar produtos de alta qualidade e experiências de usuário excepcionais.",
    img: imgVision,
    alt: "Visão",
    scrollYmin: 400,
    scrollYmax: 600,
  },
  {
    title: "Missão",
    text: "Nossa missão é oferecer serviços de desenvolvimento web de ponta, combinando criatividade, funcionalidade e usabilidade. Estamos empenhados em entender as necessidades específicas de cada cliente e desenvolver soluções personalizadas que atendam aos seus objetivos e requisitos únicos.",
    img: imgMission,
    alt: "Missão",
    scrollYmin: 1000,
    scrollYmax: 1200,
  },
  {
    title: "Valores",
    list: [
      {
        text: "Excelência: Nosso compromisso é buscar a excelência em tudo o que fazemos. Buscamos constantemente aprimorar nossas habilidades e conhecimentos para fornecer serviços da mais alta qualidade.",
      },
      {
        text: "Inovação: Abraçamos a inovação e a criatividade como pilares fundamentais do nosso trabalho. Buscamos constantemente novas soluções e abordagens para atender às demandas em constante evolução do mercado.",
      },
      {
        text: "Parceria: Valorizamos relacionamentos de longo prazo com nossos clientes, baseados em confiança e transparência. Nosso objetivo é ser um parceiro confiável e dedicado, trabalhando em estreita colaboração para alcançar resultados positivos.",
      },
      {
        text: "Comprometimento: Estamos comprometidos em cumprir prazos, atender às expectativas e superar os desafios. Nossa determinação e dedicação garantem que os projetos sejam entregues com sucesso e no prazo.",
      },
    ],
    img: imgCore,
    alt: "Valores",
    scrollYmin: 1500,
    scrollYmax: 1800,
  },
  {
    title: "Desenvolvimento de Dashboards e Painéis Administrativos",
    text: "Criação de dashboards e painéis administrativos personalizados para monitoramento e gerenciamento de dados. Utilizamos tecnologias que nos oferecem componentes reutilizáveis para construir interfaces intuitivas, que apresentem informações relevantes de maneira clara e organizada.",
    img: imgDashboard,
    alt: "Desenvolvimento de Dashboards e Painéis Administrativos",
    scrollYmin: 2000,
    scrollYmax: 2200,
  },
  {
    title: "Criação de Landing Pages Impactantes",
    text: "Desenvolvimento de landing pages altamente persuasivas e otimizadas para conversões. Utilizamos técnicas de design e desenvolvimento para criar páginas que atraiam e envolvam os visitantes, incentivando a ação desejada.",
    img: imgLading,
    alt: "Criação de Landing Pages Impactantes",
    scrollYmin: 2400,
    scrollYmax: 2700,
  },
  {
    title: "Desenvolvimento de Plataformas",
    text: "Criação de plataformas completos, que atendam às necessidades específicas do seu negócio. Utilizamos tecnologias para construir interfaces avançadas e funcionais, integrando-se com APIs e backends.",
    img: imgPlatform,
    alt: "Desenvolvimento de Plataformas",
    scrollYmin: 2800,
    scrollYmax: 3200,
  },
  {
    title: "Mentoria e Consultoria em Desenvolvimento Web",
    text: "Além de desenvolver projetos, nós oferecemos serviços de mentoria e consultoria para outros desenvolvedores ou equipes que estejam buscando aprimorar suas habilidades em desenvolvimento web. Compartilhamos nossos conhecimentos e experiências por meio de sessões de mentoria individual, workshops ou treinamentos personalizados, ajudando outras pessoas a adquirir as melhores práticas, técnicas avançadas e soluções inovadoras na área de desenvolvimento web.",
    img: imgMentor,
    alt: "Mentoria e Consultoria em Desenvolvimento Web",
    scrollYmin: 3400,
    scrollYmax: 3800,
  },
  {
    title: "Manutenção e atualização contínua",
    text: "Prestação de serviços de manutenção e atualização contínua para garantir que seu website ou aplicação web esteja sempre funcionando corretamente e utilizando as versões mais recentes das tecnologias e frameworks. Realizamos testes, corrigimos bugs e implementamos melhorias regulares para manter seu projeto atualizado e seguro.",
    img: imgEngine,
    alt: "Manutenção e atualização contínua",
    scrollYmin: 4000,
    scrollYmax: 4300,
  },
  {
    title: "Vantagens de um Aplicativo Web Moderno",
    list: [
      {
        text: "Experiência do Usuário Aprimorada: Os aplicativos web modernos proporcionam uma experiência de usuário altamente interativa e envolvente. Ao adotar uma abordagem baseada em Single-Page Application (SPA), a navegação se torna mais fluida, eliminando a necessidade de recarregamento de páginas a cada interação. Isso resulta em uma experiência de usuário mais suave e responsiva, sem interrupções.",
      },
      {
        text: "Performance e Velocidade: Os aplicativos web modernos são altamente otimizados para oferecer um desempenho excepcional. A renderização eficiente e o carregamento dinâmico de conteúdo permitem tempos de carregamento mais rápidos e interações instantâneas. Isso resulta em uma experiência ágil para os usuários, sem atrasos ou esperas frustrantes.",
      },
      {
        text: "Escalabilidade e Manutenção Simplificada: Com a modularidade inerente às tecnologias como Vue.js, Nuxt.js, React.js, Next.js, é possível construir aplicativos web altamente escaláveis e fáceis de manter. A capacidade de reutilizar componentes e separar a lógica de negócio em partes independentes torna a manutenção mais eficiente e permite o crescimento contínuo do aplicativo à medida que suas necessidades evoluem.",
      },
      {
        text: "Integração com Ecossistema e Ferramentas Modernas: Os aplicativos web modernos, construídos com Vue.js, Nuxt.js, React.js, Next.js, são parte de ecossistemas ricos e vibrantes. Isso significa que você pode aproveitar uma vasta seleção de bibliotecas, frameworks e ferramentas de desenvolvimento para aprimorar e estender as funcionalidades do seu aplicativo. Além disso, a comunidade de desenvolvedores é ativa e está sempre compartilhando conhecimento e melhores práticas.",
      },
    ],
    img: imgApp,
    alt: "Vantagens de um Aplicativo Web Moderno",
    scrollYmin: 4400,
    scrollYmax: 4800,
  },
];

export { footerMock, contentMock };
