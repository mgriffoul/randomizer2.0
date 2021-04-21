import JiraProvider from "../providers/jira/JiraProvider";
import { AxiosResponse } from "axios";
import { Story } from "@/repositories/model/Story";

export class SprintRepository {
  private jiraProvider: JiraProvider;

  constructor() {
    this.jiraProvider = new JiraProvider();
  }

  getActiveSprint = (login: string, password: string): Promise<number> => {
    return this.jiraProvider
      .getActiveSprints(login, password)
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

  getSprintIssues = (login: string, password: string): Promise<Story[]> => {
    return this.getActiveSprint(login, password).then(
      async (sprintId: number) => {
        return this.jiraProvider
          .getIssuesFromSprintId(sprintId.toString(), login, password)
          .then();
      }
    );
  };
}
