<template>
  Connecté en tant que
  <p>{{ login }}</p>
  <button type="reset" v-on:click="disconnect">
    Disconnect
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserInfo",
  setup() {
    const store = useStore();
    const login = ref(store.getters.getLogin);

    const disconnect = () => {
      store.commit("muteUser", { login: "", password: "" });
    };

    return {
      login,
      disconnect
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
