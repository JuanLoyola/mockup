<template>
  <div class="banner">
    <img
      :src="'https://image.tmdb.org/t/p/original' + destacado.poster_path"
      alt="banner image"
      class="banner-image"
    />
    <div class="banner-content">
      <h3 class="title">Original de liteflix</h3>
      <h1 class="subtitle">{{ destacado.title }}</h1>
      <div class="buttons">
        <div class="button-play">
          <img style="margin-right: 14px" src="../assets/play.png" alt="play" />
          reproducir
        </div>
        <div class="button-list">
          <img style="margin-right: 14px" src="../assets/plus.png" alt="play" />
          mi lista
        </div>
      </div>
    </div>
  </div>
  <UploadMovie v-if="$store.state.showAddMovie"/>
</template>

<script>
import UploadMovie from '../components/UploadMovie.vue'

export default {
  name: "BannerDestacado",
  data() {
    return {
      destacado: {}
    };
  },
  components: {
    UploadMovie
  },
  mounted() {
    this.peliculaDestacada();
  },
  methods: {
    async peliculaDestacada() {
      let res = await this.axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      this.destacado = res.data.results[6];
    }
  },
};
</script>

<style  scoped>
.banner {
  width: 100%;
  height: 585px;
  margin-bottom: 30px;
}

.banner-image {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  filter: opacity(60%);
}

.banner-content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0px 32px 16px 32px;
  padding-top: 241px;
}
.title {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 4px;
  color: #ffffff;
  margin-bottom: 16px;
  z-index: 10;
}
.subtitle {
  font-size: 2.5rem;
  line-height: 68px;
  letter-spacing: 12px;
  color: #64eebc;
  z-index: 10;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 480px;
  margin-top: 36px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
}
.button-play {
  width: 246px;
  height: 56px;
  background: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-list {
  width: 246px;
  height: 56px;
  background: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 16px;
}

@media screen and (min-width: 800px) {
  .banner {
    width: 100%;
    height: 100vh;
    margin-left: 22em;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    filter: opacity(50%);
  }

  .banner-content {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }
  .subtitle {
    font-size: 6rem;
    line-height: 68px;
    letter-spacing: 12px;
    color: #64eebc;
    z-index: 10;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 29em;
    position: unset;
    margin-top: 0;
    margin-left: 0;
    background: none;
  }
  .button-play {
    width: 248px;
    height: 56px;
    background: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-list {
    width: 248px;
    height: 56px;
    background: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    margin-top: 0px;
  }
}
@media screen and (min-width: 1366px) and (max-width: 1500px) {
  .banner {
    margin-left: 4em;
  }
  .subtitle {
    font-size: 3rem;
  }
  .buttons {
    width: 23em;
  }
  .button-play {
    width: 200px;
    height: 40px;
  }
  .button-list {
    width: 200px;
    height: 40px;
  }
}
</style>