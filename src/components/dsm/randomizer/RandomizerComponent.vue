<template>
  <div class="randomizer">
    <div class="navigation">
      <img
        :src="require('@/assets/back-arrow.svg')"
        v-if="isAppReady || isRandomizeCompleted"
        @click="handleClickBack"
        alt="back-arrow"
      />
      <button class="randomize-button" @click="handleClick">
        <span>{{ getButtonLabel }}</span>
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
          :order="teamMember.order"
          :step="step"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import TeamMemberComponent from "@/components/dsm/randomizer/team-member/TeamMemberComponent.vue";
import TeamMembersProvider from "@/providers/team/TeamMembersProvider";
import RandomizeService from "@/components/dsm/randomizer/RandomizeService";
import { TeamMember } from "@/team.config";

export interface State {
  team: TeamMember[];
  step: Step;
}

export enum Step {
  settingPresence = "SETTING_PRESENCE",
  ready = "READY",
  pending = "PENDING",
  randomizeCompleted = "COMPLETED"
}

export default {
  name: "RandomizerComponent",
  components: {
    TeamMemberComponent
  },
  setup() {
    const teamMemberRepository = new TeamMembersProvider();
    const randomizeService = new RandomizeService();

    const state: State = reactive({
      team: [],
      step: Step.settingPresence
    });

    onMounted(() => {
      state.team = teamMemberRepository.fetchTeam();
    });

    const isAppReady = computed(() => {
      return state.step === Step.ready;
    });
    const isRandomizeCompleted = computed(() => {
      return state.step === Step.randomizeCompleted;
    });
    const isRandomizePending = computed(() => {
      return state.step === Step.pending;
    });
    const getButtonLabel = computed(() => {
      if (isAppReady.value) return "GO RANDOMIZE";
      if (isRandomizeCompleted.value) return "REDO";
      if (isRandomizePending.value) return "PROCESSING...";
      else return "IM READY";
    });

    const handleClick = async () => {
      if (isAppReady.value || isRandomizeCompleted.value) {
        state.step = Step.pending;
        await randomizeService.randomize(state.team).then(() => {
          state.step = Step.randomizeCompleted;
        });
      } else {
        state.step = Step.ready;
        teamMemberRepository.storeInLocalStorage(state.team);
      }
    };

    const compareById = (first: TeamMember, second: TeamMember): number => {
      return first.id - second.id;
    };

    const handleCheckEvent = (value: {
      id: number;
      isPresent: boolean;
    }): void => {
      if (state.step !== Step.settingPresence) {
        return;
      }

      const modifiedTeamMember = ref(
        state.team.filter(value1 => value1.id === value.id)[0]
      );

      modifiedTeamMember.value.presence = !modifiedTeamMember.value.presence;

      const newTeam: TeamMember[] = state.team.filter(
        value1 => value1.id !== value.id
      );

      newTeam.push(modifiedTeamMember.value);
      state.team = newTeam.sort(compareById);
    };

    const handleClickBack = () => {
      state.step = Step.settingPresence;
      state.team.sort(compareById);
    };

    return {
      ...toRefs(state),
      handleClick,
      isAppReady,
      isRandomizeCompleted,
      handleCheckEvent,
      handleClickBack,
      getButtonLabel
    };
  }
};
</script>

<style lang="scss">
@import "src/components/dsm/randomizer/randomizer";
</style>
