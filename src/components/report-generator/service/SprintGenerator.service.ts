import { SprintRepository } from "@/repositories/SprintRepository";
import {
  Sprint,
  SprintStories
} from "@/components/report-generator/model/Sprint";
import { SprintService } from "@/commons/services/Sprint.service";

export default class SprintGeneratorService {
  private sprintRepository: SprintRepository;
  private sprintService: SprintService;

  constructor() {
    this.sprintRepository = new SprintRepository();
    this.sprintService = new SprintService();
  }

  async getSprint(login: string, password: string): Promise<Sprint> {
    console.log("in sreviuce");
    const sprintStories = await this.getSprintStories(login, password);
    return {
      sprintStories,
      sprintBacklog: this.sprintService.getSprintBacklogFromSprintStories(
        sprintStories
      ),
      remain: this.sprintService.getSprintRemainingPointsFromSprintStories(
        sprintStories
      ),
      done: this.sprintService.getDonePointsFromSprintStories(sprintStories),
      wip: this.sprintService.getWipPointsFromSprintStories(sprintStories)
    };
  }

  async getSprintStories(
    login: string,
    password: string
  ): Promise<SprintStories> {
    const rawStoryList = await this.sprintRepository.getSprintIssues(
      login,
      password
    );
    const technicalStories = this.sprintService.getOnlyTechnicalStory(
      rawStoryList
    );
    const bugs = this.sprintService.getOnlyBugs(rawStoryList);
    const functionalStories = this.sprintService.getOnlyfunctionalStories(
      rawStoryList
    );

    return {
      technicalStories,
      functionalStories,
      bugs
    };
  }
}
