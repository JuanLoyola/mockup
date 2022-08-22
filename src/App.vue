<script>
import NavMobile from "./components/NavbarMobile.vue";
import NavDesktop from "./components/NavbarDesktop.vue";
import BannerDestacado from "./components/BannerDestacado.vue";
import PopularList from "./components/Populares.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavMobile,
    NavDesktop,
    BannerDestacado,
    PopularList,
  },
};
</script>
<template>
  <div>
    <NavMobile />
    <NavDesktop />
    <BannerDestacado />
    <PopularList />
  </div>
</template>

<style>
/*
Google fonts no cuenta con multiples opciones para "Bebas Neue"
por lo cual queda la que viene por defecto (y unica opcion free),por eso la misma font-weight
*/
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
:root {
  font-family: "Bebas Neue", Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
li {
  list-style: none;
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 4px;
  color: #ffffff;
}
/* for mobile side-menu */
.normal-margin {
  margin: 64px 0px 40px 0px;
}
.big-margin {
  margin-bottom: 64px !important;
}
/**/
body {
  margin: 0;
  padding: 0;
  font-weight: 400;
}
h1 {
  font-size: 28px;
  line-height: 28px;
}
.highlight{
  font-weight: 700;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
#app {
  max-width: 1280px;
  text-align: center;
}
</style>
