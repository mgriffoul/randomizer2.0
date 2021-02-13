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
import { defineComponent } from "vue";
import { TeamConfig, TeamMember } from "@/team.config";
import TeamMemberComponent from "@/components/team-member/TeamMemberComponent.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "RandomizerComponent",

  components: {
    TeamMemberComponent
  },

  data() {
    return {
      team: [] as TeamMember[],
      ticksNumber: 0
    };
  },

  created() {
    this.team = this.fetchTeam();
  },

  methods: {
    fetchTeam(): TeamMember[] {
      return localStorage.getItem("TEAM")
        ? (JSON.parse(localStorage.getItem("TEAM") as string) as TeamMember[])
        : TeamConfig.getTeam();
    },

    randomize(): void {
      this.ticksNumber = 1;
      setTimeout(this.manageTicks, 1000);
    },

    manageTicks(): void {
      this.calculateNewOrder();
      if (this.ticksNumber <= 120) {
        setTimeout(this.manageTicks, 700 / this.ticksNumber);
      } else {
        return;
      }
      this.ticksNumber++;
    },

    calculateNewOrder(): void {
      console.log("calculate ", this.ticksNumber);
      const minIndex = Math.ceil(1);
      const maxIndex = Math.floor(this.team.length);
      const attributedIndexes: number[] = [];

      while (attributedIndexes.length < this.team.length) {
        const currentIndex =
          Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        if (!attributedIndexes.includes(currentIndex)) {
          attributedIndexes.push(currentIndex);
        }
      }
      let count = 0;
      this.team.forEach((teamMember: { order: number }) => {
        teamMember.order = attributedIndexes[count];
        count++;
      });
      this.team.sort(this.compare);
    },

    compare(first: TeamMember, second: TeamMember): number {
      return first.order - second.order;
    },

    handleClick(): void {
      if (this.isAppReady) {
        this.randomize();
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
    ...mapGetters(["isAppReady"]),
    getButtonLabel(): string {
      if (this.isAppReady) return "GO RANDOMIZE";
      else return "TEAM READY";
    }
  }
});
</script>

<style lang="scss">
@import "./randomizer";
</style>
