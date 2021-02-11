import { GetterTree } from "vuex";
import { State, Step } from "@/store/state";

export type Getters = {
  getStep(state: State): string;
};

export const getters: GetterTree<State, State> & Getters = {
  getStep(state: State) {
    return state.step;
  },
  isAppReady(state: State) {
    return state.step === Step.ready;
  }
};
