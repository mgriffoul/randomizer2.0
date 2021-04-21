import { SprintRepository } from "@/repositories/SprintRepository";
import SprintKpi from "@/components/dsm/sprint-kpi/model/SprintKpi";
import { Story } from "@/repositories/model/Story";
import { SprintService } from "@/commons/services/Sprint.service";

export default class SprintKpiService {
  private sprintRepository: SprintRepository;
  private sprintService: SprintService;

  constructor() {
    this.sprintRepository = new SprintRepository();
    this.sprintService = new SprintService();
  }

  getSprintKpis = (login: string, password: string): Promise<SprintKpi> => {
    return this.sprintRepository
      .getSprintIssues(login, password)
      .then((storyList: Story[]) => {
        const sprintBacklog = this.sprintService.getSprintBacklogFromStoryList(
          storyList
        );
        const donePoints = this.sprintService.getDonePointsFromStoryList(
          storyList
        );
        const wipPoints = this.sprintService.getWipPointsFromStoryList(
          storyList
        );
        return {
          sprintName: storyList[0].sprintName,
          done: donePoints,
          todo: sprintBacklog - wipPoints - donePoints,
          wip: wipPoints,
          sprintBacklog: sprintBacklog
        };
      });
  };
}
