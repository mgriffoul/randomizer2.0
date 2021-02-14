<template>
  <div class="randomizer">
    <div class="navigation">
      <img
        :src="require('@/assets/back-arrow.svg')"
        v-if="IS_APP_READY"
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
import { defineComponent } from "vue";
import { TeamMember } from "@/team.config";
import TeamMemberComponent from "@/components/team-member/TeamMemberComponent.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import TeamMemberRepository from "@/commons/repositories/TeamMemberRepository";
import RandomizeService from "@/components/randomizer/RandomizeService";

const teamMemberRepository = new TeamMemberRepository();
const randomizeService = new RandomizeService();

export default defineComponent({
  name: "RandomizerComponent",
  components: {
    TeamMemberComponent
  },
  data() {
    return {
      team: [] as TeamMember[]
    };
  },
  mounted() {
    this.team = teamMemberRepository.fetchTeam();
  },
  methods: {
    handleClick(): void {
      if (this.IS_APP_READY) {
        randomizeService.randomize(this.team);
      } else {
        this.SET_APP_READY_ACTION(this.team);
      }
    },

    handleCheckEvent(value: { id: number; isPresent: boolean }) {
      const modifiedTeamMember = this.team.filter(
        value1 => value1.id === value.id
      )[0];
      console.log(value.isPresent);
      modifiedTeamMember.presence = value.isPresent;
      console.log(this.team);
    },

    handleClickBack() {
      this.SET_APP_NOT_READY_MUTATION();
    },

    ...mapMutations(["SET_APP_NOT_READY_MUTATION"]),
    ...mapActions(["SET_APP_READY_ACTION"])
  },
  computed: {
    ...mapGetters(["IS_APP_READY"]),
    getButtonLabel(): string {
      if (this.IS_APP_READY) return "GO RANDOMIZE";
      else return "TEAM READY";
    }
  }
});
</script>

<style lang="scss">
@import "./randomizer";
</style>
