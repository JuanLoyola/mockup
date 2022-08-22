<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <h1 class="title">LITE</h1>
        <span class="title-weight">FLIX</span>
        <div class="add-movie" @click="openAddMovie" style="cursor:pointer;">
          <p><img src="../assets/plus.png" alt="plus" /> Agregar pelicula</p>
        </div>
      </div>
      <div class="row">
        <img
          @click="openMenu"
          class="menu"
          src="../assets/menu-desktop.svg"
          alt="menu desktop"
        />
        <img class="bell" src="../assets/bell.svg" alt="notification bell" />
        <img src="../assets/user.png" alt="user avatar" />
      </div>
    </div>
    <div v-show="sideMenu" class="side-menu">
      <div class="between">
        <img
          @click="openMenu"
          class="menu"
          src="../assets/close.png"
          alt="menu desktop"
        />
        <div>
          <img class="bell" src="../assets/bell.svg" alt="notification bell" />
          <img src="../assets/user.png" alt="user avatar" />
        </div>
      </div>
      <ul class="sidemenu-list">
        <li class="normal-margin">inicio</li>
        <li class="normal-margin">series</li>
        <li class="normal-margin">peliculas</li>
        <li class="normal-margin">agregadas recientemente</li>
        <li class="normal-margin">populares</li>
        <li class="normal-margin">mis peliculas</li>
        <li class="big-margin">mi lista</li>
        <li class="big-margin" @click="openAddMovie" style="cursor:pointer;">
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
  name: "NavDesktop",
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
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.row {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
}
.between {
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 43px;
  padding-left: 40px;
  padding-right: 30px;
}
.title {
  font-family: "Bebas Neue";
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 4px;
  color: #64eebc;
}
.title-weight {
  font-family: "Bebas Neue";
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 4px;
  color: #64eebc;
}
.add-movie {
  margin-left: 64px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 4px;
}
.bell {
  margin: 0 40px;
}
.menu {
  cursor: pointer;
}
.side-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 761px;
  height: 100vh;
  background: #242424;
  z-index: 99;
}

@media screen and (max-width: 800px) {
  .container {
    display: none;
  }
}
</style>
