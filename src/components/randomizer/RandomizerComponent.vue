<template>
  <div class="randomizer">
    <button class="randomize-button" @click="attributeOrder">
      <span class="blink_me">RANDOMIZE =></span>
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
import { RandomizerConfig } from "@/components/randomizer/randomizer.config";
import TeamMemberComponent from "@/components/team-member/TeamMemberComponent.vue";
import { TeamMember } from "@/components/model/TeamMember";

@Options({
  components: {
    TeamMember: TeamMemberComponent
  }
})
export default class RandomizerComponent extends Vue {
  teamMemberList: TeamMember[] = [];

  mounted() {
    this.teamMemberList = new RandomizerConfig().getTeamMemberList();
    this.teamMemberList.map(value => console.log(value));
  }
}
</script>

<style lang="scss">
@import "./randomizer";
</style>
