import {
  Story,
  StoryStatus,
  StoryType
} from "@/components/report-generator/model/Story";
import { SprintStories } from "@/components/report-generator/model/SprintStories";
import { SprintService } from "@/components/report-generator/service/sprint/Sprint.service";

describe("SprintService : ", () => {
  const story1: Story = {
    id: "id1",
    key: "key1",
    summary: "summary1",
    storyPoint: 3,
    refinedStoryPoint: 5,
    status: StoryStatus.WIP,
    storyType: StoryType.TECHNICAL
  };
  const story2: Story = {
    id: "id2",
    key: "key2",
    summary: "summary2",
    storyPoint: 2,
    status: StoryStatus.DONE,
    storyType: StoryType.TECHNICAL
  };
  const story3: Story = {
    id: "id3",
    key: "key3",
    summary: "summary3",
    storyPoint: 2,
    status: StoryStatus.DONE,
    storyType: StoryType.FUNCTIONAL
  };
  const story4: Story = {
    id: "id4",
    key: "key4",
    summary: "summary4",
    storyPoint: 1,
    refinedStoryPoint: 2,
    status: StoryStatus.WIP,
    storyType: StoryType.FUNCTIONAL
  };
  const story5: Story = {
    id: "id5",
    key: "key5",
    summary: "summary5",
    status: StoryStatus.WIP,
    storyType: StoryType.BUG
  };
  const story6: Story = {
    id: "id6",
    key: "key6",
    summary: "summary6",
    status: StoryStatus.TODO,
    storyType: StoryType.BUG
  };
  const story7: Story = {
    id: "id7",
    key: "key7",
    summary: "summary7",
    status: StoryStatus.TODO,
    storyType: StoryType.BUG
  };

  const storyList: Story[] = [
    story7,
    story6,
    story5,
    story4,
    story3,
    story2,
    story1
  ];

  const sprintService: SprintService = new SprintService();

  it("getOnlyBugs shouldreturn only bugs from storyList", () => {
    // Given
    // When

    const sprint: SprintStories = {
      bugs: sprintService.getOnlyBugs(storyList),
      technicalStories: sprintService.getOnlyTechnicalStory(storyList),
      functionalStories: sprintService.getOnlyfunctionalStories(storyList)
    };
    // Then
    expect(sprint.technicalStories.length).toEqual(2);
    expect(sprint.technicalStories).toContain(story1);
    expect(sprint.technicalStories).toContain(story2);
    expect(sprint.bugs.length).toEqual(3);
    expect(sprint.bugs).toContain(story5);
    expect(sprint.bugs).toContain(story6);
    expect(sprint.bugs).toContain(story7);
    expect(sprint.functionalStories.length).toEqual(2);
    expect(sprint.functionalStories).toContain(story3);
    expect(sprint.functionalStories).toContain(story4);
  });

  it("getSprintBacklogPoints should return total of sprint story point, counting refinedStoryPoint instead if defined", () => {
    // Given
    const sprint: SprintStories = {
      bugs: [story5, story6, story7],
      technicalStories: [story1, story2],
      functionalStories: [story4, story3]
    };

    // When
    const result = sprintService.getSprintBacklogPoints(sprint);

    // Then
    expect(result).toEqual(11);
  });

  it("getSprintRemainingPoints should return total of remaining points", () => {
    // Given
    const sprint: SprintStories = {
      bugs: [story5, story6, story7],
      technicalStories: [story1, story2],
      functionalStories: [story4, story3]
    };

    // When
    const result = sprintService.getSprintRemainingPoints(sprint);

    // Then
    expect(result).toEqual(1);
  });

  it("getDonePoints should return total of done points", () => {
    // Given
    const maStory: Story = {
      id: "id2",
      key: "key2",
      summary: "summary2",
      storyPoint: 2,
      status: StoryStatus.DONE,
      storyType: StoryType.FUNCTIONAL
    };
    const sprintStories: SprintStories = {
      functionalStories: [maStory, story4],
      technicalStories: [],
      bugs: []
    };

    // When
    const result = sprintService.getDonePoints(sprintStories);

    // Then
    expect(result).toEqual(3);
  });
});
