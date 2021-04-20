import { Story } from "@/components/report-generator/model/Story";

export type SprintKey = "functionalStories" | "technicalStories" | "bugs";

export type SprintStories = { [key in SprintKey]: Story[] };

export interface Sprint {
  sprintStories: SprintStories;
  sprintBacklog: number;
  remain: number;
  done: number;
  wip: number;
  sprintName?: string;
}
