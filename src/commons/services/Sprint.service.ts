import { SprintStories } from "@/components/report-generator/model/Sprint";
import { Story, StoryStatus, StoryType } from "@/repositories/model/Story";

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

  public getSprintBacklogFromSprintStories(sprint: SprintStories): number {
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

  public getDonePointsFromSprintStories(sprintStories: SprintStories): number {
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

  public getWipPointsFromSprintStories(sprintStories: any): any {
    let total = 0;
    sprintStories.functionalStories
      .filter((story: any) => story.status === StoryStatus.WIP)
      .forEach((story: Story) => {
        if (!story.refinedStoryPoint && story.storyPoint) {
          total += story.storyPoint;
        } else if (story.refinedStoryPoint && story.storyPoint) {
          total += story.refinedStoryPoint - story.storyPoint;
        }
      });
    sprintStories.technicalStories
      .filter((story: any) => story.status === StoryStatus.WIP)
      .forEach((story: Story) => {
        if (!story.refinedStoryPoint && story.storyPoint) {
          total += story.storyPoint;
        } else if (story.refinedStoryPoint && story.storyPoint) {
          total += story.refinedStoryPoint - story.storyPoint;
        }
      });
    return total;
  }

  public getSprintRemainingPointsFromSprintStories(
    sprint: SprintStories
  ): number {
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

  getSprintBacklogFromStoryList = (stories: Story[]): number => {
    if (!stories) {
      return 0;
    }
    return (
      stories
        .filter(
          story =>
            story.storyType === StoryType.FUNCTIONAL ||
            story.storyType === StoryType.TECHNICAL
        )
        .map(story => story.storyPoint)
        .reduce((max, current) => (max ?? 0) + (current ?? 0)) ?? 0
    );
  };

  getWipPointsFromStoryList = (stories: Story[]): number => {
    if (!stories) {
      return 0;
    }
    return (
      stories
        .filter(
          story =>
            story.status === StoryStatus.WIP &&
            (story.storyType === StoryType.FUNCTIONAL ||
              story.storyType === StoryType.TECHNICAL)
        )
        .map(story => story.storyPoint)
        .reduce((max, current) => (max ?? 0) + (current ?? 0)) ?? 0
    );
  };

  getDonePointsFromStoryList = (stories: Story[]): number => {
    if (!stories) {
      return 0;
    }

    stories
      .filter(
        story =>
          story.status === StoryStatus.DONE &&
          (story.storyType === StoryType.FUNCTIONAL ||
            story.storyType === StoryType.TECHNICAL)
      )
      .map(story => story.storyPoint ?? 0)
      .reduce((max, current) => (max ?? 0) + (current ?? 0) ?? 0, 0);

    return stories
      .filter(
        story =>
          story.status === StoryStatus.DONE &&
          (story.storyType === StoryType.FUNCTIONAL ||
            story.storyType === StoryType.TECHNICAL)
      )
      .map(story => story.storyPoint ?? 0)
      .reduce((max, current) => (max ?? 0) + (current ?? 0) ?? 0, 0);
  };
}
