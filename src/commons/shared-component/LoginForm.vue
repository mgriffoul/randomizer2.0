<template>
  <form>
    <label
      >Login
      <input type="text" placeholder="login" />
    </label>
    <label
      >Password
      <input type="password" placeholder="password" />
    </label>
    <button type="submit">Connect</button>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup() {
    const form = ref({
      login: String,
      password: String
    });
  }
};
</script>
