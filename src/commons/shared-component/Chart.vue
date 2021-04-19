<template>
  <div
    style="height:600px;width: 600px;display: flex;flex-direction:column; background-color: white;"
  >
    <vue3-chart-js
      :id="chartConfig.id"
      ref="chartRef"
      :type="chartConfig.type"
      :data="chartConfig.data"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "ChartTest",
  components: {
    Vue3ChartJs
  },
  props: {
    chartConfig: {}
  }
};
</script>
