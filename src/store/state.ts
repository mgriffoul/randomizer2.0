import { TeamConfig, TeamMember } from "@/team.config";

export enum Step {
  settingPresence = "SETTING_PRESENCE",
  ready = "READY"
}

export type State = {
  step: Step;
  team: TeamMember[];
};

export const state: State = {
  step: Step.settingPresence,
  team: localStorage.getItem("TEAM")
    ? JSON.parse(localStorage.getItem("TEAM") as string)
    : TeamConfig.getTeam()
};
