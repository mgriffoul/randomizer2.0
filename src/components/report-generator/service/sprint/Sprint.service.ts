import { SprintStories } from "@/components/report-generator/model/SprintStories";
import {
  Story,
  StoryStatus,
  StoryType
} from "@/components/report-generator/model/Story";

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

  public getSprintBacklogPoints(sprint: SprintStories): number {
    let total = 0;

    sprint.functionalStories.forEach((story: Story) => {
      if (story.storyPoint) {
        total += story.refinedStoryPoint ?? story.storyPoint;
      }
    });
    sprint.technicalStories.forEach((story: Story) => {
      if (story.storyPoint) {
        total += story.refinedStoryPoint ?? story.storyPoint;
      }
    });

    return total;
  }

  public getDonePoints(sprintStories: SprintStories): number {
    let total = 0;

    sprintStories.functionalStories.forEach(story => {
      if (!story.refinedStoryPoint && story.storyPoint) {
        total += story.storyPoint;
      } else if (story.refinedStoryPoint && story.storyPoint) {
        total += story.refinedStoryPoint - story.storyPoint;
      }
    });
    sprintStories.technicalStories.forEach(story => {
      if (!story.refinedStoryPoint && story.storyPoint) {
        total += story.storyPoint;
      } else if (story.refinedStoryPoint && story.storyPoint) {
        total += story.refinedStoryPoint - story.storyPoint;
      }
    });

    return total;
  }

  public getWipPoints(sprintStories: any): any {
    return sprintStories.functionalStories
      .filter((story: any) => story.status === StoryStatus.WIP)
      .map((story: any) => story.storyPoint)
      .reduce((max: any, current: any) => max + current);
  }

  public getSprintRemainingPoints(sprint: SprintStories): number {
    let total = 0;
    sprint.functionalStories.forEach((story: Story) => {
      if (story.refinedStoryPoint && story.storyPoint) {
        total += story.storyPoint;
      }
    });
    sprint.technicalStories.forEach((story: Story) => {
      if (story.refinedStoryPoint && story.storyPoint) {
        total += story.storyPoint;
      }
    });
    return total;
  }
}
