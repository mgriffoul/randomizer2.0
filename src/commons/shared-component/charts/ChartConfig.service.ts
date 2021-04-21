import SprintKpi from "@/components/dsm/sprint-kpi/model/SprintKpi";
import { ChartConfiguration } from "chart.js";

export default class ChartConfigService {
  getSprintKpiConfig(sprintKpi: SprintKpi): ChartConfiguration {
    const todoPoints = sprintKpi.todo;
    const wipPoints = sprintKpi.wip;
    const donePoints = sprintKpi.done;
    return {
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
          }
        },
        indexAxis: "y",
        scales: {
          x: {
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
  }
}
