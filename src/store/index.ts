import {
  CommitOptions,
  createStore,
  DispatchOptions,
  Store as VuexStore
} from "vuex";
import { state, State } from "@/store/state";
import { mutations, Mutations } from "@/store/mutations";
import { getters, Getters } from "@/store/getters";
import { actions, Actions } from "@/store/actions";

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

export function useStore() {
  return store as Store;
}

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
