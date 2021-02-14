import { GetterTree } from "vuex";
import { State, Step } from "@/store/state";
import { TeamMember } from "@/team.config";

export enum GettersTypes {
  getStep = "GET_STEP",
  isAppReady = "IS_APP_READY",
  getTeam = "GET_TEAM"
}

export type Getters = {
  [GettersTypes.getStep](state: State): string;
  [GettersTypes.isAppReady](state: State): boolean;
  [GettersTypes.getTeam](state: State): TeamMember[];
};

export const getters: GetterTree<State, State> & Getters = {
  [GettersTypes.getStep](state: State) {
    return state.step;
  },
  [GettersTypes.isAppReady](state: State) {
    return state.step === Step.ready;
  },
  [GettersTypes.getTeam](state: State) {
    return state.team;
  }
};
