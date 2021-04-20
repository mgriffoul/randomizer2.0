<template>
  <form v-on:submit="handleValidate($event)">
    <div class="form-wrapper">
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
    </div>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "LoginForm",
  setup() {
    const store = useStore();
    const login = ref("");
    const password = ref("");

    const handleValidate = (e: any) => {
      store.commit("muteUser", {
        login: login.value,
        password: password.value
      });
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

<style lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
