<template>
  <SprintKpi v-if="isUserLogged" />
  <LoginError v-if="!isUserLogged" />
  <RandomizerComponent />
</template>

<script lang="ts">
import RandomizerComponent from "./randomizer/RandomizerComponent.vue";
import SprintKpi from "./sprint-kpi/SprintKpi.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import LoginError from "@/commons/shared-component/LoginError.vue";
export default {
  name: "Dsm",
  components: { LoginError, SprintKpi, RandomizerComponent },
  setup() {
    const store = useStore();
    const isUserLogged = computed(() => {
      return store.getters.getUser?.login && store.getters.getUser?.password;
    });

    return {
      isUserLogged
    };
  }
};
</script>

<style></style>
