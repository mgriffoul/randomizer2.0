<template>
  <div id="main-app-container">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent
  }
};
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
