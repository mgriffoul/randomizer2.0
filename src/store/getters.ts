import { GetterTree } from "vuex";
import { State, Step } from "@/store/state";

export enum GettersTypes {
  getStep = "GET_STEP",
  isAppReady = "IS_APP_READY"
}

export type Getters = {
  [GettersTypes.getStep](state: State): string;
  [GettersTypes.isAppReady](state: State): boolean;
};

export const getters: GetterTree<State, State> & Getters = {
  [GettersTypes.getStep](state: State) {
    return state.step;
  },
  [GettersTypes.isAppReady](state: State) {
    return state.step === Step.ready;
  }
};
