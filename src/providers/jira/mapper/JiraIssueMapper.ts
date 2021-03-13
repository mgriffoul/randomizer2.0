import {
  Story,
  StoryStatus,
  StoryType
} from "@/components/report-generator/model/Story";
import { JiraIssue } from "@/providers/jira/model/JiraIssue";

export default class JiraIssueMapper {
  public mapJiraIssue(jiraIssue: JiraIssue): Story {
    const story: Story = {
      id: jiraIssue.id,
      key: jiraIssue.key,
      summary: jiraIssue.fields.summary,
      storyPoint: jiraIssue.fields.customfield_10004,
      refinedStoryPoint: jiraIssue.fields?.customfield_11561,
      status: JiraIssueMapper.getStoryStatus(jiraIssue.fields.status.name),
      storyType: JiraIssueMapper.getStoryType(jiraIssue.fields.issuetype.name)
    };
    return story;
  }

  public mapJiraIssues(jiraIssues: JiraIssue[]): Story[] {
    const stories: Story[] = [];

    jiraIssues.forEach((jiraIssue: JiraIssue) => {
      stories.push(this.mapJiraIssue(jiraIssue));
    });

    return stories;
  }

  private static getStoryType(jiraIssueType: string): StoryType {
    if (jiraIssueType === StoryType.TECHNICAL) {
      return StoryType.TECHNICAL;
    } else if (jiraIssueType === StoryType.FUNCTIONAL) {
      return StoryType.FUNCTIONAL;
    } else {
      return StoryType.BUG;
    }
  }

  private static getStoryStatus(statusName: string): StoryStatus {
    if (statusName === "Dev in progress") {
      return StoryStatus.WIP;
    } else if (statusName === "Terminé") {
      return StoryStatus.DONE;
    } else {
      return StoryStatus.TODO;
    }
  }
}
