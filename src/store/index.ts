import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      login: "",
      password: ""
    }
  },
  getters: {
    getLogin(state: any) {
      return state.user.login;
    },
    getPassword(state: any) {
      return state.user.password;
    },
    getUser(state: any) {
      return state.user;
    },
    isUserLogged(state: any) {
      return state.user.login && state.user.password;
    }
  },
  mutations: {
    muteLogin(state: any, login: string) {
      state.user.login = login;
    },
    mutePassword(state: any, password: string) {
      state.user.password = password;
    },
    muteUser(state: any, user: { login: string; password: string }) {
      state.user = user;
    }
  }
});
