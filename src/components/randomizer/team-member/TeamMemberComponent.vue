<template>
  <div class="team-member" v-if="shouldDisplayMember">
    <div class="img-wrapper" @click="togglePresence">
      <img
        class="avatar"
        :src="require(`@/assets/avatar/${avatarFileName}`)"
        :alt="firstName"
      />
      <div class="overlay" v-bind:class="{ present: !isPresent }"></div>
    </div>
    <span class="order" v-if="isRandomizeCompleted">{{ order }}</span>
    <span class="first-name">{{ firstName }}</span>
  </div>
</template>

<script lang="ts">
import { toRefs, computed, ref } from "vue";
import { Step } from "@/components/randomizer/RandomizerComponent.vue";

interface State {
  step: Step;
}

interface Props {
  presence: boolean;
  firstName: string;
  avatarFileName: string;
  id: number;
  order: number;
  step: Step;
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
    id: { type: Number, required: true },
    order: { type: Number, required: true },
    step: { type: Step, required: true }
  },
  setup(props: Props, { emit }: { emit: Function }) {
    const { id, step } = { ...toRefs(props) };
    const isPresent = ref(props.presence);

    const isAppReady = computed(() => {
      return step.value === Step.ready;
    });
    const isRandomizeCompleted = computed(() => {
      return step.value === Step.randomizeCompleted;
    });
    const presenceSettingUp = computed(() => {
      return step.value === Step.settingPresence;
    });
    const shouldDisplayMember = computed(() => {
      return presenceSettingUp.value || isPresent.value;
    });

    const togglePresence = function() {
      if (!isAppReady.value) {
        isPresent.value = !isPresent.value;
        emit("check", { id: id.value, isPresent: isPresent.value });
      }
    };

    return {
      isPresent,
      shouldDisplayMember,
      isAppReady,
      isRandomizeCompleted,
      togglePresence
    };
  }
};
</script>

<style lang="scss">
@import "src/components/randomizer/team-member/team-member";
</style>
