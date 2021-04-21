<template>
  <div style="display: flex;flex-direction:column; background-color:#01626b;">
    <vue3-chart-js
      :id="chartConfig.id"
      :type="chartConfig.type"
      :data="chartConfig.data"
      :options="chartConfig.options"
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
