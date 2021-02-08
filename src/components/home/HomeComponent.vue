<template>
  <div class="home">
    <Header />
    <Randomizer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "../header/HeaderComponent.vue";
import RandomizerComponent from "@/components/randomizer/RandomizerComponent.vue";

@Options({
  components: { Header: HeaderComponent, Randomizer: RandomizerComponent },
  name: "Home"
})
export default class HomeComponent extends Vue {}
</script>
