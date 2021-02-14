<template>
  <div class="randomizer">
    <div class="navigation">
      <img
        :src="require('@/assets/back-arrow.svg')"
        v-if="isAppReady"
        @click="handleClickBack"
        alt="back-arrow"
      />
      <button class="randomize-button" @click="handleClick">
        <span class="blink_me">{{ getButtonLabel }}</span>
      </button>
    </div>
    <ul>
      <li v-for="teamMember in team" :key="teamMember.id">
        <TeamMemberComponent
          @check="handleCheckEvent($event)"
          :firstName="teamMember.firstName"
          :avatarFileName="teamMember.avatarFileName"
          :presence="teamMember.presence"
          :id="teamMember.id"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { onMounted, computed, reactive, toRefs } from "vue";
import TeamMemberComponent from "@/components/team-member/TeamMemberComponent.vue";
import TeamMemberRepository from "@/commons/repositories/TeamMemberRepository";
import RandomizeService from "@/components/randomizer/RandomizeService";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
import { ActionTypes } from "@/store/actions";
import { TeamMember } from "@/team.config";

interface State {
  team: TeamMember[];
}

export default {
  name: "RandomizerComponent",
  components: {
    TeamMemberComponent
  },
  setup() {
    const teamMemberRepository = new TeamMemberRepository();
    const randomizeService = new RandomizeService();

    const state: State = reactive({
      team: []
    });

    const store = useStore();

    onMounted(() => {
      state.team = teamMemberRepository.fetchTeam();
    });

    console.log("after fetch", state.team);

    const isAppReady = computed(() => {
      return store.getters.IS_APP_READY;
    });
    const getButtonLabel = computed(() => {
      if (isAppReady.value) return "GO RANDOMIZE";
      else return "TEAM READY";
    });

    const handleClick = (): void => {
      if (isAppReady.value) {
        randomizeService.randomize(state.team);
      } else {
        store.dispatch(ActionTypes.SetAppReadyAction, state.team);
      }
    };

    const handleCheckEvent = (value: {
      id: number;
      isPresent: boolean;
    }): void => {
      const modifiedTeamMember = state.team.filter(
        value1 => value1.id === value.id
      )[0];
      modifiedTeamMember.presence = value.isPresent;
    };
    const handleClickBack = () => {
      store.commit(MutationType.setAppNotReadyMutation);
    };

    return {
      ...toRefs(state),
      handleClick,
      isAppReady,
      handleCheckEvent,
      handleClickBack,
      getButtonLabel
    };
  }
};
</script>

<style lang="scss">
@import "./randomizer";
</style>
