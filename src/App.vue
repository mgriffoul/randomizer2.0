<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "App"
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Indie+Flower&display=swap");

html {
  background-color: $primary-color;
}
#app {
  font-family: "Indie Flower", cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary-color;
  display: flex;
  justify-content: center;
}
</style>
