import Story, { StoryType } from "../../model/Story";

export class SprintService {
  public getOnlyBugs = (stories: Story[]): Story[] => {
    return stories.filter((story: Story) => {
      return !story.storyType || story.storyType === StoryType.BUG;
    });
  };

  public getOnlyfunctionalStories = (stories: Story[]): Story[] => {
    return stories.filter((story: Story) => {
      return story.storyType === StoryType.FUNCTIONAL;
    });
  };

  public getOnlyTechnicalStory = (stories: Story[]): Story[] => {
    return stories.filter((story: Story) => {
      return story.storyType === StoryType.TECHNICAL;
    });
  };
}
