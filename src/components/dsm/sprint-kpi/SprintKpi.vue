<template>
  <div>
    <Chart :chartConfig="repartitionConfig" />
  </div>
</template>

<script lang="ts">
import Chart from "../../../commons/shared-component/Chart.vue";
import { STORY_POINT_REPARTITION } from "@/components/dsm/sprint-kpi/sprintKpiConfig";

export default {
  name: "SprintKpi",
  components: { Chart },
  setup() {
    const repartitionConfig = STORY_POINT_REPARTITION;

    return {
      repartitionConfig
    };
  }
};
</script>

<style></style>
