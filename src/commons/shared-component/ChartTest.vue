<template>
  <div
    style="height:600px;width: 600px;display: flex;flex-direction:column; background-color: white;"
  >
    <vue3-chart-js
      :id="doughnutChart.id"
      ref="chartRef"
      :type="doughnutChart.type"
      :data="doughnutChart.data"
    ></vue3-chart-js>
  </div>
</template>

<script>
import { ref } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "ChartTest",
  components: {
    Vue3ChartJs
  },
  setup() {
    const chartRef = ref(null);

    const doughnutChart = {
      id: "doughnut",
      type: "pie",
      data: {
        labels: ["TODO", "WIP", "DONE"],
        datasets: [
          {
            label: "test",
            backgroundColor: ["#00D8FF", "#E46651", "#41B883"],
            data: [23, 15, 7]
          }
        ]
      }
    };

    return {
      doughnutChart,
      chartRef
    };
  }
};
</script>
