import Story, {
  StoryStatus,
  StoryType
} from "@/components/report-generator/model/Story";
import { Sprint } from "@/components/report-generator/model/Sprint";
import { SprintService } from "@/components/report-generator/service/sprint/Sprint.service";

describe("SprintService : ", () => {
  const story1 = new Story("id1", "key1", "summary1", 3, 5);
  story1.status = StoryStatus.DONE;
  story1.storyType = StoryType.TECHNICAL;
  const story2 = new Story("id2", "key2", "summary2", 2, 3);
  story2.status = StoryStatus.WIP;
  story2.storyType = StoryType.TECHNICAL;
  const story3 = new Story("id3", "key3", "summary3", 2, 5);
  story3.status = StoryStatus.WIP;
  story3.storyType = StoryType.FUNCTIONAL;
  const story4 = new Story("id4", "key4", "summary4", 1, 1);
  story4.status = StoryStatus.DONE;
  story4.storyType = StoryType.FUNCTIONAL;
  const story5 = new Story("id5", "key5", "summary5", 1, 1);
  story5.status = StoryStatus.WIP;
  story5.storyType = StoryType.BUG;
  const story6 = new Story("id6", "key6", "summary6", 1, 1);
  story6.status = StoryStatus.TODO;
  story6.storyType = StoryType.BUG;
  const story7 = new Story("id7", "key7", "summary7", 1, 1);
  story7.status = StoryStatus.TODO;
  const storyList = [story7, story6, story5, story4, story3, story2, story1];

  const sprintService: SprintService = new SprintService();

  it("getOnlyBugs shouldreturn only bugs from storyList", () => {
    // Given
    // When

    const sprint: Sprint = {
      bugs: sprintService.getOnlyBugs(storyList),
      technicalStories: sprintService.getOnlyTechnicalStory(storyList),
      functionalStories: sprintService.getOnlyfunctionalStories(storyList)
    };
    console.log(sprint);
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
});
