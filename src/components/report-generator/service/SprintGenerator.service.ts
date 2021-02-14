import JiraProvider from "@/providers/jira/JiraProvider";
import { SprintRepository } from "@/components/report-generator/repository/SprintRepository";
import { Sprint } from "@/components/report-generator/model/Sprint";
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

  async getSprintStories(): Promise<Sprint> {
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
