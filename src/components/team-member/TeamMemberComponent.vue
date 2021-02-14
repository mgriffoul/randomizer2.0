<template>
  <div class="team-member" v-if="shouldDisplayMember">
    <img
      class="avatar"
      :src="require(`@/assets/avatar/${avatarFileName}`)"
      :alt="firstName"
    />
    <span class="first-name">{{ firstName }}</span>
    <label>
      <input type="checkbox" v-model="isPresent" v-show="!isAppReady" />
    </label>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from "vue";
import { useStore } from "@/store";

interface Props {
  presence: boolean;
  firstName: string;
  avatarFileName: string;
  id: number;
}

export default {
  name: "TeamMemberComponent",
  emits: {
    check(payload: { id: number; isPresent: boolean }) {
      return payload;
    }
  },
  props: {
    presence: { type: Boolean, required: true },
    firstName: { type: String, required: true },
    avatarFileName: { type: String, required: true },
    id: { type: Number, required: true }
  },
  setup(props: Props, { emit }: { emit: Function }) {
    const store = useStore();
    const id = ref(props.id);
    const isPresent = ref(props.presence);

    const isAppReady = computed(() => {
      return store.getters.IS_APP_READY;
    });
    const shouldDisplayMember = computed(() => {
      return !isAppReady.value || (isAppReady.value && isPresent.value);
    });

    watch(isPresent, () => {
      emit("check", { id: id.value, isPresent: isPresent.value });
    });

    return {
      isPresent,
      shouldDisplayMember,
      isAppReady
    };
  }
};
</script>

<style lang="scss">
@import "./_team-member.scss";
</style>
