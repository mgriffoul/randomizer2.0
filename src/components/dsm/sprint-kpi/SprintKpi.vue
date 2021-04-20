<template>
  <div style="width: 500px; color: white;" v-if="repartitionConfig.data">
    Etat d'avancé du Sprint 160
    <Chart :chartConfig="repartitionConfig" />
  </div>
</template>

<script lang="ts">
import Chart from "../../../commons/shared-component/Chart.vue";
import { useStore } from "vuex";
import { computed, reactive, ref, toRefs, watch } from "vue";
import SprintGeneratorService from "@/components/report-generator/service/SprintGenerator.service";

export default {
  name: "SprintKpi",
  components: { Chart },
  setup() {
    const sprintGeneratorService = new SprintGeneratorService();

    const store = useStore();

    const repartitionConfig = ref({});
    const kpi = reactive({
      sprintName: "",
      done: 0,
      remain: 0,
      wip: 0,
      sprintBacklog: 2
    });

    const { wip } = toRefs(kpi);
    console.log("wip.value", wip.value);
    const user = computed(() => store.getters.getUser);
    const isUserLogged = computed(
      () => user.value.login && user.value.password
    );

    const loadData = () => {
      sprintGeneratorService
        .getSprint(user.value.login, user.value.password)
        .then(response => {
          const todoPoints =
            response.sprintBacklog - response.wip - response.done + 2;
          const wipPoints = response.wip + 13;
          const donePoints = response.done - 18;

          repartitionConfig.value = {
            type: "bar",
            data: {
              labels: ["Backlog"],
              datasets: [
                {
                  label: `TODO (${todoPoints} pnt)`,
                  backgroundColor: ["#00D8FF"],
                  data: [todoPoints]
                },
                {
                  label: `WIP (${wipPoints} pnt)`,
                  backgroundColor: ["#E46651"],
                  data: [wipPoints]
                },
                {
                  label: `DONE (${donePoints} pnt)`,
                  backgroundColor: ["#41B883"],
                  data: [donePoints]
                }
              ]
            },
            options: {
              plugins: {
                legend: {
                  title: {
                    color: "#fff"
                  },
                  labels: {
                    color: "#fff"
                  }
                },
                labels: {
                  display: false
                }
              },
              indexAxis: "y",
              scales: {
                x: {
                  color: "#fff",
                  stacked: true,
                  grid: {
                    color: "#fff"
                  },
                  ticks: {
                    color: "#fff"
                  }
                },
                y: {
                  display: false,
                  stacked: true
                }
              }
            }
          };
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
      isUserLogged,
      kpi
    };
  }
};
</script>

<style lang="scss">
.title {
  color: $secondary-color;
}
</style>
