<template>
  <form v-on:submit="handleValidate($event)">
    <label
      >Login
      <input type="text" v-model="login" placeholder="login" />
    </label>
    <label
      >Password
      <input type="password" v-model="password" placeholder="password" />
    </label>
    <button type="submit">
      Connect
    </button>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup(props: any, { emit }: any) {
    const login = ref("");
    const password = ref("");

    const handleValidate = (e: any) => {
      emit("loginSend", { login: login.value, password: password.value });
      e.preventDefault();
    };

    return {
      login,
      password,
      handleValidate
    };
  }
};
</script>
