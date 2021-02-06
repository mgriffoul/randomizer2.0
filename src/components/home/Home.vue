<template>
  <div class="home">
    <Header />
    <Randomizer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "../header/Header.vue";
import Randomizer from "@/components/randomizer/Randomizer.vue";

@Options({
  components: { Header, Randomizer },
  name: "Home"
})
export default class Home extends Vue {}
</script>
