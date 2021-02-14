import JiraIssueMapper from "./JiraIssueMapper";
import {
  StoryStatus,
  StoryType
} from "@/components/report-generator/model/Story";

const jiraIssue1 = {
  id: "11111",
  key: "ART-1111",
  fields: {
    customfield_11561: 5,
    status: {
      name: "Refined, sized & ready for dev."
    },
    issuetype: {
      name: "Bug"
    },
    summary: "Les modales du FO ne se superposent pas correctement",
    customfield_10004: 3
  }
};
const jiraIssuesMock = [
  jiraIssue1,
  {
    id: "22222",
    key: "ART-2222",
    fields: {
      customfield_11561: 3,
      status: {
        name: "Dev in progress"
      },
      issuetype: {
        name: "Story"
      },
      summary: "Les driver ne savent pas conduire",
      customfield_10004: 1
    }
  },
  {
    id: "33333",
    key: "ART-3333",
    fields: {
      customfield_11561: 2,
      status: {
        name: "Terminé"
      },
      issuetype: {
        name: "Technical story"
      },
      summary: "Afficher des trucs sur les machins",
      customfield_10004: 2
    }
  }
];

describe("StoriesMapper should", () => {
  it("return mapped Story from Jira Issue", () => {
    // Given
    const storiesMapper = new JiraIssueMapper();

    // When
    const result = storiesMapper.mapJiraIssue(jiraIssue1);

    // Then
    expect(result.id).toEqual("11111");
    expect(result.status).toEqual(StoryStatus.TODO);
    expect(result.key).toEqual("ART-1111");
    expect(result.id).toEqual("11111");
    expect(result.summary).toEqual(
      "Les modales du FO ne se superposent pas correctement"
    );
    expect(result.storyType).toEqual(StoryType.BUG);
    expect(result.storyPoint).toEqual(3);
    expect(result.refinedStoryPoint).toEqual(5);
  });

  it("return mapped Stories from Jira Issue List", () => {
    // Given
    const storiesMapper = new JiraIssueMapper();

    // When
    const result = storiesMapper.mapJiraIssues(jiraIssuesMock);

    // Then
    expect(result[0].status).toEqual(StoryStatus.TODO);
    expect(result[0].key).toEqual("ART-1111");
    expect(result[0].id).toEqual("11111");
    expect(result[0].summary).toEqual(
      "Les modales du FO ne se superposent pas correctement"
    );
    expect(result[0].storyType).toEqual(StoryType.BUG);
    expect(result[0].storyPoint).toEqual(3);
    expect(result[0].refinedStoryPoint).toEqual(5);

    expect(result[1].status).toEqual(StoryStatus.WIP);
    expect(result[1].key).toEqual("ART-2222");
    expect(result[1].id).toEqual("22222");
    expect(result[1].summary).toEqual("Les driver ne savent pas conduire");
    expect(result[1].storyType).toEqual(StoryType.FUNCTIONAL);
    expect(result[1].storyPoint).toEqual(1);
    expect(result[1].refinedStoryPoint).toEqual(3);

    expect(result[2].status).toEqual(StoryStatus.DONE);
    expect(result[2].key).toEqual("ART-3333");
    expect(result[2].id).toEqual("33333");
    expect(result[2].summary).toEqual("Afficher des trucs sur les machins");
    expect(result[2].storyType).toEqual(StoryType.TECHNICAL);
    expect(result[2].storyPoint).toEqual(2);
    expect(result[2].refinedStoryPoint).toEqual(2);
  });
});
