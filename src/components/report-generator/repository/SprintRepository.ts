import JiraProvider from "../../../providers/jira/JiraProvider";
import { AxiosResponse } from "axios";
import { Story } from "@/components/report-generator/model/Story";

export class SprintRepository {
  private jiraProvider: JiraProvider;

  constructor() {
    this.jiraProvider = new JiraProvider();
  }

  getActiveSprint = (): Promise<number> => {
    return this.jiraProvider
      .getActiveSprints()
      .then((response: AxiosResponse): number => {
        return response.data.values
          .map((sprint: { id: number }) => {
            return sprint.id;
          })
          .reduce((max: number, current: number) => {
            return max > current ? max : current;
          });
      });
  };

  getSprintIssues = (): Promise<Story[]> => {
    return this.getActiveSprint().then(async (sprintId: number) => {
      return this.jiraProvider
        .getIssuesFromSprintId(sprintId.toString())
        .then();
    });
  };
}
