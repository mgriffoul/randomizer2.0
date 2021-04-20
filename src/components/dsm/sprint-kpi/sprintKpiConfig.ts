export const STORY_POINT_REPARTITION = {
  type: "bar",
  data: {
    labels: ["Backlog"],
    datasets: [
      {
        label: "TODO",
        backgroundColor: ["#00D8FF"],
        data: [23]
      },
      {
        label: "WIP",
        backgroundColor: ["#E46651"],
        data: [31]
      },
      {
        label: "DONE",
        backgroundColor: ["#41B883"],
        data: [3]
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
      title: {
        display: false
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
