import { MutationTree } from "vuex";
import { State, Step } from "@/store/state";
import { TeamMember } from "@/team.config";

export enum MutationType {
  SetReady = "SET_READY",
  SetNotReady = "SET_NOT_READY",
  UpdateTeam = "UPDATE_TEAM"
}

export type Mutations = {
  [MutationType.SetReady](state: State): void;
  [MutationType.UpdateTeam](state: State, team: TeamMember[]): void;
  [MutationType.SetNotReady](state: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetReady](state: State) {
    state.step = Step.ready;
    localStorage.setItem("TEAM", JSON.stringify(state.team));
  },
  [MutationType.UpdateTeam](state: State, team: TeamMember[]) {
    state.team = team;
  },
  [MutationType.SetNotReady](state: State) {
    state.step = Step.settingPresence;
  }
};
