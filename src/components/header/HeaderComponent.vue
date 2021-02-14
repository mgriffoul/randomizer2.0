<template>
  <div class="header">
    <div class="title">
      <span class="title-label">Dsm Randomizer </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Header"
})
export default class HeaderComponent extends Vue {}
</script>

<style lang="scss">
@import "./header";
</style>
