<template>
  <div class="header">
    <div class="title">
      <span class="title-label">Dsm Randomizer</span
      ><span class="copyright">&copy;</span>
    </div>
    <span class="back-line">Who's gonna speak first ... ?</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Header"
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    align-items: center;
    text-transform: uppercase;
    color: $extra-color;
    font-size: 60px;
    display: flex;

    .copyright {
      font-size: 35px;
      align-self: flex-start;
    }
  }

  .back-line {
    margin-top: $primary-top-space;
    font-size: 20px;
  }
}

img {
  height: 45px;
}
</style>
