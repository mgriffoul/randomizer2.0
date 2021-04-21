export enum StoryType {
  FUNCTIONAL = "Story",
  TECHNICAL = "Technical story",
  BUG = "Bug"
}

export enum StoryStatus {
  DONE = "done",
  WIP = "workInProgress",
  TODO = "todo"
}

/**
 * Story points are the current remain of a story in Artel's Jira workflow.
 * Refined story points are the value that dev team attributed to the story in refinement
 * They are setted by the team in custom fields.
 * In Jira Api, thoose custom fields have codes as key :
 * Story point code = customfield_10004
 * Refined story point = customfield_11561
 */
export interface Story {
  id: string;
  key: string;
  summary: string;
  status: StoryStatus | undefined;
  storyType: StoryType | undefined;
  // customfield_10004
  storyPoint?: number;
  // customfield_11561
  refinedStoryPoint?: number;
  sprintName?: string;
}
