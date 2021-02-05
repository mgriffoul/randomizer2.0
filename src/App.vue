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
@import url("https://fonts.googleapis.com/css?family=VT323");

html {
  background-color: $primary-color;
}
#app {
  font-family: VT323, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary-color;
  display: flex;
  justify-content: center;
}
</style>
