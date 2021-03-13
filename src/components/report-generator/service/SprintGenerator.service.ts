import JiraProvider from "@/providers/jira/JiraProvider";
import { SprintRepository } from "@/components/report-generator/repository/SprintRepository";
import {
  Sprint,
  SprintStories
} from "@/components/report-generator/model/SprintStories";
import { SprintService } from "@/components/report-generator/service/sprint/Sprint.service";

export default class SprintGeneratorService {
  private sprintRepository: SprintRepository;
  private jiraProvider: JiraProvider;
  private sprintService: SprintService;

  constructor() {
    this.jiraProvider = new JiraProvider();
    this.sprintRepository = new SprintRepository();
    this.sprintService = new SprintService();
  }

  async getSprint(): Promise<Sprint> {
    const sprintStories = await this.getSprintStories();
    console.log("in get sprint");
    return {
      sprintStories,
      sprintBacklog: this.sprintService.getSprintBacklogPoints(sprintStories),
      remain: this.sprintService.getSprintRemainingPoints(sprintStories),
      done: this.sprintService.getDonePoints(sprintStories)
    };
  }

  async getSprintStories(): Promise<SprintStories> {
    const rawStoryList = await this.sprintRepository.getSprintIssues();
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
