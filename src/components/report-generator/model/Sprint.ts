import { Story } from "@/repositories/model/Story";

export type SprintKey = "functionalStories" | "technicalStories" | "bugs";

export interface Sprint {
  sprintStories: SprintStories;
  sprintBacklog: number;
  remain: number;
  done: number;
  wip: number;
  sprintName?: string;
}

export type SprintStories = { [key in SprintKey]: Story[] };
