import { State } from "@/store/state";
import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "@/store/mutations";
import { TeamMember } from "@/team.config";

export enum ActionTypes {
  SetAppReadyAction = "SET_APP_READY_ACTION"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: TeamMember[]
  ): ReturnType<Mutations[K]>;
} & {
  commit<K extends keyof Mutations>(key: K): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.SetAppReadyAction](
    context: ActionAugments,
    team: TeamMember[]
  ): void;
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.SetAppReadyAction]({ commit }, team: TeamMember[]) {
    commit(MutationType.updateTeamMutation, team);
    commit(MutationType.setAppReadyMutation);
  }
};
