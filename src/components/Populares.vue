<template>
  <DropdownList />
  <div class="container">
    <div
      @click="selectMovie(item)"
      v-for="(item, id) in list"
      :key="id"
      class="card"
    >
      <div v-if="!showSelectedMovie" class="card-column">
        <img
          :src="'https://image.tmdb.org/t/p/original' + item.poster_path"
          alt="list image"
          class="list-image"
        />
        <div class="card-column-info">
          <img
            class="play-circle"
            src="../assets/circle-play.png"
            alt="Play icon"
          />
          <h1 class="card-title">{{ item.original_title }}</h1>
        </div>
      </div>
    </div>
    <div v-if="showSelectedMovie" class="card-selected">
      <div class="background-opacity">
        <img
          :src="
            'https://image.tmdb.org/t/p/original' + movieSelectedId.poster_path
          "
          alt="selected image"
          class="selected-image"
        />
      </div>
      <div class="card-selected-info">
        <div class="inline">
          <img
            class="play-selected"
            src="../assets/circle-play.png"
            alt="Play icon"
          />
          <h1 class="card-title">{{ movieSelectedId.original_title }}</h1>
        </div>
        <div class="row">
          <span class="inline">
            <img class="star-icon" src="../assets/star.png" alt="star icon" />
            <p class="card-vote">{{ movieSelectedId.vote_average }}</p>
          </span>
          <p class="release">{{ movieSelectedId.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownList from "../components/Dropdown.vue";

export default {
  name: "PopularList",
  data() {
    return {
      list: [],
      movieSelectedId: {},
      showSelectedMovie: false,
    };
  },
  components: {
    DropdownList,
  },
  mounted() {
    this.searchPopulares();
  },
  methods: {
    async searchPopulares() {
      let res = await this.axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      this.list = res.data.results.slice(0, 4);
    },
    selectMovie(movieSelectedId) {
      this.movieSelectedId = movieSelectedId;
      this.showSelectedMovie = true;
      setTimeout(() => {
        this.showSelectedMovie = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.card {
  width: 327px;
  margin: 24px;
}
.list-image {
  width: 336px;
  height: 250px;
  object-fit: cover;
  z-index: -10;
}
.card-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-column-info {
  position: absolute;
}
.card-selected {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-selected-info {
  position: absolute;
  width: 60%;
}
.selected-image {
  width: 336px;
  height: 250px;
  object-fit: cover;
  z-index: -10;
}
.background-opacity::after {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 40%, #242424 100%);
}
.row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
}
.inline {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.play-circle {
  width: 48px;
  height: 48px;
}
.play-selected {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
.star-icon {
  width: 12px;
  height: 12px;
  margin-right: 6px;
}
.card-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;
  margin-top: 24px;
}
.release {
  width: 123px;
  font-size: 14px;
  line-height: 12px;
  text-align: right;
  letter-spacing: 2px;
}
@media screen and (min-width: 1366px) {
  .container {
    width: 420px;
    height: 650px;
    position: absolute;
    top: 3;
    bottom: 0;
    right: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 100px;
    margin: 5px 0;
  }
  .list-image {
    width: 250px;
    height: 150px;
  }
  .background-opacity::after {
    width: 0;
    height: 0;
    background: none;
  }
}
@media screen and (min-width: 1400px) {
  .container {
    width: 420px;
    height: 850px;
    position: absolute;
    top: 10;
    bottom: 0;
    right: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 100px;
    margin: 5px 0;
  }
  .list-image {
    width: 320px;
    height: 200px;
    object-fit: cover;
    z-index: -10;
  }
}
</style>