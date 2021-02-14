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
export default class Story {
  public id: string;
  public key: string;
  public summary: string;
  public status: StoryStatus | undefined;
  public storyType: StoryType | undefined;
  // customfield_10004
  storyPoint?: number | undefined | null;
  // customfield_11561
  refinedStoryPoint?: number | undefined | null;

  constructor(
    id: string,
    key: string,
    summary: string,
    storyPoint: number | undefined | null,
    refinedStoryPoint: number | undefined | null
  ) {
    this.id = id;
    this.key = key;
    this.summary = summary;
    this.storyPoint = storyPoint;
    this.refinedStoryPoint = refinedStoryPoint;
  }
}
