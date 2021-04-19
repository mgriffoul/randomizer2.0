<template>
  <SprintKpi />
  <RandomizerComponent />
</template>

<script lang="ts">
import RandomizerComponent from "./randomizer/RandomizerComponent.vue";
import SprintKpi from "./sprint-kpi/SprintKpi.vue";
export default {
  name: "Dsm",
  components: { SprintKpi, RandomizerComponent }
};
</script>

<style></style>
