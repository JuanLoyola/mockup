<template>
  <div class="container">
    <div @click="showContainerOptions" class="container-row">
      <p class="flex">
        Ver:
        <span class="highlight">
          populares
          <img
            v-if="!showOptions"
            src="../assets/arrow.png"
            alt="arrow option"
          />
          <img
            style="transform: rotate(180deg)"
            v-if="showOptions"
            src="../assets/arrow.png"
            alt="arrow option"
          />
        </span>
      </p>
    </div>
    <div v-if="showOptions" class="option-container">
      <ul class="options-list">
        <li id="selected" class="option">
          Populares
          <span>
            <img
              style="width: 12px; height: 8px"
              src="../assets/check.png"
              alt="check option"
            />
          </span>
        </li>
        <li class="option">Mis peliculas</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownList",
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    showContainerOptions() {
      this.showOptions = !this.showOptions;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 65px;
}
.container-row {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 4px;
  cursor: pointer;
}
.option-container {
  width: 375px;
  background: #242424;
  position: fixed;
  top: 80%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 91;
  cursor: pointer;
}
.options-list {
  font-size: 16px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 16px;
  letter-spacing: 4px;
  color: #ffffff;
  padding: 32px 24px;
  font-weight: 400;
}
#selected {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 700;
}

@media screen and (min-width: 800px) {
  .container {
    height: 100px;
    width: 100%;
    margin-bottom: 35px;
  }
  .option-container {
    width: 375px;
    background: #242424;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>