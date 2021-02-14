<template>
  <div id="main-app-container">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

@Options({
  name: "App",
  components: { Header: HeaderComponent }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: $deep-green;
}

#main-app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
