import { MutationTree } from "vuex";
import { State, Step } from "@/store/state";
import { TeamMember } from "@/team.config";

export enum MutationType {
  setAppReadyMutation = "SET_APP_READY_MUTATION",
  updateTeamMutation = "UPDATE_TEAM_MUTATION",
  setAppNotReadyMutation = "SET_APP_NOT_READY_MUTATION"
}

export type Mutations = {
  [MutationType.setAppNotReadyMutation](state: State): void;
  [MutationType.updateTeamMutation](state: State, team: TeamMember[]): void;
  [MutationType.setAppReadyMutation](state: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.updateTeamMutation](state, team) {
    localStorage.setItem("TEAM", JSON.stringify(team));
    state.team = team;
  },
  [MutationType.setAppReadyMutation](state) {
    state.step = Step.ready;
  },
  [MutationType.setAppNotReadyMutation](state) {
    state.step = Step.settingPresence;
  }
};
