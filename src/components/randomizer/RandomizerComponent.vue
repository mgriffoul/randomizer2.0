<template>
  <div class="randomizer">
    <button class="randomize-button" @click="randomize">
      <span class="blink_me">GO RANDOM</span>
    </button>
    <ul>
      <li v-for="teamMember in teamMemberList" :key="teamMember.id">
        <TeamMember
          :firstName="teamMember.firstName"
          :avatarFileName="teamMember.avatarFileName"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TeamConfig, TeamMember } from "@/team.config";
import TeamMemberComponent from "@/components/team-member/TeamMemberComponent.vue";

@Options({
  components: {
    TeamMember: TeamMemberComponent
  }
})
export default class RandomizerComponent extends Vue {
  teamMemberList: TeamMember[] = [];
  ticksNumber = 0;

  beforeCreate() {
    this.teamMemberList = new TeamConfig().getTeamMemberList();
  }

  async randomize(): Promise<void> {
    this.ticksNumber = 1;
    setTimeout(this.manageTicks, 1000);
  }

  private manageTicks() {
    this.calculateNewOrder();
    this.$nextTick(() => {
      console.log("$nextTick ", this.ticksNumber);
      if (this.ticksNumber <= 120) {
        setTimeout(this.manageTicks, 700 / this.ticksNumber);
      } else {
        return;
      }
      this.ticksNumber++;
    });
  }

  private calculateNewOrder() {
    console.log("calculate ", this.ticksNumber);
    const minIndex = Math.ceil(1);
    const maxIndex = Math.floor(this.teamMemberList.length);
    const attributedIndexes: number[] = [];

    while (attributedIndexes.length < this.teamMemberList.length) {
      const currentIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      if (!attributedIndexes.includes(currentIndex)) {
        attributedIndexes.push(currentIndex);
      }
    }
    let count = 0;
    this.teamMemberList.forEach(teamMember => {
      teamMember.order = attributedIndexes[count];
      count++;
    });
    this.teamMemberList.sort(this.compare);
  }

  private compare(first: TeamMember, second: TeamMember) {
    return first.order - second.order;
  }
}
</script>

<style lang="scss">
@import "./randomizer";
</style>
