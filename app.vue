<template>
  <NuxtPage />
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  background-color: $color-1;
}

a {
  color: $color-1;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $color-2;
}

::-webkit-scrollbar-thumb {
  background: $color-1;
}

p {
  margin-bottom: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 20px;
  margin-bottom: 10px;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 5px;
}

h1 {
  font-size: 24px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 16px;
}
p {
  font-size: 20px;
}

p {
  line-height: 1.5;
}

ul {
  list-style-type: disc;
  margin-left: 10px;
}

li {
  margin-bottom: 5px;
  list-style: none;
}
</style>
