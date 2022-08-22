<template>
  <div class="container">
    <div class="row">
      <div id="menu">
        <!-- width 27 to keep the title centered on mobile resolutions -->
        <div style="width:27px">
          <img
          v-show="!sideMenu"
          @click="openMenu"
          style="width: 27px; height: 12px"
          src="../assets/Menú.png"
          alt="menu"
        />
        <img
          v-show="sideMenu"
          @click="openMenu"
          style="width: 15px; height: 15px"
          src="../assets/close.png"
          alt="menu"
        />
        </div>
      </div>
      <div class="row">
        <h1 class="title">LITE</h1>
        <span class="title-weight">FLIX</span>
      </div>
      <div id="user">
        <img
          style="width: 36px; height: 36px"
          src="../assets/user.png"
          alt="menu"
        />
      </div>
    </div>
    <div v-show="sideMenu" class="side-menu">
      <ul class="sidemenu-list">
        <li class="normal-margin">inicio</li>
        <li class="normal-margin">series</li>
        <li class="normal-margin">peliculas</li>
        <li class="normal-margin">agregadas recientemente</li>
        <li class="normal-margin">populares</li>
        <li class="normal-margin">mis peliculas</li>
        <li class="big-margin">mi lista</li>
        <li class="big-margin" @click="openAddMovie">
          <span style="margin-right: 8px">
            <img src="../assets/plus.png" alt="add movie" />
          </span>
          agregar pelicula
        </li>
        <li>cerrar sesion</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
  data() {
    return {
      sideMenu: false,
    };
  },
  methods: {
    openMenu() {
      this.sideMenu = !this.sideMenu;
    },
    openAddMovie() {
      this.$store.state.showAddMovie = true
    }
  },
};
</script>

<style scoped>
.container {
  width: 327px;
  height: 36px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
}
.row {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 0 24px;
}
.title {
  font-family: "Bebas Neue";
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 4px;
  color: #64eebc;
}
.title-weight {
  font-family: "Bebas Neue";
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 4px;
  color: #64eebc;
}
.side-menu {
  position: relative;
  width: 100vw;
  background: #242424;
  z-index: 99;
  padding: 20px 0;
}

@media screen and (min-width: 800px) {
  .container {
    display: none;
  }
} 
</style>
