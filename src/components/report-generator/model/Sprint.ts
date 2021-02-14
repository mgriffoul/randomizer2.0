import Story from "../../../components/report-generator/model/Story";

export interface Sprint {
  functionalStories: Story[];
  technicalStories: Story[];
  bugs: Story[];
}
