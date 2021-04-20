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
    muteUser(state: any, user: { login: string; password: string }) {
      state.user = user;
    }
  }
});
