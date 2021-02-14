<template>
  <div class="header">
    <div class="title cursor-pointer" @click="routeTo('/')">
      <span class="title-label title-label-top">
        SCRUM
      </span>
      <span class="title-label title-label-bot">
        TOOLBOX
      </span>
    </div>
    <div class="header-full-height">
      <img
        class="cursor-pointer"
        :src="require('@/assets/shuffle.svg')"
        alt="shuffle"
        @click="routeTo('randomizer')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "HeaderComponent",
  setup() {
    const router = useRouter();

    const routeTo = (path: string) => {
      router.push(path);
    };

    return {
      routeTo
    };
  }
};
</script>

<style lang="scss">
@import "./header";
</style>
