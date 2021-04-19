import axios, { AxiosResponse } from "axios";
import JiraIssueMapper from "./mapper/JiraIssueMapper";
import { Story } from "@/components/report-generator/model/Story";

export default class JiraProvider {
  private jiraIssueMapper: JiraIssueMapper;

  constructor() {
    this.jiraIssueMapper = new JiraIssueMapper();
  }

  public getActiveSprints(
    login: string,
    password: string
  ): Promise<AxiosResponse> {
    return axios.get("jira/rest/agile/1.0/board/25/sprint?state=active", {
      auth: { username: login, password: password }
    });
  }

  public getIssuesFromSprintId(
    sprintId: string,
    login: string,
    password: string
  ): Promise<Story[]> {
    return axios
      .get(`jira/rest/agile/1.0/sprint/${sprintId}/issue`, {
        auth: { username: login, password: password }
      })
      .then(response => {
        return this.jiraIssueMapper.mapJiraIssues(
          response.data.issues.filter(
            (response: any) => response.fields.sprint.id == sprintId
          )
        );
      });
  }
}
