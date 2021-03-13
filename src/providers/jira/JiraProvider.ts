import axios, { AxiosResponse } from "axios";
import JiraIssueMapper from "./mapper/JiraIssueMapper";
import { Story } from "@/components/report-generator/model/Story";

const config = {
  JIRA_USERNAME: "",
  JIRA_PASSWORD: ""
};

export default class JiraProvider {
  private jiraIssueMapper: JiraIssueMapper;

  constructor() {
    this.jiraIssueMapper = new JiraIssueMapper();
  }

  public getActiveSprints(): Promise<AxiosResponse> {
    return axios.get("jira/rest/agile/1.0/board/25/sprint?state=active", {
      auth: { username: config.JIRA_USERNAME, password: config.JIRA_PASSWORD }
    });
  }

  public getIssuesFromSprintId(sprintId: string): Promise<Story[]> {
    return axios
      .get(`jira/rest/agile/1.0/board/25/sprint/${sprintId}/issue`, {
        auth: { username: config.JIRA_USERNAME, password: config.JIRA_PASSWORD }
      })
      .then(response => {
        return this.jiraIssueMapper.mapJiraIssues(
          response.data.issues.filter(
            (response: any) => response.fields.sprint.id === 219
          )
        );
      });
  }
}
