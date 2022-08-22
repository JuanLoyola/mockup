<template>
  <div class="container">
    <div v-if="!uploadSuccess" class="upload-card">
      <span class="close-card" @click="closeAddMovie" style="cursor: pointer">
        <img class="close-icon" src="../assets/close.png" alt="close card" />
      </span>
      <label for="avatar" class="card-title">agregar pelicula</label>
      <div v-if="!uploadImage" class="drag-card">
        <input
          type="file"
          name="files"
          id="files"
          @change="inputLenght"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <label for="files" class="drag-label">
          <div>
            <img
              src="../assets/clip.png"
              alt="clip"
              style="width: 16px; height: 16px; margin-right: 16px"
            />
            Agregá un archivo o arrastralo y soltalo aqui
          </div>
        </label>
      </div>
      <div id="loading" v-if="uploadImage">
        <h4 class="loading-title">cargando 100%</h4>
        <div class="loading-bar"></div>
        <p class="loading-ready">¡listo!</p>
      </div>
      <div>
        <input class="movie-name" v-model="movieName" placeholder="TITULO" />
      </div>
      <button @click="addMovie" class="button" :disabled="verifyButton">
        <p class="button-text">Subir pelicula</p>
      </button>
    </div>
    <div v-if="uploadSuccess" class="success-card">
      <span class="close-card" @click="closeAddMovie" style="cursor: pointer">
        <img class="close-icon" src="../assets/close.png" alt="close card" />
      </span>
      <label for="avatar" class="card-title">liteflix</label>
      <div>
        <h4 class="loading-title">¡felicitaciones! {{movieName}} fue correctamente subida.</h4>
      </div>
      <button @click="closeAddMovie" class="button" :disabled="!uploadImage">
        <p class="button-text">ir a home</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadMovie",
  data() {
    return {
      movieName: "",
      uploadImage: false,
      uploadSuccess: false,
      nextStep: false,
      movies: [],
      image: "",
      getMovieName: {}
    };
  },
  computed: {
    verifyButton() {
      return this.disabledButton()
    }
  },
  methods: {
    inputLenght(e) {
      this.uploadImage = e.target.files[0];
      this.image = e.target.files[0];
    },
    closeAddMovie() {
      this.$store.state.showAddMovie = false;
      this.movieName = "";
    },
    disabledButton() {
      if(this.movieName === "") {
        return this.movieName === ""
      }
      if(this.uploadImage === false) {
        return this.uploadImage === false
      }
    },
    addMovie() {
      this.movies.push({
        name: this.movieName
      });
      localStorage.setItem("movies", JSON.stringify(this.movies));
      this.uploadSuccess = true
    },
  },
};
</script>

<style scoped>
input[type="file"] {
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 24, 0.5);
  z-index: 103;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-card {
  width: 730px;
  height: 440px;
  background: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.success-card {
  width: 730px;
  height: 440px;
  background: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.close-card {
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin: 0 30px 0 0;
}
.card-title {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 4px;
  margin-bottom: 48px;
  color: #64eebc;
}
.drag-card {
  width: 602px;
  height: 100px;
  border: 1px dashed #ffffff;
  padding: 12px;
}
.drag-label {
  display: block;
  cursor: pointer;
}
.movie-name {
  width: 248px;
  height: 24px;
  background: none;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 19px;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;
}
.movie-name:focus {
  border-color: #fff;
}
.movie-name::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;
}
.button {
  width: 248px;
  height: 56px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 4px;
  background: #ffffff;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  cursor: pointer;
}
.button-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 4px;

  color: #242424;
}
.button:disabled {
  background: #acacac;
  cursor: not-allowed;
}
#loading {
  display: block;
}
.loading-title {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 4px;
  color: #ffffff;
}
.loading-bar {
  width: 602px;
  height: 10px;
  background: #64eebc;
  margin: 20px 0;
}
.loading-ready {
  text-align: right;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 4px;
  color: #64eebc;
}

@media screen and (max-width: 800px)  {
  .container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 24, 0.5);
}

.upload-card {
  width: 100%;
  height: 100%;
}
.success-card {
  width: 100%;
  height: 100%;
}
.close-card {
  width: 90%;
  margin: 0 0 0 0;
}
.card-title {
  font-size: 15px;
  margin-bottom: 18px;
}
.drag-card {
  width: 100%;
  padding: 5px;
}
.loading-bar {
  width: 100%;
  height: 10px;
  background: #64eebc;
  margin: 20px 0;
}
}
</style>