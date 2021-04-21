<template>
  <div style="width: 500px; color: white;" v-if="repartitionConfig.data">
    Etat d'avancé du Sprint 160
    <Chart :chartConfig="repartitionConfig" />
  </div>
</template>

<script lang="ts">
import Chart from "../../../commons/shared-component/charts/Chart.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import SprintKpi from "@/components/dsm/sprint-kpi/model/SprintKpi";
import SprintKpiService from "@/components/dsm/sprint-kpi/service/SprintKpi.service";
import ChartConfigService from "@/commons/shared-component/charts/ChartConfig.service";

export default {
  name: "SprintKpi",
  components: { Chart },
  setup() {
    const sprintKpiService = new SprintKpiService();
    const chartsService = new ChartConfigService();

    const store = useStore();

    const repartitionConfig = ref({});

    const user = computed(() => store.getters.getUser);
    const isUserLogged = computed(
      () => user.value.login && user.value.password
    );

    const loadData = () => {
      sprintKpiService
        .getSprintKpis(user.value.login, user.value.password)
        .then((response: SprintKpi) => {
          repartitionConfig.value = chartsService.getSprintKpiConfig(response);
        });
    };

    if (isUserLogged.value) {
      loadData();
    }

    watch(
      () => user.value,
      () => {
        if (isUserLogged.value) {
          loadData();
        }
      }
    );

    return {
      repartitionConfig,
      isUserLogged
    };
  }
};
</script>

<style lang="scss">
.title {
  color: $secondary-color;
}
</style>
